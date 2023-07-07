import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { RestaurantScreenNavigationProps } from "screens/RestaurantScreen/type";
import { PATH } from "constants/path";
import { ICategoryCardProps } from "./type";

const CategoryCard: FC<ICategoryCardProps> = ({
  title,
  imgUrl,
  restaurants,
  shortDescription,
}): JSX.Element => {
  const navigation = useNavigation<RestaurantScreenNavigationProps>();

  const onCardPressHandler = () => {
    navigation.navigate(PATH.CATEGORIES, { title, shortDescription, restaurants });
  };

  return (
    <TouchableOpacity onPress={onCardPressHandler}>
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded relative" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
