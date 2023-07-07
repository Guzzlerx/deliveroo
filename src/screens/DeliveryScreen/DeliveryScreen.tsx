import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { SafeAreaView, View } from "react-native";
import { selectRestaurant } from "store/selectors";
import { useAppSelector } from "store/store";
import Map from "components/Map/Map";
import { PATH } from "constants/path";
import CourierInfo from "./Parts/CourierInfo/CourierInfo";
import DeliveryInfo from "./Parts/DeliveryInfo/DeliveryInfo";
import NavBar from "./Parts/NavBar/NavBar";
import { mockCourierInfo } from "./mocks";
import { CategoriesScreenNavigationProps } from "./type";

const DeliveryScreen: FC = (): JSX.Element => {
  const navigation = useNavigation<CategoriesScreenNavigationProps>();
  const { name, lat, long, description } = useAppSelector(selectRestaurant);

  const onClosePressHandler = () => {
    navigation.navigate(PATH.HOME);
  };

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-20">
        <NavBar onClosePressHandler={onClosePressHandler} />
        <DeliveryInfo restaurantTitle={name} />
      </SafeAreaView>
      <Map description={description} lattitude={lat} longtitude={long} title={name} />
      <SafeAreaView className="bg-white">
        <CourierInfo
          name={mockCourierInfo.name}
          phoneNumber={mockCourierInfo.phoneNumber}
          photoUrl={mockCourierInfo.photoUrl}
        />
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
