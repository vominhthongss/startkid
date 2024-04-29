import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { centerButtons } from "../../constants/centerButtons";
import { FlatGrid } from "react-native-super-grid";
function CenterButton() {
  return (
    <View className="absolute z-10 border h-full w-full">
      <View
        className="h-full w-full flex flex-row justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
        <View className="absolute -bottom-6">
          <FlatGrid
            itemDimension={70}
            data={centerButtons}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ paddingBottom: index === 1 ? 150 : 0 }}>
                <View className="flex flex-col items-center">
                  {item.icon}
                  <Text className="text-white font-bold mt-3">{item.text}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default CenterButton;
