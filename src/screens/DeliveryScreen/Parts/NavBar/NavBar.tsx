import { FC } from "react";
import { Text, View } from "react-native";
import CloseButton from "components/CloseButton/CloseButton";
import { INavBarProps } from "./type";

const NavBar: FC<INavBarProps> = ({ onClosePressHandler }) => {
  return (
    <View className="flex-row p-5">
      <CloseButton
        width={30}
        height={30}
        onPressHandler={onClosePressHandler}
        withoutBorder
        styles="flex-1"
      />
      <Text className="text-white font-light text-lg">Order Help</Text>
    </View>
  );
};

export default NavBar;
