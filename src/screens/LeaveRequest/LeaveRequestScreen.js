import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import * as SCREEN_NAMES from "../../constants/screensName";
import { leaveRequests } from "../../mock/leaveRequests";
import { useNavigation } from "@react-navigation/native";
import LeaveRequestItem from "../../components/LeaveRequestItem/LeaveRequestItem";
import { SendIcon } from "../../../assets/svg/SendIcon";
import * as STRINGS from "../../constants/strings";

function LeaveRequestScreen() {
  const navigation = useNavigation();

  const handleGoToDetailScreen = (id) => {
    navigation.navigate(SCREEN_NAMES.leaveRequestDetail, { id: id });
  }

  return (
    <View className="flex flex-row justify-center bg-white h-full">
      <FlatList
        data={leaveRequests}
        keyExtractor={(item, index) => { index }}
        renderItem={({ item }) => (
          <LeaveRequestItem onSelected={() => { handleGoToDetailScreen(item.id) }} leaveRequestItem={item} />
        )}>
      </FlatList>
      <TouchableOpacity className="absolute bottom-5 self-center px-4 py-2 rounded-3xl bg-[#0A6843]" onPress={() => { }}>
        <View className="flex flex-row items-center">
          <SendIcon />
          <Text className="text-white ml-2">{STRINGS.createLeaveRq}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default LeaveRequestScreen;
