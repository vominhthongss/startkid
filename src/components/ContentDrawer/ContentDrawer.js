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
      className="absolute z-50 top-0 border h-full w-full"
      style={{
        backgroundColor: "rgba(217, 217, 217, 0.5)",
      }}
    >
      <Animated.View
        style={[
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <OutsidePressHandler
          className="h-full w-64 bg-white"
          onOutsidePress={() => {
            handlePressOutside();
          }}
        >
          <Text className="p-10">Content here</Text>
        </OutsidePressHandler>
      </Animated.View>
    </View>
  );
}

export default ContentDrawer;
