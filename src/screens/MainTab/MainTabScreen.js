import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NAVIGATIONS from "../../components/navigations/navigations";
import * as SCREENS_NAME from "../../constants/screensName";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as COLORS from "../../constants/colors";
import AddIcon from "../../../assets/svg/AddIcon";
import { useSelector } from "react-redux";
import ContentDrawer from "../../components/ContentDrawer/ContentDrawer";
import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import ButtonPopupLeft from "../../../assets/svg/ButtonPopupLeft";
import ButtonPopupTop from "../../../assets/svg/ButtonPopupTop";
import ButtonPopupRight from "../../../assets/svg/ButtonPopupRight";

const Tab = createBottomTabNavigator();

function MainTabScreen({ opened }) {
  const [showIcons, setShowIcons] = useState(false);
  const { show } = useSelector((state) => state.contentDrawer);

  const animation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened]);

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

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
      <View
        className={`absolute z-10 -ml-[30px] bottom-[28px] left-1/2 transform -translate-x-1/2`}
      >
        {showIcons && (
          <View>
            <Animated.View style={[styles.item]}>
              <View style={styles.backgroundCircle}>
                <TouchableOpacity
                  style={[styles.popupButton]}
                  onPress={handlePopupButtonPress}
                >
                  <ButtonPopupTop color={COLORS.main} />
                </TouchableOpacity>
              </View>
              <Text>Dặn thuốc</Text>
            </Animated.View>
            <View style={styles.rowContainer}>
              <Animated.View
                style={[
                  styles.item,
                  {
                    transform: [
                      {
                        translateX: animation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-110, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <View style={styles.backgroundCircle}>
                  <TouchableOpacity
                    style={[styles.popupButton]}
                    onPress={handlePopupButtonPress}
                  >
                    <ButtonPopupLeft color={COLORS.main} />
                  </TouchableOpacity>
                </View>
                <Text className="text-center">Lời nhắn</Text>
              </Animated.View>
              <Animated.View
                style={[
                  styles.item,
                  {
                    transform: [
                      {
                        translateX: animation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [30, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <View style={styles.popupContainer}>
                  <View style={styles.backgroundCircle}>
                    <TouchableOpacity
                      style={[styles.popupButton]}
                      onPress={handlePopupButtonPress}
                    >
                      <ButtonPopupRight color={COLORS.main} />
                    </TouchableOpacity>
                  </View>
                  <Text className="text-center">Xin nghỉ</Text>
                </View>
              </Animated.View>
            </View>
          </View>
        )}
        <TouchableOpacity onPress={() => setShowIcons(!showIcons)}>
          <AddIcon color={COLORS.main} style={{ transform: [{ rotate: showIcons ? '90deg' : '0deg' }] }}/>
        </TouchableOpacity>
      </View>
      <Tab.Navigator initialRouteName={SCREENS_NAME.home}>
        {navigations}
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  popupContainer: {
    justifyContent: "space-between",
  },

  popupButton: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 17,
  },

  rowContainer: {
    paddingTop: 20,
    flexDirection: "row",
  },

  backgroundCircle: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: 50,
    top: 0,
    left: 0,
  },

});

export default MainTabScreen;
