import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as SCREEN_NAMES from "../../constants/screensName";
import { useNavigation } from "@react-navigation/native";
import MessageItem from "../../components/MessageItem/MessageItem";
import { fetchMessages } from "../../store/message/messageSlice";
import { SendIcon } from "../../../assets/svg/SendIcon";
import * as STRINGS from "../../constants/strings";
import Loading from "../../components/Loading/Loading";
import { ScrollView } from "react-native-gesture-handler";

function MessageScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messages);
  useEffect(() => {
    dispatch(fetchMessages());
  }, [messages, dispatch]);

  const handleGoToDetailScreen = (message) => {
    navigation.navigate(SCREEN_NAMES.messageDetail, {
      message: message,
    });
  };

  const handleGoToAddScreen = () => {
    navigation.navigate(SCREEN_NAMES.addMessage);
  };

  return (
    <View className="flex flex-row justify-center bg-white h-full">
      {messages ? (
        <View>
          <ScrollView>
            {messages.map((item, key) => (
              <MessageItem
                key={key}
                onSelected={() => {
                  handleGoToDetailScreen(item);
                }}
                messageItem={item}
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            className="absolute bottom-5 self-center px-4 py-2 rounded-3xl bg-[#0A6843]"
            onPress={handleGoToAddScreen}>
            <View className="flex flex-row items-center">
              <SendIcon />
              <Text className="text-white ml-2">{STRINGS.createMessage}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
}

export default MessageScreen;
