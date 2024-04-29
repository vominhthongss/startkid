import { Animated, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonPopupTop from "../../../assets/svg/ButtonPopupTop";
import ButtonPopupLeft from "../../../assets/svg/ButtonPopupLeft";
import ButtonPopupRight from "../../../assets/svg/ButtonPopupRight";
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
    <View>
      
        <View>
      
      {showIcons && (
        <View className="-left-1/2">
          <FlatGrid
            itemDimension={70}
            data={centerButtons}
            renderItem={({ item }) => (
              <TouchableOpacity className={item.className}>
                <View className="flex flex-col items-center">
                  {item.icon}
                  <Text className="text-[#5F5F5F] mb-1 mt-3">{item.text}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <View className="-ml-[30px] -mb-2">
        <TouchableOpacity
          onPress={() => setShowIcons(!showIcons)}
          style={{ transform: [{ rotate: showIcons ? "45deg" : "0deg" }] }}
          className=" w-[55px] h-[55px] rounded-full z-50">
          <AddIcon color={COLORS.main} />
        </TouchableOpacity>
      </View>
    </View>
    </View>
    
  );
}

export default CenterButton;
