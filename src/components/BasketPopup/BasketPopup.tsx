import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { selectBasketItems, selectBasketTotal } from "store/selectors";
import { useAppSelector } from "store/store";
import { RestaurantScreenNavigationProps } from "screens/RestaurantScreen/type";
import { PATH } from "constants/path";

const BasketPopup: FC = (): JSX.Element => {
  const items = useAppSelector(selectBasketItems);
  const totalPrice = useAppSelector(selectBasketTotal);

  const navigation = useNavigation<RestaurantScreenNavigationProps>();

  const onPressHandler = () => {
    navigation.navigate(PATH.BASKET);
  };

  return (
    <View className="bottom-10 w-full absolute z-20">
      <TouchableOpacity
        onPress={onPressHandler}
        className={`bg-[#00CCBB] mx-5 p-4 flex-row items-center rounded-lg`}
      >
        <Text className={`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2`}>
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">${totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketPopup;
