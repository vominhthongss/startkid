import { Platform, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home/HomeScreen";
import HomeIcon from "./assets/svg/HomeIcon";
import AddIcon from "./assets/svg/AddIcon";
import * as SCREENS_NAME from "./src/constants/screensName";
import ContactIcon from "./assets/svg/ContactIcon";
import ContactScreen from "./src/screens/Contact/ContactScreen";
import NotificationIcon from "./assets/svg/NotificationIcon";
import NotificationScreen from "./src/screens/Notification/NotificationScreen";
import AccountScreen from "./src/screens/Account/AccountScreen";
import AccountIcon from "./assets/svg/AccountIcon";
import * as COLORS from "./src/constants/colors";
import { useIsFocused } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name={SCREENS_NAME.home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? COLORS.main : color;
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <HomeIcon size={size} color={iconColor} />
                  <Text style={{ color: iconColor }}>
                    {SCREENS_NAME.home}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREENS_NAME.contact}
          component={ContactScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? COLORS.main : color;
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <ContactIcon size={size} color={iconColor} />
                  <Text style={{ color: iconColor }}>
                    {SCREENS_NAME.contact}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREENS_NAME.add}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? COLORS.main : color;
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffffff",
                    width: Platform.OS == "ios" ? 30 : 50,
                    height: Platform.OS == "ios" ? 30 : 50,
                    borderRadius: Platform.OS == "ios" ? 25 : 30,
                    ...Platform.select({
                      ios: {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                      },
                      android: {
                        elevation: 5,
                      },
                    }),
                  }}
                >
                  <AddIcon size={size} color={iconColor} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREENS_NAME.notification}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? COLORS.main : color;
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <NotificationIcon size={size} color={iconColor} />
                  <Text style={{ color: iconColor }}>
                    {SCREENS_NAME.notification}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={SCREENS_NAME.account}
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              const isFocused = useIsFocused();
              const iconColor = isFocused ? COLORS.main : color;
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <AccountIcon size={size} color={iconColor} />
                  <Text style={{ color: iconColor }}>
                    {SCREENS_NAME.account}
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
