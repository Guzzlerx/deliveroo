import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";

const BasketScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView>
      <Text>BasketScreen</Text>
    </SafeAreaView>
  );
};

export default BasketScreen;
