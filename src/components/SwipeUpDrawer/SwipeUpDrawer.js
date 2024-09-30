import React, { useRef } from "react";
import { Dimensions, Text, View } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { turnOffSwipeUpDrawer } from "../../store/swipeUpDrawer/swipeUpDrawerSlice";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { learnMore } from "../../constants/learnMore";
import { turnOnSwipeUpDrawer } from "../../store/swipeUpDrawer/swipeUpDrawerSlice";
import { useNavigation } from "@react-navigation/native";

function SwipeUpDrawer() {
  const navigation = useNavigation();
  const panelRef = useRef(null);
  const dispatch = useDispatch();
  const handleOpenSwipeUp = () => {
    dispatch(turnOnSwipeUpDrawer());
  };
  const handleGoToScreen = (screen) => {
    if (!screen) {
      return;
    }
    navigation.navigate(screen);
  };
  const { show } = useSelector((state) => state.swipeUpDrawer);
  if (show) {
    panelRef.current?.togglePanel();
  }
  return (
    <View
      style={{
        backgroundColor: "rgba(217, 217, 217, 0.5)",
      }}
      className={`absolute h-full w-full ${show ? "z-50" : "z-0"}`}>
      <BottomSheet
        onClose={() => {
          dispatch(turnOffSwipeUpDrawer());
        }}
        innerContentStyle={{
          width: "106%",
          marginLeft: -8,
          marginTop: -10,
        }}
        sliderMinHeight={0}
        isOpen={false}
        ref={(ref) => (panelRef.current = ref)}>
        <ScrollView>
          <View className="flex flex-row flex-wrap my-5 justify-between">
            {learnMore.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={{ width: -5 + Dimensions.get("window").width / 4 }}
                onPress={() =>
                  item.showSwipeUpDrawer
                    ? handleOpenSwipeUp()
                    : handleGoToScreen(item.screen)
                }>
                <View className="flex flex-col items-center">
                  {item.icon} 
                  <Text className="text-[#5F5F5F] mb-1 mt-3">{item.text}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
}

export default SwipeUpDrawer;
