import { StyleSheet, Text, View } from "react-native";

function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Account Screen</Text>
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

export default AccountScreen;
