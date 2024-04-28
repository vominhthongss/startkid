import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NAVIGATIONS from "../../components/navigations/navigations";
import * as SCREENS_NAME from "../../constants/screensName";
import { Text, TouchableOpacity, View } from "react-native";
import * as COLORS from "../../constants/colors";
import AddIcon from "../../../assets/svg/AddIcon";
import { useSelector } from "react-redux";
import ContentDrawer from "../../components/ContentDrawer/ContentDrawer";
import React, { useState } from "react";
import { Animated } from "react-native";
import ButtonPopupLeft from "../../../assets/svg/ButtonPopupLeft";
import ButtonPopupTop from "../../../assets/svg/ButtonPopupTop";
import ButtonPopupRight from "../../../assets/svg/ButtonPopupRight";
import SwipeUpDrawer from "../../components/SwipeUpDrawer/SwipeUpDrawer";

const Tab = createBottomTabNavigator();

function MainTabScreen() {
  const [showIcons, setShowIcons] = useState(false);
  const { show } = useSelector((state) => state.contentDrawer);

  const animation = new Animated.Value(0);

  const handlePopupButtonPress = () => {
    setShowIcons(!showIcons);
  };

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
      <View
        className="w-full h-full absolute z-10"
        style={{
          display: showIcons ? "flex" : "none",
          backgroundColor: showIcons ? "rgba(0, 0, 0, 0.25)" : "transparent",
        }}></View>
      <View
        className={`absolute shadow z-10 -ml-[30px] bottom-[28px] left-1/2 transform -translate-x-1/2`}>
        {showIcons && (
          <View>
            <View>
              <Animated.View
                style={[
                  {
                    transform: [
                      {
                        translateX: animation.interpolate({
                          inputRange: [0, 0],
                          outputRange: [-15, 0],
                        }),
                      },
                    ],
                  },
                ]}>
                <View className="bg-white w-20 h-17 rounded-full justify-center">
                  <TouchableOpacity
                    className="w-14 h-14 mt-5 ml-6"
                    onPress={handlePopupButtonPress}>
                    <ButtonPopupTop color={COLORS.main} />
                  </TouchableOpacity>
                </View>
                <Text className="color-white ml-2">Dặn thuốc</Text>
              </Animated.View>
            </View>
            <View className="mt-5 flex-row">
              <Animated.View
                style={[
                  {
                    transform: [
                      {
                        translateX: animation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-120, 0],
                        }),
                      },
                    ],
                  },
                ]}>
                <View className="bg-white w-17 h-17 rounded-full">
                  <TouchableOpacity
                    className="w-14 h-12 mt-6 ml-5"
                    onPress={handlePopupButtonPress}>
                    <ButtonPopupLeft color={COLORS.main} />
                  </TouchableOpacity>
                </View>
                <Text className="text-center color-white">Lời nhắn</Text>
              </Animated.View>
              <Animated.View
                style={[
                  {
                    transform: [
                      {
                        translateX: animation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [20, 0],
                        }),
                      },
                    ],
                  },
                ]}>
                <View className="bg-white w-17 h-17 rounded-full">
                  <TouchableOpacity
                    className="w-14 h-14 mt-4 ml-5"
                    onPress={handlePopupButtonPress}>
                    <ButtonPopupRight color={COLORS.main} />
                  </TouchableOpacity>
                </View>
                <Text className="text-center color-white">Xin nghỉ</Text>
              </Animated.View>
            </View>
          </View>
        )}
        <TouchableOpacity
          onPress={() => setShowIcons(!showIcons)}
          style={{ transform: [{ rotate: showIcons ? "45deg" : "0deg" }] }}
          className="w-12 h-12">
          <AddIcon color={COLORS.main} />
        </TouchableOpacity>
      </View>

      <Tab.Navigator initialRouteName={SCREENS_NAME.home}>
        {navigations}
      </Tab.Navigator>
    </View>
  );
}

export default MainTabScreen;
