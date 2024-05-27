import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import DotIcon from "../../../assets/svg/DotIcon";
import PressSendIcon from "../../../assets/svg/PressSendIcon";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as STRINGS from "../../constants/strings";
import * as COLORS from "../../constants/colors";
import CheckBox from "expo-checkbox";
import UpdateNoteIcon from "../../../assets/svg/UpdateNote";

function PickDropScreen() {
  const [text, setText] = useState("");

  const handleInputChange = (inputText) => {
    setText(inputText);
  };
  const [isPick, setIsPick] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  return (
    <ScrollView className="bg-white h-full">
      <View className="flex flex-row">
        <Image className="my-4 mx-2.5 w-40 h-40 "
          source={require("../../../assets/img/imageface.png")}
        />
        <View className="ml-8 mt-2">
          <View className="flex flex-row items-center -left-5">
            <DotIcon></DotIcon>
            <Text className="mx-1">Nguyễn Văn A</Text>
          </View>
          <View className="flex flex-row items-center -left-5">
            <DotIcon></DotIcon>
            <Text className="mx-1">0903123456</Text>
          </View>
          <View className="flex flex-row items-center -left-5">
            <DotIcon></DotIcon>
            <Text className="mx-1">Bác</Text>
          </View>
          <View
            className="flex flex-row -left-10 items-center" >
            <View className="flex flex-row">
              <CheckBox
                color={COLORS.main}
                disabled={false}
                value={isPick}
                className="w-4 h-4 border-black ml-5 mr-2"
                onValueChange={(value) => setIsPick(value)}
              />
              <Text className="items-center">{STRINGS.pick}</Text>
            </View>
            <View className="flex flex-row">
              <CheckBox
                color={COLORS.main}
                disabled={false}
                value={isDrop}
                className="w-4 h-4 border-black ml-5 mr-2"
                onValueChange={(value) => setIsDrop(value)}
              />
              <Text>{STRINGS.drop}</Text>
            </View>
            <View className="left-[55]">
              <TouchableOpacity>
                <UpdateNoteIcon></UpdateNoteIcon>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-row items-center -left-7">
            <TextInput
              className="w-40 text-black rounded-xl bg-emerald-50 h-16 px-3.5 py-3 m-2.5 align-text-top "
              style={{ backgroundColor: "#E3FFF4" }}
              onChangeText={handleInputChange}
              value={text}
              placeholder={STRINGS.latePickUp}></TextInput>
            <TouchableOpacity>
              <PressSendIcon></PressSendIcon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default PickDropScreen;