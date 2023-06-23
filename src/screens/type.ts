import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IRestaurant } from "./HomeScreen/Parts/FeaturedRow/type";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: IRestaurant;
};

export type RestaurantScreenProps = NativeStackScreenProps<RootStackParamList, "Restaurant">;
