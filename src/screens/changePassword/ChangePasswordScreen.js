import React from "react";
import { View } from "react-native";
import GuardIcon from "../../../assets/svg/GuardIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import * as COLORS from "../../constants/colors";
import GeneralForm from "../../components/GeneralForm/GeneralForm";
export const ChangePasswordScreen = () => {
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
  const handleChangePassword = (data) => {
    console.log("data :", data);
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
