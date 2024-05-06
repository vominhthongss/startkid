import { Image, Text, View } from "react-native";
import MediaIcon from "../../../assets/svg/MediaIcon";

function NotificationItem({ title, content, dateTime, image }) {
  return (
    <View className="flex flex-row items-center">
      <Image
        style={{ width: 70, height: 70 }}
        className="ml-2"
        source={require("../../../assets/img/thumb-noti.png")}
      />
      <View className="w-[75%] pt-5 pb-5 flex flex-col justify-between ml-5 pr-2 h-[120px] border-b border-[#e6f0ec]">
        <View>
          <Text numberOfLines={1}>{title}</Text>
          <Text numberOfLines={3} className="text-[#5F5F5F] text-xs">
            {content}
          </Text>
        </View>
        <View className="flex flex-row justify-between">
          {image ? (
            <View className="bg-[#fff3d3] rounded-lg flex flex-row pl-2 pr-2 py-1">
              <MediaIcon size={15} />
              <Text className="text-[#999999] ml-2">+{image.length}</Text>
            </View>
          ) : (
            <Text></Text>
          )}
          <Text className="text-[#84b3a1]">{dateTime}</Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationItem;
