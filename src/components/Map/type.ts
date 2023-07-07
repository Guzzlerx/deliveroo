import { IRestaurant } from "screens/HomeScreen/Parts/FeaturedRow/type";

export interface IMapProps {
  lattitude: number;
  longtitude: number;
  title: IRestaurant["name"];
  description: IRestaurant["description"];
}
