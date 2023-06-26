import { IRestaurant } from "screens/HomeScreen/Parts/FeaturedRow/type";

export interface IRestaurantInfoProps
  extends Pick<IRestaurant, "name" | "address" | "description" | "rating" | "type"> {
  onPressAllergyBlockHandler: () => void;
}
