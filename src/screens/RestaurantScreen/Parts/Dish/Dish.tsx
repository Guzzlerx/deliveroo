import { FC, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { addToBasket, removeFromBasket } from "store/basketSlice/basketSlice";
import { selectBasketItemsWithId } from "store/selectors";
import { useAppDispatch, useAppSelector } from "store/store";
import { COLOR_PALETTE } from "constants/colors";
import { urlFor } from "api/groq/sanityClient";
import { IDishProps } from "./type";

const Dish: FC<IDishProps> = ({ shortDescription, image, name, price, _id }): JSX.Element => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const items = useAppSelector(state => selectBasketItemsWithId(state, _id));

  const isDishChosen = items.some(item => item._id === _id);

  const onPressPlusButtonHandler = () => {
    dispatch(addToBasket({ name, _id, shortDescription, price, image }));
  };

  const onPressMinusButtonHandler = () => {
    if (items.length <= 0) return;

    dispatch(removeFromBasket(_id));
  };

  useEffect(() => {
    if (isDishChosen) setIsPressed(true);
  }, []);

  return (
    <View className="bg-white">
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`flex-row p-4 space-x-4 border border-gray-200 ${isPressed && "border-b-0"}`}
      >
        <View className="space-y-2 flex-1">
          <Text className="text-lg">{name}</Text>
          <Text className="text-gray-400">{shortDescription}</Text>
          <Text className="text-gray-400">${price}</Text>
        </View>
        <Image
          style={{ borderColor: COLOR_PALETTE.gray }}
          className="w-20 h-20 bg-gray-300 border"
          source={{ uri: urlFor(image).url() }}
        />
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center p-4 space-x-2 pt-1">
          <TouchableOpacity disabled={!items.length} onPress={onPressMinusButtonHandler}>
            <MinusCircleIcon color={items.length > 0 ? COLOR_PALETTE.cyan : "gray"} size={40} />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={onPressPlusButtonHandler}>
            <PlusCircleIcon color={COLOR_PALETTE.cyan} size={40} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Dish;
