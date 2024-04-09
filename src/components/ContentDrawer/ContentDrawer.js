import React, { useState, useEffect, useRef } from "react";
import { Text } from "react-native";
import { View, Animated, StyleSheet } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { toggleContentDrawer } from "../../store/contentDrawer/contentDrawerSlice";
import { useDispatch } from "react-redux";

function ContentDrawer() {
  const dispatch = useDispatch();
  const [slideAnim] = useState(new Animated.Value(-256));
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);
  const handlePressOutside = () => {
    Animated.timing(slideAnim, {
      toValue: -256,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      dispatch(toggleContentDrawer());
    });
  };

  return (
    <View
      className="absolute z-50 h-full w-full"
      style={{
        backgroundColor: "rgba(217, 217, 217, 0.5)",
      }}>
      <Animated.View
        style={[
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}>
        <OutsidePressHandler
          className="h-full w-64 flex flex-col justify-end"
          onOutsidePress={() => {
            handlePressOutside();
          }}>
          <View className="bg-white w-full h-[95%] rounded-r-3xl">
            {/* TODO */}
          </View>
        </OutsidePressHandler>
      </Animated.View>
    </View>
  );
}

export default ContentDrawer;
