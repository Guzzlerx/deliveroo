import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATH } from "constants/path";
import HomeScreen from "./HomeScreen/HomeScreen";
import RestaurantScreen from "./RestaurantScreen/RestaurantScreen";
import { RootStackParamList } from "./type";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PATH.HOME} component={HomeScreen} />
      <Stack.Screen name={PATH.RESTAURANT} component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

export default Screens;
