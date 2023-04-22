import AppNavigator from "./src/AppNavigator";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <AppNavigator></AppNavigator>
      </RootSiblingParent>
    </Provider>
  );
}
