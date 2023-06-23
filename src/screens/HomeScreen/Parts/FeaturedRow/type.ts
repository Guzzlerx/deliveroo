export interface IFeaturedRowProps {
  id: string;
  title: string;
  description: string;
}

export interface IDish {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: any;
}

export interface IRestaurant {
  name: string;
  description: string;
  address: string;
  rating: number;
  image: any;
  dishes: IDish[];
  lat: number;
  long: number;
  type: {
    name: string;
  };
  _id: string;
}
