import { Text, View, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import { leaveRequests } from "../../mock/leaveRequests";
import { DiversityIcon } from "../../../assets/svg/DiversityIcon";
import * as STRINGS from "../../constants/strings";
import * as COLORS from "../../constants/colors";

function LeaveRequestDetailScreen() {
  const route = useRoute();
  const { id } = route.params;
  const leaveRequest = leaveRequests.filter((leaveRequest) => {
    return leaveRequest.id == id;
  })[0];

  return (
    <View className="flex flex-row justify-end pt-4 bg-white h-full">
      <View>
        <Text className="self-end text-[#999999]">{leaveRequest.detail.name}</Text>
        <View style={styles.shadow} className="w-72 h-36 self-end rounded-xl mt-2 self-center">
          <View className="w-64 pt-1 self-center">
            <Text className="border-b border-solid border-[#0A68431A] pb-2">{leaveRequest.title}</Text>
            <Text className="text-xs text-[#5F5F5F] pt-2">{STRINGS.leaveTimeRange}: {leaveRequest.fromDate}</Text>
            <View className="flex flex-row items-center mt-3">
              <Text className="text-xs text-[#5F5F5F] ml-8">{leaveRequest.detail.dateTime}</Text>
              <View className="flex flex-row justify-center items-center rounded-xl bg-[#0A6843] h-[24] w-[60] ml-4">
                <Text className="text-xs text-white">{leaveRequest.detail.session}</Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row self-end mt-4 justify-center items-center mr-2">
            <Text className="mr-3 text-red-500" style={{ fontSize: 10 }}>{leaveRequest.detail.status}</Text>
            <Text className="text-sm text-[#999999]" style={{ fontSize: 10 }}>{leaveRequest.detail.createDateTime}</Text>
          </View>
        </View>
      </View>
      <View className="bg-[#E3FFF4] mt-7 ml-2 h-12 w-12 rounded-full flex flex-row items-center justify-center">
        <DiversityIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: COLORS.noneBasic,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default LeaveRequestDetailScreen;
