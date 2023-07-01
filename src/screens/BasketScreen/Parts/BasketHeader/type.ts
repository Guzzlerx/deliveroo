import { IRestaurant } from "screens/HomeScreen/Parts/FeaturedRow/type";

export interface IBasketHeaderProps {
  title: IRestaurant["name"];
  onPressHandler: () => void;
}
