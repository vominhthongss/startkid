import React, { useRef } from "react";
import { Text, View } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { turnOffSwipeUpDrawer } from "../../store/swipeUpDrawer/swipeUpDrawerSlice";
import { FlatGrid } from "react-native-super-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import { learnMore } from "../../constants/learnMore";
import { turnOnSwipeUpDrawer } from "../../store/swipeUpDrawer/swipeUpDrawerSlice";

function SwipeUpDrawer() {
  const panelRef = useRef(null);
  const dispatch = useDispatch();
  const handleOpenSwipeUp = () => {
    dispatch(turnOnSwipeUpDrawer());
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
          width: "109%",
          marginLeft: -20,
        }}
        sliderMinHeight={0}
        isOpen={false}
        ref={(ref) => (panelRef.current = ref)}>
        <FlatGrid
          itemDimension={92}
          data={learnMore}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={item.showSwipeUpDrawer ? handleOpenSwipeUp : null}>
              <View className="flex flex-col items-center">
                {item.icon}
                <Text className="text-[#5F5F5F] mb-1 mt-3">{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </BottomSheet>
    </View>
  );
}

export default SwipeUpDrawer;
