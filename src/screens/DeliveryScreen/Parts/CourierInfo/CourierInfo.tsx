import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ICourierInfoProps } from "./type";

const CourierInfo: FC<ICourierInfoProps> = ({ name, phoneNumber, photoUrl }) => {
  return (
    <View className="flex-row p-4 space-x-5 items-center">
      <Image className="h-12 w-12 rounded-full" source={{ uri: photoUrl }} />
      <View className="flex-1">
        <Text className="text-xl">{name}</Text>
        <Text className="text-gray-400">Your rider</Text>
      </View>
      <TouchableOpacity>
        <Text className="text-[#00CCBB] text-lg">Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CourierInfo;
