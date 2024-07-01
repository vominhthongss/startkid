import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as SCREEN_NAMES from "../../constants/screensName";
import { useNavigation } from "@react-navigation/native";
import { fetchFeedBacks } from "../../store/feedBack/feedBackSlice";
import { SendIcon } from "../../../assets/svg/SendIcon";
import * as STRINGS from "../../constants/strings";
import Loading from "../../components/Loading/Loading";
import FeedBackItem from "../../components/FeedBackItem/FeedBackItem";
import { ScrollView } from "react-native-gesture-handler";

function FeedBackScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { feedBacks } = useSelector((state) => state.feedBacks);
  useEffect(() => {
    if (!feedBacks) {
      dispatch(fetchFeedBacks());
    }
  }, [feedBacks, dispatch]);

  const handleGoToDetailScreen = (feedBack) => {
    navigation.navigate(SCREEN_NAMES.feedBackDetail, {
      feedBack: feedBack,
    });
  };

  const handleGoToAddScreen = () => {
    navigation.navigate(SCREEN_NAMES.addFeedBack);
  };

  return (
    <View className="flex flex-row justify-center bg-white h-full">
      {feedBacks ? (
        <View>
          <ScrollView>
            {feedBacks.map((item, key) => (
              <FeedBackItem
                key={key}
                onSelected={() => {
                  handleGoToDetailScreen(item);
                }}
                feedBackItem={item}
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            className="absolute bottom-5 self-center px-4 py-2 rounded-3xl bg-[#0A6843]"
            onPress={handleGoToAddScreen}>
            <View className="flex flex-row items-center">
              <SendIcon />
              <Text className="text-white ml-2">{STRINGS.createFeedBack}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
}

export default FeedBackScreen;
