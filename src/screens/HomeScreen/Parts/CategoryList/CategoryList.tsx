import { FC } from "react";
import { ScrollView } from "react-native";
import CategoryCard from "screens/HomeScreen/Parts/CategoryCard/CategoryCard";
import { urlFor } from "api/groq/sanityClient";
import { ICategoryListProps } from "./type";

const CategoryList: FC<ICategoryListProps> = ({ data }): JSX.Element => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        gap: 8,
      }}
      className="pt-3"
    >
      {data.map(({ image, _id, name, restaurants, shortDescription }) => (
        <CategoryCard
          imgUrl={urlFor(image).url()}
          key={_id}
          title={name}
          shortDescription={shortDescription}
          restaurants={restaurants}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryList;
