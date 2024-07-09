import React from "react";
import { Alert, View } from "react-native";
import GuardIcon from "../../../assets/svg/GuardIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import * as COLORS from "../../constants/colors";
import * as STRINGS from "../../constants/strings";
import GeneralForm from "../../components/GeneralForm/GeneralForm";
import { useDispatch } from "react-redux";
import { changePassword } from "../../store/user/userSlice";
import { useNavigation } from "@react-navigation/native";
export const ChangePasswordScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const fields = [
    {
      name: "oldPassword",
      placeholder: "Mật khẩu cũ",
      value: "",
      type: "password",
      label: "Mật khẩu cũ",
      isRequired: true,
    },
    {
      name: "newPassword",
      placeholder: "Mật khẩu mới",
      value: "",
      type: "password",
      label: "Mật khẩu mới",
      isRequired: true,
    },
    {
      name: "rePassword",
      placeholder: "Nhập lại mật khẩu",
      value: "",
      type: "password",
      label: "Nhập lại mật khẩu",
      isRequired: true,
    },
  ];
  const handleChangePassword = async (data) => {
    try {
      const resultAction = await dispatch(changePassword(data));
      if ((resultAction.payload.status_code = 200)) {
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
    <SafeAreaView>
      <View style={{ marginTop: "8%", marginBottom: "15%" }}>
        <GuardIcon color={COLORS.nav} size={80} />
      </View>
      <View className="mx-6">
        <GeneralForm
          customStyleButton={"mt-[12%]"}
          handleData={handleChangePassword}
          fields={fields}
          titleSubmitBtn={"Lưu"}
        />
      </View>
    </SafeAreaView>
  );
};
