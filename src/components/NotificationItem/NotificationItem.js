import { Image, Text, View } from "react-native";
import MediaIcon from "../../../assets/svg/MediaIcon";

function NotificationItem({ thumb, title, description, dateTime }) {
  return (
    <View className="flex flex-row items-center">
      <Image
        style={{ width: 70, height: 70 }}
        className="ml-2"
        source={require("../../../assets/img/thumb-noti.png")}
      />
      <View className="w-[75%] pt-5 pb-5 flex flex-col justify-between ml-5 pr-2 h-[120px] border-b border-[#e6f0ec]">
        <View>
          <Text>{title}</Text>
          <Text className="text-[#5F5F5F] text-xs">{description}</Text>
        </View>
        <View className="flex flex-row justify-between">
          <View className="bg-[#fff3d3] rounded-lg flex flex-row pl-2 pr-2 py-1">
            <MediaIcon size={15} />
            <Text className="text-[#999999] ml-2">+1</Text>
          </View>
          <Text className="text-[#84b3a1]">{dateTime}</Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationItem;
