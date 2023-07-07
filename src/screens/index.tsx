import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATH } from "constants/path";
import AllergyScreen from "./AllergyScreen/AllergyScreen";
import BasketScreen from "./BasketScreen/BasketScreen";
import CategoriesScreen from "./CategoriesScreen/CategoriesScreen";
import DeliveryScreen from "./DeliveryScreen/DeliveryScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import PreparingOrderScreen from "./PreparingOrderScreen/PreparingOrderScreen";
import RestaurantScreen from "./RestaurantScreen/RestaurantScreen";
import { RootStackParamList } from "./type";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PATH.HOME} component={HomeScreen} />
      <Stack.Screen name={PATH.RESTAURANT} component={RestaurantScreen} />
      <Stack.Screen name={PATH.CATEGORIES} component={CategoriesScreen} />
      <Stack.Screen
        name={PATH.BASKET}
        component={BasketScreen}
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PATH.ALLERGY}
        component={AllergyScreen}
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name={PATH.PREPARING_ORDER}
        component={PreparingOrderScreen}
        options={{ presentation: "fullScreenModal", headerShown: false }}
      />
      <Stack.Screen
        name={PATH.DELIVERY}
        component={DeliveryScreen}
        options={{ presentation: "fullScreenModal", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Screens;
