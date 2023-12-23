import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorChooseScreen from "./src/screens/ColorChooseScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    CounterScreen: Counter,
    ColorChooseScreen: ColorChooseScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Shopit",
    },
  }
);

export default createAppContainer(navigator);
