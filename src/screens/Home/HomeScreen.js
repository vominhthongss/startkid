import { Image, ScrollView, Text, View } from "react-native";
import AvatarIcon from "../../../assets/svg/AvatarIcon";
import * as COLORS from "../../constants/colors";
import BottomArrowIcon from "../../../assets/svg/BottomArrowIcon";
import { FlatGrid } from "react-native-super-grid";
import { menus } from "../../constants/menus";
import { posts } from "../../mock/posts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { turnOnSwipeUpDrawer } from "../../store/swipeUpDrawer/swipeUpDrawerSlice";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOpenSwipeUp = () => {
    dispatch(turnOnSwipeUpDrawer());
  };
  const handleGoToScreen = (screen) => {
    if (!screen) {
      return;
    }
    navigation.navigate(screen);
  };
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
          <TouchableOpacity
            onPress={() =>
              item.showSwipeUpDrawer
                ? handleOpenSwipeUp()
                : handleGoToScreen(item.screen)
            }>
            <View className="flex flex-col items-center">
              {item.icon}
              <Text className="text-[#5F5F5F] mb-1 mt-3">{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <FlatGrid
        itemDimension={150}
        data={posts}
        renderItem={({ item }) => (
          <View className="flex flex-col items-center border rounded-lg">
            <Image
              className="w-full h-32 object-fill"
              source={{ uri: item.src }}
            />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

export default HomeScreen;
