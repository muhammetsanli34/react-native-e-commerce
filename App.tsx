import AppNavigator from "./src/AppNavigator";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <RootSiblingParent>
      <AppNavigator></AppNavigator>
    </RootSiblingParent>
  );
}
