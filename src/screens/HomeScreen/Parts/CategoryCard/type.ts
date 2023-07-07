import { IRestaurant } from "../FeaturedRow/type";

export interface ICategoryCardProps {
  title: string;
  shortDescription: string;
  imgUrl: string;
  restaurants: IRestaurant[];
}
