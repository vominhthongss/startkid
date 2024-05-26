import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import AvatarIcon from "../../../assets/svg/AvatarIcon";
import * as COLORS from "../../constants/colors";
import BottomArrowIcon from "../../../assets/svg/BottomArrowIcon";
import { menus } from "../../constants/menus";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { turnOnSwipeUpDrawer } from "../../store/swipeUpDrawer/swipeUpDrawerSlice";
import { useNavigation } from "@react-navigation/native";
import { noImage } from "../../constants/images";
import { fetchPosts } from "../../store/posts/postsSlice";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

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

  useEffect(() => {
    if (!posts) {
      dispatch(fetchPosts());
    }
  }, [posts, dispatch]);
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
      <View className="flex flex-row flex-wrap justify-between my-5 px-2">
        {menus.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={{ width: -5 + Dimensions.get("window").width / 4 }}
            onPress={() =>
              item.showSwipeUpDrawer
                ? handleOpenSwipeUp()
                : handleGoToScreen(item.screen)
<<<<<<< HEAD
            }
            >
            <View className="flex flex-col items-center">
=======
            }>
            <View className="flex flex-col items-center ">
>>>>>>> main
              {item.icon}
              <Text className="text-[#5F5F5F] mb-1 mt-3">{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {posts ? (
        <View className="flex flex-row flex-wrap justify-between px-2">
          {posts.map((item, key) => (
            <View
              key={key}
              style={{
                width: "48%",
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                marginBottom: 10,
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
          ))}
        </View>
      ) : (
        <Loading />
      )}
    </ScrollView>
  );
}

export default HomeScreen;
