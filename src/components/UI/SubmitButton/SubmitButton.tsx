import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ISubmitButtonProps } from "./type";

const SubmitButton: FC<ISubmitButtonProps> = ({ title, onPressHandler }): JSX.Element => {
  return (
    <TouchableOpacity className="bg-[#00CCBB] p-4 rounded-lg" onPress={onPressHandler}>
      <Text className="text-lg font-bold text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
