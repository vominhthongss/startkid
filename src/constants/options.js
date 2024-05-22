import { Text } from "react-native";
import * as COLORS from "./colors";
import * as STRINGS from "./strings";

export const screenParentOption = {
  headerLeft: null,
  headerShown: false,
};
export const screenBottomOption = {
  headerTitleAlign: "center",
  tabBarShowLabel: false,
  tabBarActiveTintColor: COLORS.main,
};
export const screenChildOption = (title, headerLeft) => {
  return {
    title: <Text style={{ fontSize: 20 }}>{title}</Text>,
    headerLeftLabelVisible: false,
    headerTitleAlign: "center",
    headerBackTitle: STRINGS.backTitle,
    headerLeft: headerLeft,
    headerStyle: {
      backgroundColor: COLORS.main,
    },
    headerTintColor: COLORS.none,
  };
};
