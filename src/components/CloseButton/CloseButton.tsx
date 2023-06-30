import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { COLOR_PALETTE } from "constants/colors";
import { ICloseButtonProps } from "./type";

const CloseButton: FC<ICloseButtonProps> = ({ onPressHandler }) => {
  return (
    <TouchableOpacity className="flex-row" onPress={onPressHandler}>
      <XCircleIcon color={COLOR_PALETTE.cyanDark} size={40} />
    </TouchableOpacity>
  );
};

export default CloseButton;
