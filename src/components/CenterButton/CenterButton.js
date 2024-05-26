import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { centerButtons } from "../../constants/centerButtons";
function CenterButton() {
  return (
    <View className="absolute z-10 h-full w-full">
      <View
        className="h-full w-full flex flex-row justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
        <View className="absolute bottom-20 w-[220px]">
          <View className="flex flex-row flex-wrap justify-between items-end">
            {centerButtons.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{ marginBottom: index === 1 ? 70 : 0 }}
                  className="w-[70px]">
                  <View className="flex flex-col items-center">
                    {item.icon}
                    <Text className="text-white font-bold mt-3">
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

export default CenterButton;
