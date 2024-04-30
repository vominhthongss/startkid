import React, { useRef } from "react";
import { Text, View } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { turnOffSwipeUpDrawer } from "../../store/swipeUpDrawer/swipeUpDrawerSlice";

function SwipeUpDrawer() {
  const panelRef = useRef(null);
  const dispatch = useDispatch();

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
        sliderMinHeight={0}
        isOpen={false}
        ref={(ref) => (panelRef.current = ref)}>
        <View>
          {/* TODO */}
          </View>
      </BottomSheet>
    </View>
  );
}

export default SwipeUpDrawer;
