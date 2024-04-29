import { Animated, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import AddIcon from "../../../assets/svg/AddIcon";
import * as COLORS from "../../constants/colors";
import { Text } from "react-native";
import { centerButtons } from "../../constants/centerButtons";
import { FlatGrid } from "react-native-super-grid";
function CenterButton() {
  const [showIcons, setShowIcons] = useState(false);

  const animation = new Animated.Value(0);

  const handlePopupButtonPress = () => {
    setShowIcons(!showIcons);
  };
  return (
    <View className="w-full h-full">
      {showIcons && (
        <View
          className="h-full w-full flex flex-row justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
          <View className="absolute bottom-12">
            <FlatGrid
              itemDimension={70}
              data={centerButtons}
              renderItem={({ item }) => (
                <TouchableOpacity className={item.className}>
                  <View className="flex flex-col items-center">
                    {item.icon}
                    <Text className="text-white font-bold mt-3">
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}
      <View className="absolute bottom-5 left-1/2 -ml-[26px] shadow">
        <TouchableOpacity
          onPress={() => setShowIcons(!showIcons)}
          style={{ transform: [{ rotate: showIcons ? "45deg" : "0deg" }] }}
          className=" w-[55px] h-[55px] rounded-full z-50">
          <AddIcon color={COLORS.main} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CenterButton;
