import { Text, View } from "react-native";
import * as COLORS from "../../constants/colors";

function AccountScreen() {
  return (
    <View>
      <View
        style={{ backgroundColor: COLORS.main }}
        className="h-20 w-full relative">
        <View className="absolute -ml-16 top-3 left-1/2 transform -translate-x-1/2 border rounded-full w-32 h-32 bg-white"></View>
      </View>
    </View>
  );
}

export default AccountScreen;
