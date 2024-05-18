import { Text, TextInput, View } from "react-native";

function CustomizeTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  type,
  secureTextEntry,
}) {
  let keyboardType = "default";
  if (type === "number") {
    keyboardType = "numeric";
  } else if (type === "time") {
    keyboardType = "default";
  }
  return (
    <View className="border-b py-3 border-b-[#999999]">
      <Text className="text-[#999999] absolute">{label}</Text>
      <TextInput
        className="h-8 pt-3"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
}

export default CustomizeTextInput;
