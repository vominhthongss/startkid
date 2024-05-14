import { Text, View } from "react-native";
import * as COLORS from "../../constants/colors";
import * as STRINGS from "../../constants/strings";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function AccountScreen() {
  const tabs = [
    {
      index: 0,
      name: STRINGS.school,
      component: (
        <View>
          <Text>{STRINGS.school}</Text>
        </View>
      ),
    },
    {
      index: 1,
      name: STRINGS.account,
      component: (
        <View>
          <Text>{STRINGS.account}</Text>
        </View>
      ),
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const tabsRender = tabs.map((tab, key) => (
    <View
      key={key}
      style={{
        backgroundColor: currentTab === tab.index ? COLORS.main : COLORS.none,
      }}
      className="rounded-t-lg">
      <TouchableOpacity onPress={() => setCurrentTab(tab.index)}>
        <Text
          style={{
            color: currentTab === tab.index ? COLORS.none : COLORS.dark,
          }}
          className="px-[13%] py-[5px] text-[18px]">
          {tab.name}
        </Text>
      </TouchableOpacity>
    </View>
  ));
  return (
    <View className="bg-white h-full">
      <View
        style={{ backgroundColor: COLORS.main }}
        className="h-20 w-full relative">
        <View className="absolute -ml-11 top-9 left-1/2 transform -translate-x-1/2 border rounded-full w-20 h-20 bg-white"></View>
      </View>
      <View className="flex flex-row justify-center mt-20">{tabsRender}</View>
      <View className="w-[95%] rounded-xl mx-auto h-fit border-[#99C0B1] border-[1px]">
        {tabs[currentTab]?.component}
      </View>
    </View>
  );
}

export default AccountScreen;
