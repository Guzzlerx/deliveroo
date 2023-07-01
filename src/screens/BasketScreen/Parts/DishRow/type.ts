import { IDish } from "screens/HomeScreen/Parts/FeaturedRow/type";

export interface IDishRowProps extends Pick<IDish, "name" | "price"> {
  id: string;
  amount: number;
  imageUrl: string;
}
