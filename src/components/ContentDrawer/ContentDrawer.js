import React, { useState, useEffect, useRef } from "react";
import { Text } from "react-native";
import { View, Animated, Image, FlatList } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { toggleContentDrawer } from "../../store/contentDrawer/contentDrawerSlice";
import { useDispatch } from "react-redux";
import { drawerItemList } from "../../constants/drawerItem";
import { admissions, logout } from "../../constants/strings";
import { LogoutIcon } from "../../../assets/svg/LogoutIcon";

function ContentDrawer() {
  const dispatch = useDispatch();
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

  const DrawerItem = ({ icon, text }) => (
    <View className="flex-row items-center p-[2%]">
      {icon}
      <Text style={{color: "#333333"}} className="ml-4">{text}</Text>
    </View>
  );

  const DrawerItemDetailList = ({ items }) => {
    return (
      <FlatList
        className="p-[2.5%]"
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DrawerItem icon={item.icon} text={item.text} />
        )}
      />
    );
  };

  const drawerItemListView = drawerItemList.map((drawerItem, index) => (
      <View key={index} className="w-[100%] border-t pt-3" style={{borderTopColor: "#0A6843"}}>
        <Text style={{color: "#333333"}}>{drawerItem.drawerItemTitle}</Text>
        <DrawerItemDetailList items={drawerItem.drawerItemDetailList}/>
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
          className="h-full w-72 flex flex-col justify-end"
          onOutsidePress={() => {
            handlePressOutside();
          }}>
          <View className="bg-white w-full h-[95%] rounded-r-3xl">
            <View className="w-[85%] self-center">
                <View className="flex-row pt-3 pb-3" style={{}}>
                  <Image
                      source={require('../../../assets/img/face.png')}
                      className=""
                      onLoad={() => {}}
                      onError={() => {}}
                  />
                  <View className="self-center pl-5">
                    <Text className="text-lg font-medium">Nguyễn Văn A</Text>
                    <Text style={{color: "#999999"}} className="text-sm">{admissions}</Text>
                  </View>
              </View>
              {drawerItemListView}
              <View className="flex-row justify-end items-center">
                <LogoutIcon />
                <Text className="ml-2">{logout}</Text>
              </View>
            </View>
          </View>
        </OutsidePressHandler>
      </Animated.View>
    </View>
  );
}

export default ContentDrawer;
