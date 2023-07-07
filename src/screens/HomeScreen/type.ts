import { IRestaurant } from "./Parts/FeaturedRow/type";

export interface IFeaturedCategories {
  name: string;
  _id: string;
  shortDescription: string;
}

export interface ICuisineCategories {
  name: string;
  shortDescription: string;
  _id: string;
  image: any;
  restaurants: IRestaurant[];
}
