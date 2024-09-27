import React, { useState, useEffect, useRef } from "react";
import { Text } from "react-native";
import {
  View,
  Animated,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { toggleContentDrawer } from "../../store/contentDrawer/contentDrawerSlice";
import { useDispatch } from "react-redux";
import { drawerItemList } from "../../constants/drawerItem";
import { admissions, logoutString } from "../../constants/strings";
import { LogoutIcon } from "../../../assets/svg/LogoutIcon";
import { logout } from "../../store/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
import * as SCREENS_NAME from "../../constants/screensName";
import { ScrollView } from "react-native-gesture-handler";

function ContentDrawer() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [slideAnim] = useState(new Animated.Value(-256));
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);
  const handlePressOutside = () => {
    Animated.timing(slideAnim, {
      toValue: -256,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      dispatch(toggleContentDrawer());
    });
  };

  const handleLogout = () => {
    logout();
    navigation.navigate(SCREENS_NAME.login);
  };

  const DrawerItem = ({ icon, text, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center p-[2%]">
      {icon}
      <Text style={{ color: "#333333" }} className="ml-4">
        {text}
      </Text>
    </TouchableOpacity>
  );

  const handleGoToScreen = (screen) => {
    if (!screen) {
      return;
    }
    navigation.navigate(screen);
  };

  const DrawerItemDetailList = ({ items }) => {
    return (
      <FlatList
        className="p-[2.5%]"
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DrawerItem
            icon={item.icon}
            text={item.text}
            onPress={() =>
              item.screen !== "" ? handleGoToScreen(item.screen) : {}
            }
          />
        )}
      />
    );
  };

  const drawerItemListView = drawerItemList.map((drawerItem, index) => (
    <View
      key={index}
      className="w-[100%] border-t pt-3"
      style={{ borderTopColor: "#0A6843" }}>
      <Text style={{ color: "#333333" }}>{drawerItem.drawerItemTitle}</Text>
      <DrawerItemDetailList items={drawerItem.drawerItemDetailList} />
    </View>
  ));

  return (
    <View
      className="absolute z-50 h-full w-full"
      style={{
        backgroundColor: "rgba(217, 217, 217, 0.5)",
      }}>
      <Animated.View
        style={[
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}>
        <OutsidePressHandler
          className="h-full w-72 flex flex-col justify-end py-3"
          onOutsidePress={() => {
            handlePressOutside();
          }}>
          <ScrollView className="bg-white w-full h-[100%] rounded-r-3xl">
            <View className="w-[85%] self-center">
              <View className="flex-row pt-3 pb-3" style={{}}>
                <Image
                  source={require("../../../assets/img/face.png")}
                  className=""
                  onLoad={() => {}}
                  onError={() => {}}
                />
                <View className="self-center pl-5">
                  <Text className="text-lg font-medium">Nguyễn Văn A</Text>
                  <Text style={{ color: "#999999" }} className="text-sm">
                    {admissions}
                  </Text>
                </View>
              </View>
              {drawerItemListView}
              <TouchableOpacity
                className="flex-row justify-end items-center"
                onPress={handleLogout}>
                <LogoutIcon color="#5F5F5F" />
                <Text className="ml-2">{logoutString}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </OutsidePressHandler>
      </Animated.View>
    </View>
  );
}

export default ContentDrawer;
