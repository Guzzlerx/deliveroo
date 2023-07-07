import { ICategoryCardProps } from "screens/HomeScreen/Parts/CategoryCard/type";
import { CategoriesScreenProps } from "screens/type";

export type CategoriesScreenRouteProps = CategoriesScreenProps["route"];
export type CategoriesScreenNavigationProps = CategoriesScreenProps["navigation"];

export interface ICategoriesScreenProps extends Omit<ICategoryCardProps, "imgUrl"> {}
