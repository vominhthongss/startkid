import { Text, View } from "react-native";
import { screenBottomOption } from "../../constants/options";
import * as SCREENS_NAME from "../../constants/screensName";
import * as STRINGS from "../../constants/strings";
import * as COLORS from "../../constants/colors";
import * as SIZES from "../../constants/size";
import AccountScreen from "../../screens/Account/AccountScreen";
import HomeScreen from "../../screens/Home/HomeScreen";
import ContactScreen from "../../screens/Contact/ContactScreen";
import NotificationScreen from "../../screens/Notification/NotificationScreen";
import HomeIcon from "../../../assets/svg/HomeIcon";
import AccountIcon from "../../../assets/svg/AccountIcon";
import ContactIcon from "../../../assets/svg/ContactIcon";
import NotificationIcon from "../../../assets/svg/NotificationIcon";
import { useIsFocused } from "@react-navigation/native";

export const home = {
  index: 1,
  name: SCREENS_NAME.home,
  component: HomeScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => (
      <Text className="text-lg font-bold">{STRINGS.home} </Text>
    ),
    //color
    // headerStyle: {
    //   backgroundColor: 'red'
    // },
    //left
    headerLeft: () => (
      <Text className="text-lg font-bold">Insert icon </Text>
    ),
    //right
    headerRight: () => (
      <Text className="text-lg font-bold">Insert icon </Text>
    ),
    tabBarIcon: ({ color, size }) => {
      const isFocused = useIsFocused();
      const iconColor = isFocused ? COLORS.nav : color;
      return (
        <View className="pt-3">
          <HomeIcon size={size} color={iconColor} />
          <Text style={{ color: iconColor }}>{SCREENS_NAME.home}</Text>
        </View>
      );
    },
  },
};

export const contact = {
  index: 2,
  name: SCREENS_NAME.contact,
  component: ContactScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => (
      <Text className="text-lg font-bold">{STRINGS.contact}</Text>
    ),
    tabBarIcon: ({ color, size }) => {
      const isFocused = useIsFocused();
      const iconColor = isFocused ? COLORS.nav : color;
      return (
        <View className={`pt-3 -ml-[${SIZES.centerBottom}px]`}>
          <ContactIcon size={size} color={iconColor} />
          <Text style={{ color: iconColor }}>{SCREENS_NAME.contact}</Text>
        </View>
      );
    },
  },
};

export const notification = {
  index: 3,
  name: SCREENS_NAME.notification,
  component: NotificationScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => (
      <Text className="text-lg font-bold">{STRINGS.notification}</Text>
    ),
    tabBarIcon: ({ color, size }) => {
      const isFocused = useIsFocused();
      const iconColor = isFocused ? COLORS.nav : color;
      return (
        <View className={`pt-3 ml-[${SIZES.centerBottom+2}px]`}>
          <NotificationIcon size={size} color={iconColor} />
          <Text style={{ color: iconColor }}>{SCREENS_NAME.notification}</Text>
        </View>
      );
    },
  },
};
export const account = {
  index: 4,
  name: SCREENS_NAME.account,
  component: AccountScreen,
  options: {
    ...screenBottomOption,
    headerTitle: () => (
      <Text className="text-lg font-bold">{STRINGS.account}</Text>
    ),
    tabBarIcon: ({ color, size }) => {
      const isFocused = useIsFocused();
      const iconColor = isFocused ? COLORS.nav : color;
      return (
        <View className="pt-3">
          <AccountIcon size={size} color={iconColor} />
          <Text style={{ color: iconColor }}>{SCREENS_NAME.account}</Text>
        </View>
      );
    },
  },
};
