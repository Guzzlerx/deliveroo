import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";
import { selectBasketItems, selectRestaurant } from "store/selectors";
import { useAppDispatch, useAppSelector } from "store/store";
import CloseButton from "components/CloseButton/CloseButton";
import { BasketScreenNavigationProps, IGroupedItems } from "./type";

const BasketScreen = () => {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<IGroupedItems | null>(null);

  const navigation = useNavigation<BasketScreenNavigationProps>();

  const { name } = useAppSelector(selectRestaurant);
  const items = useAppSelector(selectBasketItems);
  const dispatch = useAppDispatch();

  useMemo(() => {
    const groupedItems = items.reduce<IGroupedItems>((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <View>
      <View className="p-5 bg-white flex-row items-center">
        <View className="flex-col flex-1">
          <Text className="font-bold text-center">Basket</Text>
          <Text className="text-gray-400 text-xs text-center">{name}</Text>
        </View>
        <CloseButton onPressHandler={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default BasketScreen;
