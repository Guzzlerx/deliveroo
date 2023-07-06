import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { FC } from "react";
import { SafeAreaView } from "react-native";
import ProcessingImage from "assets/images/processing_order.gif";

const PreparingOrderScreen: FC = (): JSX.Element => {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={ProcessingImage}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="pulse"
        iterationCount="infinite"
        className="my-7 px-2 text-lg text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
