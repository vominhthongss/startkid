import { Text, View, TouchableOpacity } from "react-native";
import { CalendarClockIcon } from "../../../assets/svg/CalendarClockIcon";
import MediaIcon from "../../../assets/svg/MediaIcon";
import * as STRINGS from "../../constants/strings";
import formatDateTime from "../../utils/formatDateTime";

function FeedBackItem({ feedBackItem, onSelected }) {
  const format = "DD/MM";
  const startEndDateTime =
    formatDateTime(feedBackItem.startDateTime, format) +
    " - " +
    formatDateTime(feedBackItem.endDateTime, format);

  return (
    <TouchableOpacity
      onPress={onSelected}
      className="flex flex-row ml-7 mt-4 pr-7 w-[73%] bg-white">
      <View className="bg-[#E3FFF4] rounded-full h-[70] w-[70] flex justify-center items-center">
        <CalendarClockIcon />
        <View className="bg-[#EA3637] h-3 w-3 rounded-full absolute bottom-[4] right-[4]" />
      </View>
      <View className="ml-5 w-full border-b border-solid border-[#0A68431A]">
        <Text className="text-base">{feedBackItem.title}</Text>
        <Text>
          {STRINGS.leaveTimeRange}: {startEndDateTime}
        </Text>
        <View className="flex flex-row justify-between items-center pt-3 pb-1">
          <View className="bg-[#fff3d3] rounded-xl flex flex-row items-center pl-2 pr-2 py-1">
            <MediaIcon size={15} />
            <Text className="text-[#999999] ml-2">+1</Text>
          </View>
          <Text className="text-[#84b3a1]">
            {formatDateTime(feedBackItem.startDateTime)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FeedBackItem;
