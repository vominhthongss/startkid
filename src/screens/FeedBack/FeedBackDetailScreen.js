import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DiversityIcon } from "../../../assets/svg/DiversityIcon";
import * as STRINGS from "../../constants/strings";
import * as COLORS from "../../constants/colors";
import formatDateTime from "../../utils/formatDateTime";
import { hhmmddmm } from "../../constants/dateTimeFormat";

function FeedBackDetailScreen() {
  const route = useRoute();
  const { feedBack } = route.params;
  return (
    <View className="flex flex-row justify-end pt-4 bg-white h-full">
      <View>
        <Text className="self-end text-[#999999]">{feedBack.userId}</Text>
        <View
          style={styles.shadow}
          className="w-72 h-fit rounded-xl mt-2 self-center">
          <View className="w-64 pt-1 self-center">
            <Text className="border-b border-solid pb-2">{feedBack.title}</Text>
            <Text className="border-b border-solid pb-2">
              {feedBack.content}
            </Text>
          </View>
          <View className="flex flex-row self-end mt-4 justify-center items-center mr-2">
            <Text
              className="text-sm"
              style={{ fontSize: 10, color: COLORS.main }}>
              {formatDateTime(feedBack.createdDate, hhmmddmm)}
            </Text>
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

export default FeedBackDetailScreen;
