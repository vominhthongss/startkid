import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import * as COLORS from "../../constants/colors";
import * as STRINGS from "../../constants/strings";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { other } from "../../constants/other";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import TelephoneIcon from "../../../assets/svg/TelephoneIcon";
import MailIcon from "../../../assets/svg/MailIcon";
import HomePinIcon from "../../../assets/svg/HomePinIcon";
import CameraAvatarIcon from "../../../assets/svg/CameraAvatarIcon";
import GeneralForm from "../../components/GeneralForm/GeneralForm";
import { fetchUser, updateUser } from "../../store/user/userSlice";
import { useEffect } from "react";

function AccountScreen() {
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, [user, dispatch]);
  const fields = [
    {
      name: "phoneNumber",
      placeholder: "Tên đăng nhập",
      value: "0" + user?.phoneNumber.toString(),
      type: "number",
      label: "Tên đăng nhập",
      isRequired: true,
    },
    {
      name: "fullName",
      placeholder: "Tên tài khoản",
      value: user?.name,
      type: "text",
      label: "Tên tài khoản",
      isRequired: true,
    },
    {
      name: "sex",
      placeholder: "Giới tính",
      value: user?.sex,
      type: "radio",
      label: "Giới tính",
      options: [
        {
          id: "male",
          label: "Nam",
        },
        {
          id: "female",
          label: "Nữ",
        },
      ],
      isRequired: true,
    },
    {
      name: "phoneSms",
      placeholder: "Số điện thoại nhận SMS",
      value: "0" + user?.phoneNumber.toString(),
      type: "number",
      label: "Số điện thoại nhận SMS",
      isRequired: true,
    },
    {
      name: "email",
      placeholder: "Gmail tài khoản",
      value: user?.email,
      type: "email",
      label: "Gmail tài khoản",
      isRequired: true,
    },
  ];
  const screenWidth = Dimensions.get("window").width;
  const styles = StyleSheet.create({
    line: {
      width: "90%",
      height: 1,
      backgroundColor: "grey",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: 80,
      width: 80,
    },
    home: {
      marginBottom: 200,
    },
    item: {
      marginTop: 30,
      marginLeft: 10,
      marginBottom: 30,
    },
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleOpenSwipeUp = () => {
    dispatch(turnOnSwipeUpDrawer());
  };
  const handleGoToScreen = (screen) => {
    if (!screen) {
      return;
    }
    navigation.navigate(screen);
  };
  const handleAccountForm = async (data) => {
    try {
      const resultAction = await dispatch(updateUser(data));
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
  const tabs = [
    {
      index: 0,
      name: STRINGS.school,
      component: (
        <View>
          <View
            className="flex flex-row"
            style={[styles.item, { marginLeft: 30 }]}>
            <Image
              source={require("../../../assets/img/face_3.png")}
              style={styles.image}
            />
            <View className="ml-8 mt-2">
              <Text>
                {STRINGS.father}
                {user?.father?.name}
              </Text>
              <View className="flex flex-row items-center">
                <TelephoneIcon />
                <Text> {user?.father?.phoneNumber}</Text>
              </View>
              <View className="flex flex-row items-center">
                <MailIcon></MailIcon>
                <Text> {user?.father?.email}</Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.line}></View>
          </View>
          <View className="flex flex-row" style={styles.item}>
            <View className="ml-8 mt-2">
              <Text>
                {STRINGS.mother}
                {user?.mother?.name}
              </Text>
              <View className="flex flex-row items-center">
                <TelephoneIcon />
                <Text> {user?.mother?.phoneNumber}</Text>
              </View>
              <View className="flex flex-row items-center">
                <MailIcon></MailIcon>
                <Text> {user?.mother?.email}</Text>
              </View>
            </View>
            <Image
              source={require("../../../assets/img/face_2.png")}
              style={[
                styles.image,
                { position: "absolute", right: screenWidth * 0.1 },
              ]}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.line}></View>
          </View>
          <View
            className="flex flex-row"
            style={[styles.item, { paddingBottom: 70 }]}>
            <View className="ml-8 mt-2">
              <View className="flex flex-row items-center">
                <HomePinIcon></HomePinIcon>
                <Text>{user?.address}</Text>
              </View>
            </View>
          </View>
        </View>
      ),
    },
    {
      index: 1,
      name: STRINGS.account,
      component: (
        <View className="mx-2">
          <GeneralForm
            handleData={handleAccountForm}
            fields={fields}
            titleSubmitBtn={"Lưu"}
          />
        </View>
      ),
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const tabsRender = tabs.map((tab, key) => (
    <View
      key={key}
      style={{
        backgroundColor: currentTab === tab.index ? COLORS.main : COLORS.none,
      }}
      className="rounded-t-lg">
      <TouchableOpacity onPress={() => setCurrentTab(tab.index)}>
        <Text
          style={{
            color: currentTab === tab.index ? COLORS.none : COLORS.dark,
          }}
          className="px-[13%] py-[5px] text-[18px]">
          {tab.name}
        </Text>
      </TouchableOpacity>
    </View>
  ));

  return (
    user && (
      <ScrollView className="bg-white h-full">
        <View
          style={{ backgroundColor: COLORS.main }}
          className="h-20 w-full relative">
          <View className="absolute -ml-11 top-9 left-1/2 transform -translate-x-1/2 border rounded-full w-20 h-20 bg-white">
            <Image
              source={require("../../../assets/img/diversity_1.png")}
              style={{ margin: 15 }}
            />
            <View style={{ right: 5, bottom: -5, position: "absolute" }}>
              <CameraAvatarIcon></CameraAvatarIcon>
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-center mt-20">{tabsRender}</View>
        <View className="w-[95%] rounded-xl mx-auto h-fit border-[#99C0B1] border-[1px]">
          {tabs[currentTab]?.component}
        </View>
        <View className="flex flex-row justify-between p-5">
          {other.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                item.showSwipeUpDrawer
                  ? handleOpenSwipeUp()
                  : handleGoToScreen(item.screen)
              }>
              <View className="flex flex-col items-center">
                {item.icon}
                <Text className="text-[#5F5F5F] mb-1 mt-3">{item.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  );
}

export default AccountScreen;
