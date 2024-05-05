import { Text, View } from "react-native";
import * as COLORS from "../../constants/colors";
import { Button } from "react-native";
import { useState } from "react";
import * as STRINGS from "../../constants/strings";

function AccountScreen() {
  const tab1 = () => <Text>Trường</Text>;
  const tab2 = () => <Text>Tài khoản</Text>;

  const [currentTab, setCurrentTab] = useState(1);
  return (
    <View>
      <View
        style={{ backgroundColor: COLORS.main }}
        className="h-20 w-full relative">
        <View className="absolute -ml-16 top-3 left-1/2 transform -translate-x-1/2 border rounded-full w-32 h-32 bg-white"></View>
      </View>
      <View className="flex flex-row justify-center mt-20">
        <Button onPress={() => setCurrentTab(1)} title={STRINGS.school} />
        <Button onPress={() => setCurrentTab(2)} title={STRINGS.account} />
      </View>
      <View className="w-[95%] rounded-xl mx-auto h-64 border-[#99C0B1] border-[1px]">
        {currentTab === 1 ? tab1() : tab2()}
      </View>
    </View>
  );
}

export default AccountScreen;
