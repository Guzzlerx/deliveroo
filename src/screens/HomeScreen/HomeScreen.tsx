import { useNavigation } from "@react-navigation/native";
import { useFetch } from "hooks/useFetch";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CuisineCategories from "./Parts/CategoryList/CategoryList";
import FeaturedRow from "./Parts/FeaturedRow/FeaturedRow";
import Header from "./Parts/Header/Header";
import Search from "./Parts/Search/Search";
import { ICuisineCategories, IFeaturedCategories } from "./type";

const HomeScreen: FC = (): JSX.Element => {
  const [featuredCategories, setFeaturedCategories] = useState<IFeaturedCategories[]>([]);
  const [cuisineCategories, setCuisineCategories] = useState<ICuisineCategories[]>([]);

  const navigation = useNavigation();

  const { isFetching, request } = useFetch();

  const getFeaturedCategories = () =>
    request(
      `*[_type == "featured"] {
        ...,
        restaurants[] ->{
        ...,
        dishes[] ->
      }
    }`,
    ).then(data => setFeaturedCategories(data));

  const getCuisineCategories = () =>
    request(
      `*[_type == "category"] {
        name, _id, image
    }`,
    ).then(data => setCuisineCategories(data));

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    getFeaturedCategories();
    getCuisineCategories();
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Search />
        <CuisineCategories data={cuisineCategories} />
        {featuredCategories?.map(({ shortDescription, _id, name }) => (
          <FeaturedRow title={name} id={_id} description={shortDescription} key={_id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
