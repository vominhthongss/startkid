import MainTabScreen from "../screens/MainTab/MainTabScreen";
import { screenParentOption } from "../constants/options";
import * as SCREENS_NAME from "../constants/screensName";


export const mainTab = {
  name: SCREENS_NAME.mainTab,
  component: MainTabScreen,
  options: screenParentOption,
};

