import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import "react-native-url-polyfill/auto";
import Screens from "screens";

const App: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

export default App;
