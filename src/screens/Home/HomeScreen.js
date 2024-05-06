import { Image, ScrollView, Text, View } from "react-native";
import AvatarIcon from "../../../assets/svg/AvatarIcon";
import * as COLORS from "../../constants/colors";
import BottomArrowIcon from "../../../assets/svg/BottomArrowIcon";
import { FlatGrid } from "react-native-super-grid";
import { menus } from "../../constants/menus";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { turnOnSwipeUpDrawer } from "../../store/swipeUpDrawer/swipeUpDrawerSlice";
import { useNavigation } from "@react-navigation/native";
import { noImage } from "../../constants/images";
import { fetchPosts } from "../../store/posts/postsSlice";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";

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
  const { posts } = useSelector((state) => state.posts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!posts && !isLoading) {
      setIsLoading(true);
      dispatch(fetchPosts());
    }
  }, [posts, dispatch, isLoading]);
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
          <View
            style={{
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            }}
            className="flex flex-col items-center rounded-md pb-1">
            <Image
              className="w-full h-32 object-fill rounded-t-md bg-slate-100"
              source={{
                uri: item.image || noImage,
              }}
            />
            <Text numberOfLines={2}>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

export default HomeScreen;
