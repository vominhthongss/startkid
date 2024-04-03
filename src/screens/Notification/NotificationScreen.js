import React from "react";
import { View, Text, StyleSheet } from "react-native";

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Notification Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});

export default NotificationScreen;
