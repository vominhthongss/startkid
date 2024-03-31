import { Text } from "react-native";
import { screenBottomOption } from "../constants/options";
import * as SCREENS_NAME from "../constants/screensName";
import * as STRINGS from "../constants/strings";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "../screens/Home/HomeScreen";
import ContactScreen from "../screens/Contact/ContactScreen";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import AccountScreen from "../screens/Account/AccountScreen";
import HomeIcon from "../../assets/svg/HomeIcon";
import ContactIcon from "../../assets/svg/ContactIcon";
import NotificationIcon from "../../assets/svg/NotificationIcon";
import AddIcon from "../../assets/svg/AddIcon";
import AccountIcon from "../../assets/svg/AccountIcon";

export const home = {
  index: 1,
  name: SCREENS_NAME.home,
  component: HomeScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => <Text>{STRINGS.home}</Text>,
    tabBarIcon: ({ color, size }) => <HomeIcon size={size} color={color} />,
  },
};

export const contact = {
  index: 2,
  name: SCREENS_NAME.contact,
  component: ContactScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => <Text>{STRINGS.contact}</Text>,
    tabBarIcon: ({ color, size }) => <ContactIcon size={size} color={color} />,
  },
};

export const add = {
  index: 3,
  name: SCREENS_NAME.add,
  component: HomeScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => <Text>{STRINGS.add}</Text>,
    tabBarIcon: ({ color, size }) => <AddIcon size={size} color={color} />,
  },
};

export const notification = {
  index: 4,
  name: SCREENS_NAME.notification,
  component: NotificationScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => <Text>{STRINGS.notification}</Text>,
    tabBarIcon: ({ color, size }) => (
      <NotificationIcon size={size} color={color} />
    ),
  },
};

export const account = {
  index: 5,
  name: SCREENS_NAME.account,
  component: AccountScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => <Text>{STRINGS.account}</Text>,
    tabBarIcon: ({ color, size }) => (
      <AccountIcon size={size} color={color} />
    ),
  },
};
