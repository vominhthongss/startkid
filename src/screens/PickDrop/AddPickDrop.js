import { Alert, Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CameraAvatarIcon from "../../../assets/svg/CameraAvatarIcon";
import * as COLORS from "../../constants/colors";
import GeneralForm from "../../components/GeneralForm/GeneralForm";
import * as STRINGS from "../../constants/strings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import api from "../../services/api";
import { BASE_URL } from "../../constants/url";
import { addPickDrops } from "../../store/pickDrop/pickDropSlice";
import { fetchUser } from "../../store/user/userSlice";
import { useNavigation } from "@react-navigation/native";
import { noImage } from "../../constants/images";

function AddPickDropScreen() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [user, dispatch]);
  const navigation = useNavigation();
  const fields = [
    {
      name: "phoneNumber",
      placeholder: "Số điện thoại",
      value: "",
      type: "text",
      label: "Số điện thoại",
      isRequired: true,
    },
    {
      name: "relationship",
      placeholder: "Quan hệ",
      value: "",
      type: "text",
      label: "Quan hệ",
      isRequired: true,
    },
    {
      name: "idNumber",
      placeholder: "Số định danh",
      value: "",
      type: "text",
      label: "Số định danh",
      isRequired: true,
    },
    {
      name: "action",
      placeholder: "Giới tính",
      value: "Đưa",
      type: "radio",
      label: "Lựa chọn đưa đón mặc định",
      options: [
        {
          id: "Đưa",
          label: "Đưa",
        },
        {
          id: "Đón",
          label: "Đón",
        },
      ],
      isRequired: true,
    },
    {
      name: "note",
      placeholder: "Phụ huynh nhập thêm ghi chú",
      value: "",
      type: "textfield",
      label: "",
      isRequired: true,
    },
  ];
  const handlePickDrop = async (data) => {
    try {
      const resultAction = await dispatch(addPickDrops(data));
      if (resultAction.payload.status_code === 200) {
        Alert.alert(STRINGS.alertTitle, resultAction.payload.message);
        navigation.goBack();
      } else {
        Alert.alert(STRINGS.alertTitle, STRINGS.alertFail);
      }
    } catch (error) {
      Alert.alert(STRINGS.alertTitle, STRINGS.alertFail);
    }
  };
  return (
    <ScrollView className="bg-white h-full">
      <View
        style={{ backgroundColor: COLORS.main }}
        className="h-20 w-full relative">
        <View className="absolute -ml-11 top-9 left-1/2 transform -translate-x-1/2 border rounded-full w-20 h-20 bg-white">
          <Image
            className="rounded-full w-20 h-20"
            source={{
              uri: BASE_URL + "/api/user/avatar/" + user?.avatar || noImage,
            }}
          />
        </View>
      </View>
      <View className="px-4 mt-14">
        <GeneralForm
          handleData={handlePickDrop}
          fields={fields}
          titleSubmitBtn={STRINGS.updatePickDrop}
        />
      </View>
    </ScrollView>
  );
}

export default AddPickDropScreen;
