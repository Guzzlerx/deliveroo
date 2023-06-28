import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import "react-native-url-polyfill/auto";
import { Provider } from "react-redux";
import Screens from "screens";
import { store } from "store/store";

const App: FC = (): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  </Provider>
);

export default App;
