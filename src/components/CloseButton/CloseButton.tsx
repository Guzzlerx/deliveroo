import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { COLOR_PALETTE } from "constants/colors";
import { ICloseButtonProps } from "./type";

const CloseButton: FC<ICloseButtonProps> = ({ onPressHandler, styles }) => (
  <TouchableOpacity className={styles} onPress={onPressHandler}>
    <XCircleIcon color={COLOR_PALETTE.cyan} height={50} width={50} />
  </TouchableOpacity>
);

export default CloseButton;
