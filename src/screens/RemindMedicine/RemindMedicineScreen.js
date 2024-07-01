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
import { ScrollView } from "react-native-gesture-handler";

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
          <ScrollView>
            {remindMedicines.map((item, key) => (
              <RemindMedicineItem
                key={key}
                onSelected={() => {
                  handleGoToDetailScreen(item);
                }}
                remindMedicineItem={item}
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            className="absolute bottom-5 self-center px-4 py-2 rounded-3xl bg-[#0A6843]"
            onPress={handleGoToAddScreen}>
            <View className="flex flex-row items-center">
              <SendIcon />
              <Text className="text-white ml-2">
                {STRINGS.createRemindMedicine}
              </Text>
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
