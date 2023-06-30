import { IDish } from "screens/HomeScreen/Parts/FeaturedRow/type";
import { BasketScreenProps } from "screens/type";

export type BasketScreenNavigationProps = BasketScreenProps["navigation"];

export interface IGroupedItems {
  [key: IDish["_id"]]: IDish[];
}
