import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NAVIGATIONS from "../../components/navigations/navigations";
import * as SCREENS_NAME from "../../constants/screensName";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ContentDrawer from "../../components/ContentDrawer/ContentDrawer";
import React, { useState } from "react";
import SwipeUpDrawer from "../../components/SwipeUpDrawer/SwipeUpDrawer";
import CenterButton from "../../components/CenterButton/CenterButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as COLORS from "../../constants/colors";
import AddIcon from "../../../assets/svg/AddIcon";

const Tab = createBottomTabNavigator();

function MainTabScreen() {
  const { show } = useSelector((state) => state.contentDrawer);
  const [showMenuCenter, setShowMenuCenter] = useState(false);
  const handleShowMenuCenter = () => setShowMenuCenter(!showMenuCenter);
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
      <View className="absolute bottom-5 z-20 left-1/2 -ml-[26px] shadow">
        <TouchableOpacity
          onPress={handleShowMenuCenter}
          style={{ transform: [{ rotate: showMenuCenter ? "45deg" : "0deg" }] }}
          className=" w-[55px] h-[55px] rounded-full z-50">
          <AddIcon color={COLORS.main} />
        </TouchableOpacity>
      </View>
      {showMenuCenter && <CenterButton />}
      <Tab.Navigator initialRouteName={SCREENS_NAME.home}>
        {navigations}
      </Tab.Navigator>
    </View>
  );
}

export default MainTabScreen;
