import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATH } from "constants/path";
import BasketScreen from "./BasketScreen/BasketScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import RestaurantScreen from "./RestaurantScreen/RestaurantScreen";
import { RootStackParamList } from "./type";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PATH.HOME} component={HomeScreen} />
      <Stack.Screen name={PATH.RESTAURANT} component={RestaurantScreen} />
      <Stack.Screen name={PATH.BASKET} component={BasketScreen} />
    </Stack.Navigator>
  );
};

export default Screens;
