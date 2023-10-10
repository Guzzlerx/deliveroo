import { useNavigation, useRoute } from "@react-navigation/native";
import { FC, useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";
import CloseButton from "components/UI/CloseButton/CloseButton";
import { CategoriesScreenNavigationProps, CategoriesScreenRouteProps } from "./type";

const CategoriesScreen: FC = (): JSX.Element => {
  const navigation = useNavigation<CategoriesScreenNavigationProps>();
  const route = useRoute<CategoriesScreenRouteProps>();

  const { restaurants, shortDescription, title } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onCloseHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="p-4 space-y-3 mb-4">
          <View className="flex-row items-center">
            <Text className="font-extrabold text-4xl flex-1">{title}</Text>
            <CloseButton width={50} height={50} onPressHandler={onCloseHandler} />
          </View>
          <Text className="text-md text-gray-500">{shortDescription}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
            gap: 12,
          }}
        >
          {restaurants.map(el => (
            <RestaurantCard {...el} key={el._id} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
