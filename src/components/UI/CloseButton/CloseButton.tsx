import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { XCircleIcon, XMarkIcon } from "react-native-heroicons/solid";
import { COLOR_PALETTE } from "constants/colors";
import { ICloseButtonProps } from "./type";

const CloseButton: FC<ICloseButtonProps> = ({
  onPressHandler,
  styles,
  height,
  width,
  withoutBorder,
}) => (
  <TouchableOpacity className={styles} onPress={onPressHandler}>
    {withoutBorder ? (
      <XMarkIcon color="white" width={width} height={height} />
    ) : (
      <XCircleIcon color={COLOR_PALETTE.cyan} height={height} width={width} />
    )}
  </TouchableOpacity>
);

export default CloseButton;
