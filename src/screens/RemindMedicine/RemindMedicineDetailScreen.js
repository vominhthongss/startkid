import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DiversityIcon } from "../../../assets/svg/DiversityIcon";
import * as STRINGS from "../../constants/strings";
import * as COLORS from "../../constants/colors";
import formatDateTime from "../../utils/formatDateTime";
import { hhmmddmm } from "../../constants/dateTimeFormat";

function RemindMedicineDetailScreen() {
  const route = useRoute();
  const { remindMedicine } = route.params;
  return (
    <View className="flex flex-row justify-end pt-4 bg-white h-full">
      <View>
        <Text className="self-end text-[#999999]">{remindMedicine.userId}</Text>
        <View
          style={styles.shadow}
          className="w-72 h-fit rounded-xl mt-2 self-center">
          <View className="w-64 pt-1 self-center">
            <View className="flex flex-row">
              <Text className="text-[#999999]">{STRINGS.sickName}: </Text>
              <Text className="text-red-500">{remindMedicine.sickName}</Text>
            </View>
            <Text className="text-xs text-[#5F5F5F] pt-2">
              {remindMedicine.content}
            </Text>
          </View>
          <View className="flex flex-row self-end mt-4 justify-end items-center mr-2">
            <Text className="mr-3 text-red-500" style={{ fontSize: 10 }}>
              {remindMedicine.status}
            </Text>
            <Text className="text-[#84b3a1]" style={{ fontSize: 10 }}>
              {formatDateTime(remindMedicine.createdDate, hhmmddmm)}
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

export default RemindMedicineDetailScreen;
