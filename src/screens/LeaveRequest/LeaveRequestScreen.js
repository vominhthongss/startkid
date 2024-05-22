import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as SCREEN_NAMES from "../../constants/screensName";
import { useNavigation } from "@react-navigation/native";
import LeaveRequestItem from "../../components/LeaveRequestItem/LeaveRequestItem";
import { fetchLeaveRquests } from "../../store/leaveRequest/leaveRequestSlice";
import { SendIcon } from "../../../assets/svg/SendIcon";
import * as STRINGS from "../../constants/strings";
import Loading from "../../components/Loading/Loading";

function LeaveRequestScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { leaveRequests } = useSelector((state) => state.leaveRequests);
  useEffect(() => {
    if (!leaveRequests) {
      dispatch(fetchLeaveRquests());
    }
  }, [leaveRequests, dispatch]);

  const handleGoToDetailScreen = (leaveRequest) => {
    navigation.navigate(SCREEN_NAMES.leaveRequestDetail, {leaveRequest: leaveRequest});
  };

  const handleGoToAddScreen = () =>{
    navigation.navigate(SCREEN_NAMES.addLeaveRequest);
  }

  return (
    <View className="flex flex-row justify-center bg-white h-full">
      { leaveRequests ? 
        (
          <View>
            <FlatList
              data={leaveRequests}
              renderItem={({ item, index }) => (
                <LeaveRequestItem
                  key={index}
                  onSelected={() => {
                    handleGoToDetailScreen(item);
                  }}
                  leaveRequestItem={item}
                />
              )}></FlatList>
            <TouchableOpacity
              className="absolute bottom-5 self-center px-4 py-2 rounded-3xl bg-[#0A6843]"
              onPress={handleGoToAddScreen}>
              <View className="flex flex-row items-center">
                <SendIcon />
                <Text className="text-white ml-2">{STRINGS.createLeaveRq}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : <Loading/>
      }
    </View>
  );
}

export default LeaveRequestScreen;
