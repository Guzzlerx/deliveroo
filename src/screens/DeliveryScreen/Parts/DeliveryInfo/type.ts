import { IRestaurant } from "screens/HomeScreen/Parts/FeaturedRow/type";

export interface IDeliveryInfoProps {
  restaurantTitle: IRestaurant["name"];
  deliveryTime?: number;
}
