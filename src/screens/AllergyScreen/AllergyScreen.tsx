import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Text, View } from "react-native";
import CloseButton from "components/CloseButton/CloseButton";

const AllergyScreen: FC = (): JSX.Element => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View className="p-4 space-y-8">
      <View className="flex-row items-center">
        <Text className="font-bold text-lg flex-1">Info about food allergies</Text>
        <CloseButton onPressHandler={onPressHandler} />
      </View>
      <Text className="text-gray-500 text-base">
        Food allergies occur when the immune system reacts to specific proteins in certain foods.
        Common allergens include peanuts, tree nuts, milk, eggs, fish, shellfish, wheat, soy, and
        sesame. These allergens can be found in a wide range of products, including baked goods,
        sauces, processed foods, and condiments. Individuals with food allergies should carefully
        read labels, be mindful of cross-contamination, and communicate their allergies to food
        providers. Seeking professional advice is important for diagnosis and proper management.
      </Text>
    </View>
  );
};

export default AllergyScreen;
