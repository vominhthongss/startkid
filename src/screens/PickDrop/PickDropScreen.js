import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import DotIcon from "../../../assets/svg/DotIcon";
import EditNoteIcon_2 from "../../../assets/svg/EditNoteIcon_2";
import SendIcon_2 from "../../../assets/svg/SendIcon_2";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as STRINGS from "../../constants/strings";
import * as COLORS from "../../constants/colors";
import CheckBox from "expo-checkbox";

function PickDropScreen() {
  const [text, setText] = useState("");

  const handleInputChange = (inputText) => {
    setText(inputText);
  };
  const [isPick, setIsPick] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  const styles = StyleSheet.create({
    image: {
      height: 100,
      width: 100,
    },
    square: {
      marginTop: 15,
      marginLeft: 10,
      width: 160,
      height: 160,
      backgroundColor: "rgba(227, 255, 244, 0.9)",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    dot: {
      left: -20,
      alignItems: "center",
    },
    editnote: {
      left: -30,
      alignItems: "center",
    },
    textInput: {
      width: 180,
      color: "black",
      borderRadius: 10,
      backgroundColor: "rgba(227, 255, 244, 0.9)",
      height: 60,
      borderColor: "rgba(227, 255, 244, 0.9)",
      paddingLeft: 15,
      paddingTop: 5,
      margin: 10,
      placeholderTextColor: "black",
      textAlignVertical: "top",
    },
    checkBox: {
      width: 15,
      height: 15,
      borderWidth: 2,
      marginLeft: 30,
      left: -10,
    },
    text: {
      marginLeft: 5,
    },
  });
  return (
    <ScrollView className="bg-white h-full">
      <View className="flex flex-row">
        <View style={styles.square}>
          <Image
            source={require("../../../assets/img/face_3.png")}
            style={styles.image}
          />
        </View>
        <View className="ml-8 mt-2">
          <View className="flex flex-row" style={styles.dot}>
            <DotIcon></DotIcon>
            <Text style={styles.text}>Nguyễn Văn A</Text>
          </View>
          <View className="flex flex-row" style={styles.dot}>
            <DotIcon></DotIcon>
            <Text style={styles.text}>0903123456</Text>
          </View>
          <View className="flex flex-row" style={styles.dot}>
            <DotIcon></DotIcon>
            <Text style={styles.text}>Bác</Text>
          </View>
          <View
            className="flex flex-row"
            style={{ left: -40, alignItems: "center" }}>
            <View className="flex flex-row">
              <CheckBox
                color={COLORS.main}
                disabled={false}
                value={isPick}
                className="w-4 h-4 border-black ml-5 mr-2"
                onValueChange={(value) => setIsPick(value)}
              />
              <Text style={{ alignItems: "center" }}>{STRINGS.pick}</Text>
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
            <View style={{ left: 70 }}>
              <EditNoteIcon_2></EditNoteIcon_2>
            </View>
          </View>
          <View className="flex flex-row" style={styles.editnote}>
            <TextInput
              style={styles.textInput}
              onChangeText={handleInputChange}
              value={text}
              placeholder="Đón trễ"></TextInput>
            <SendIcon_2></SendIcon_2>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default PickDropScreen;
