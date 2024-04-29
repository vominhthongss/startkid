import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NAVIGATIONS from "../../components/navigations/navigations";
import * as SCREENS_NAME from "../../constants/screensName";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ContentDrawer from "../../components/ContentDrawer/ContentDrawer";
import React from "react";
import SwipeUpDrawer from "../../components/SwipeUpDrawer/SwipeUpDrawer";
import CenterButton from "../../components/CenterButton/CenterButton";

const Tab = createBottomTabNavigator();

function MainTabScreen() {
  const { show } = useSelector((state) => state.contentDrawer);

  const navigations = Object.values(NAVIGATIONS)
    .sort((a, b) => a.index - b.index)
    .map((navigation, index) => {
      return (
        <Tab.Screen
          key={index}
          name={navigation.name}
          options={navigation.options}
          component={navigation.component}
        />
      );
    });
  return (
    <View className="flex flex-col justify-end h-full relative">
      {show && <ContentDrawer />}
      <SwipeUpDrawer />
      <View className={`absolute z-10 border h-full w-full`}>
        <CenterButton />
      </View>

      <Tab.Navigator initialRouteName={SCREENS_NAME.home}>
        {navigations}
      </Tab.Navigator>
    </View>
  );
}

export default MainTabScreen;
