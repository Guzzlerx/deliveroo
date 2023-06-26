import { FC, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { COLOR_PALETTE } from "constants/colors";
import { urlFor } from "api/groq/sanityClient";
import { IDishProps } from "./type";

const Dish: FC<IDishProps> = ({ shortDescription, image, name, price }): JSX.Element => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <TouchableOpacity
      onPress={() => setIsPressed(!isPressed)}
      className="flex-row bg-white p-4 space-x-4 border border-gray-200"
    >
      <View className="space-y-2 flex-1">
        <Text className="text-lg">{name}</Text>
        <Text className="text-gray-400">{shortDescription}</Text>
        <Text className="text-gray-400">${price}</Text>
        {isPressed && (
          <View className="flex-row items-center space-x-2 pt-1">
            <TouchableOpacity>
              <MinusCircleIcon color={COLOR_PALETTE.default} size={40} />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color={COLOR_PALETTE.default} size={40} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Image
        style={{ borderColor: COLOR_PALETTE.gray }}
        className="w-20 h-20 bg-gray-300 border"
        source={{ uri: urlFor(image).url() }}
      />
    </TouchableOpacity>
  );
};

export default Dish;
