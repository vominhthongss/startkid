import { Text, TextInput, View } from "react-native";
function CustomizeTextField({
  label,
  placeholder,
  value,
  onChangeText,
  type,
  secureTextEntry,
}) {
  return (
    <View className={"border-b py-2 border-gray-600 bg-gray-100 rounded-lg"}>
      <TextInput
        className={"h-56 pt-2 border-gray-500 border-none"}
        underlineColorAndroid="transparent"
        placeholderTextColor="grey"
        value={value}
        multiline={true}
        numberOfLines={4}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType="default"
      />
    </View>
  );
}

export default CustomizeTextField;
