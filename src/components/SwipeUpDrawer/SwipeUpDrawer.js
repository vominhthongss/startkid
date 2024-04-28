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
        zIndex: show ? "50" : "0",
        backgroundColor: "rgba(217, 217, 217, 0.5)",
      }}
      className="absolute  h-full w-full">
      <BottomSheet
        onClose={() => {
          dispatch(turnOffSwipeUpDrawer());
        }}
        sliderMinHeight={0}
        isOpen={false}
        ref={(ref) => (panelRef.current = ref)}>
        <Text style={{ paddingVertical: 20 }}>Some random content</Text>
      </BottomSheet>
    </View>
  );
}

export default SwipeUpDrawer;
