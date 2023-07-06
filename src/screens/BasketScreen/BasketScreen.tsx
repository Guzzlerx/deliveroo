import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  selectBasketFee,
  selectBasketItems,
  selectBasketTotal,
  selectRestaurant,
} from "store/selectors";
import { useAppSelector } from "store/store";
import { PATH } from "constants/path";
import { urlFor } from "api/groq/sanityClient";
import BasketHeader from "./Parts/BasketHeader/BasketHeader";
import DeliveryInfo from "./Parts/DeliveryInfo/DeliveryInfo";
import DishRow from "./Parts/DishRow/DishRow";
import PaymentInfo from "./Parts/PaymentInfo/PaymentInfo";
import { BasketScreenNavigationProps, IGroupedItems } from "./type";

const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<IGroupedItems>({});

  const navigation = useNavigation<BasketScreenNavigationProps>();

  const { name } = useAppSelector(selectRestaurant);
  const items = useAppSelector(selectBasketItems);
  const basketTotal = useAppSelector(selectBasketTotal);
  const deliveryFee = useAppSelector(selectBasketFee);

  useMemo(() => {
    const groupedItems = items.reduce<IGroupedItems>((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  const onCloseScreenHandler = () => {
    navigation.goBack();
  };

  const onPlaceOrderHandler = () => {
    navigation.navigate(PATH.PREPARING_ORDER);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <BasketHeader title={name} onPressHandler={onCloseScreenHandler} />
        <DeliveryInfo />
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <DishRow
              amount={items.length}
              imageUrl={urlFor(items[0]?.image).url()}
              name={items[0]?.name}
              price={items[0]?.price}
              id={key}
              key={key}
            />
          ))}
        </ScrollView>
        <PaymentInfo
          total={basketTotal}
          deliveryFee={deliveryFee}
          onPressHandler={onPlaceOrderHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
