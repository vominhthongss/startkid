import { ScrollView, Text, View } from "react-native";
import AvatarIcon from "../../../assets/svg/AvatarIcon";
import * as COLORS from "../../constants/colors";
import BottomArrowIcon from "../../../assets/svg/BottomArrowIcon";
import { FlatGrid } from "react-native-super-grid";
import { menus } from "../../constants/menus";
function HomeScreen() {
  return (
    <ScrollView className="bg-white h-full">
      <View className="flex flex-row items-center px-10 border-2 border-main w-[95%] h-28 mx-auto mt-3 rounded-lg">
        <View className="flex flex-row justify-between w-full ">
          <View className="flex flex-row">
            <AvatarIcon color={COLORS.main} size={60} />
            <View className="ml-8 mt-2">
              <Text>Nguyễn Văn A</Text>
              <Text className="text-[#999999]">Lớp: Tuyển sinh</Text>
            </View>
          </View>
          <BottomArrowIcon size={12} />
        </View>
      </View>

      <FlatGrid
        itemDimension={90}
        data={menus}
        renderItem={({ item }) => (
          <View className="flex flex-col items-center">
            {item.icon}
            <Text className="text-[#5F5F5F] mb-1 mt-3">{item.text}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

export default HomeScreen;
