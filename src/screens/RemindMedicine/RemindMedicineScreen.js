import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as SCREEN_NAMES from "../../constants/screensName";
import { useNavigation } from "@react-navigation/native";
import { fetchRemindMedicines } from "../../store/remindMedicine/remindMedicineSlice";
import { SendIcon } from "../../../assets/svg/SendIcon";
import * as STRINGS from "../../constants/strings";
import Loading from "../../components/Loading/Loading";
import RemindMedicineItem from "../../components/RemindMedicineItem/RemindmedicineItem";

function RemindMedicineScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { remindMedicines } = useSelector((state) => state.remindMedicines);
  useEffect(() => {
    if (!remindMedicines) {
      dispatch(fetchRemindMedicines());
    }
  }, [remindMedicines, dispatch]);

  const handleGoToDetailScreen = (remindMedicine) => {
    navigation.navigate(SCREEN_NAMES.remindMedicineDetail, {
      remindMedicine: remindMedicine,
    });
  };

  const handleGoToAddScreen = () => {
    navigation.navigate(SCREEN_NAMES.addRemindMedicine);
  };

  return (
    <View className="flex flex-row justify-center bg-white h-full">
      {remindMedicines ? (
        <View>
          <FlatList
            data={remindMedicines}
            renderItem={({ item, index }) => (
              <RemindMedicineItem
                key={index}
                onSelected={() => {
                  handleGoToDetailScreen(item);
                }}
                remindMedicineItem={item}
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
      ) : (
        <Loading />
      )}
    </View>
  );
}

export default RemindMedicineScreen;
