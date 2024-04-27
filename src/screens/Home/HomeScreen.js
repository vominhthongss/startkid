import { Text, View } from "react-native";
import AvatarIcon from "../../../assets/svg/AvatarIcon";
import * as COLORS from "../../constants/colors";
import BottomArrowIcon from "../../../assets/svg/BottomArrowIcon";

function HomeScreen() {
  return (
    <View className="bg-white">
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
    </View>
  );
}

export default HomeScreen;
