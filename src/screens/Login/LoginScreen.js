import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SCREENS_NAME from "../../constants/screensName";
import { LogoIcon } from "../../../assets/svg/LogoIcon";
import { LockIcon } from "../../../assets/svg/LockIcon";
import { PhoneIcon } from "../../../assets/svg/PhoneIcon";
import { EyeHiddenIcon } from "../../../assets/svg/EyeHiddenIcon";
import { TrashIcon } from "../../../assets/svg/TrashIcon";
import { UserIcon } from "../../../assets/svg/UserIcon";
import { EyeIcon } from "../../../assets/svg/EyeIcon";
import * as COLORS from "../../constants/colors";
import * as STRINGS from "../../constants/strings";
import RadioButton from "../../components/RadioButton/RadioButton";
import OutsidePressHandler from "react-native-outside-press";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice/modalSlice";
import CustomModal from "../../components/CustomModal/CustomModal";
import { MODAL_TYPE } from "../../constants/common";
import { login } from "../../store/auth/authSlice";
import { getItem, setItem, removeItem } from "../../utils/localStorage";

const SavedPasswordModal = ({
  isVisible,
  onClose,
  onSelected,
  onDelete,
  savedPasswordList,
}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}>
      <View
        className="h-full flex justify-center items-center"
        style={{ backgroundColor: "#D9D9D980" }}>
        <OutsidePressHandler onOutsidePress={onClose}>
          <View className="w-80 rounded-2xl bg-white">
            <View
              className="rounded-t-2xl pt-2 pb-2 pl-6"
              style={{ backgroundColor: COLORS.main }}>
              <View className="flex-row items-center justify-between">
                <Text className="text-lg text-white">
                  {STRINGS.selectAccount}
                </Text>
              </View>
            </View>
            <View className="pl-2">
              <View className="h-16">
                <FlatList
                  data={savedPasswordList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <View className="w-[95%] flex-row justify-between items-center pl-4 pb-2 pt-3">
                      <TouchableOpacity
                        className="w-[90%]"
                        onPress={() => {
                          onSelected(item.phoneNumber, item.password);
                        }}>
                        <View className="flex-row items-center">
                          <UserIcon />
                          <Text className="text-lg ml-4">
                            {item.phoneNumber}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                        <TouchableOpacity
                          onPress={() => {
                            onDelete(item.phoneNumber);
                          }}>
                          <TrashIcon />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </OutsidePressHandler>
      </View>
    </Modal>
  );
};

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [savedPasswordList, setSavedPasswordList] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSavedPasswords = async () => {
      const savedData = await getItem("savedPasswords");
      if (savedData) {
        setSavedPasswordList(JSON.parse(savedData));
      }
    };
    loadSavedPasswords();
  }, []);

  const handleForgotPasswordOpenModal = () => {
    const params = {
      title: STRINGS.forgotPassword,
      content: STRINGS.forgotPasswordDes,
    };
    handleOpenModal(MODAL_TYPE.NORMAL, params);
  };

  const handleUnSuccessLoginOpenModal = () => {
    const params = {
      title: STRINGS.unSuccessfulLogin,
      content: STRINGS.unSuccessfulLoginDes,
    };
    handleOpenModal(MODAL_TYPE.NORMAL, params);
  };

  const handleOpenModal = (modalType, params) => {
    dispatch(
      openModal({
        modalType: modalType,
        params: params,
      })
    );
  };

  const handleLogin = async () => {
    let userData = {
      phoneNumber: phoneNumber,
      password: password,
    };

    try {
      setLoading(true);
      let resultAction = await dispatch(login(userData));
      if (login.fulfilled.match(resultAction)) {
        if (selectedOption) {
          const updatedSavedPasswordList = [...savedPasswordList, userData];
          setSavedPasswordList(updatedSavedPasswordList);
          await setItem(
            "savedPasswords",
            JSON.stringify(updatedSavedPasswordList)
          );
        }
        navigation.navigate(SCREENS_NAME.mainTab);
      } else {
        handleUnSuccessLoginOpenModal();
      }
    } catch (error) {
      handleUnSuccessLoginOpenModal();
    } finally {
      setLoading(false);
    }
  };

  const handleSavedPassword = () => {
    setAlertVisible(true);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleFillPhoneNumberAndPassword = (phoneNumber, password) => {
    setPhoneNumber(phoneNumber);
    setPassword(password);
    handleClose();
  };

  const handleDeletePhoneNumberAndPassword = async (phoneNumber) => {
    const updatedSavedPasswordList = savedPasswordList.filter(
      (savedPassword) => savedPassword.phoneNumber !== phoneNumber
    );
    setSavedPasswordList(updatedSavedPasswordList);
    await setItem("savedPasswords", JSON.stringify(updatedSavedPasswordList));
  };

  const handleClose = () => {
    setAlertVisible(false);
  };

  return (
    <View className="p-10 h-full" style={{ backgroundColor: COLORS.noneBasic }}>
      <View className="self-center mt-10">
        <LogoIcon />
      </View>
      <Text className="text-2xl font-bold mt-5">{STRINGS.welcome}</Text>
      <View
        className="w-full p-2 flex flex-row items-center mt-5 border-solid rounded-3xl border self-center"
        style={{ borderColor: COLORS.main }}>
        <PhoneIcon />
        <TextInput
          className="ml-2 -mt-2 items-center text-base w-full"
          placeholder={STRINGS.phoneNumber}
          value={phoneNumber}
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View
        className="w-full p-2 flex flex-row items-center mt-3 border-solid rounded-3xl border self-center"
        style={{ borderColor: COLORS.main }}>
        <LockIcon />
        <TextInput
          className="ml-2 -mt-2 text-base w-[82%]"
          placeholder={STRINGS.password}
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {isPasswordVisible ? <EyeHiddenIcon /> : <EyeIcon />}
        </TouchableOpacity>
      </View>
      <View className="mt-4 flex-row items-center justify-between">
        <RadioButton
          label={STRINGS.rememberPassword}
          isSelected={selectedOption}
          onPress={() => setSelectedOption(!selectedOption)}
          borderColor="green"
        />
        <TouchableOpacity onPress={handleForgotPasswordOpenModal}>
          <Text style={{ color: "#00000066" }} className="text-base">
            {STRINGS.forgotPassword}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="h-[6%] w-[60%] mt-8 rounded-3xl flex flex-row items-center justify-center self-center"
        style={{ backgroundColor: COLORS.main }}
        onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text className="text-lg" style={{ color: COLORS.noneBasic }}>
            {STRINGS.login}
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        className="mt-4 self-center"
        onPress={handleSavedPassword}>
        <Text style={{ color: "#00000066" }}>{STRINGS.savedPassword}</Text>
      </TouchableOpacity>
      <SavedPasswordModal
        isVisible={alertVisible}
        onClose={handleClose}
        onSelected={handleFillPhoneNumberAndPassword}
        onDelete={handleDeletePhoneNumberAndPassword}
        savedPasswordList={savedPasswordList}
      />
      <CustomModal />
    </View>
  );
};

export default LoginScreen;
