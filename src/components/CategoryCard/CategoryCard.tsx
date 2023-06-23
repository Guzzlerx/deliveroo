import { FC } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { ICategoryCardProps } from "./type";

const CategoryCard: FC<ICategoryCardProps> = ({ title, imgUrl }): JSX.Element => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded relative" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
