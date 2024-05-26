import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";
function CustomizeTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  type,
  secureTextEntry,
}) {
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (data) => {
    const formattedDate = data.toLocaleDateString();
    hideTimePicker();
    onChangeText(formattedDate);
  };
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
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onFocus={() => type === "time" && showTimePicker()}
      />

      {type === "time" && (
        <TouchableOpacity
          onPress={showTimePicker}
          style={{ position: "absolute", top: 12, right: 10 }}>
          <Icon name="clock-o" size={20} />
        </TouchableOpacity>
      )}

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="date"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        is24Hour={false}
      />
    </View>
  );
}

export default CustomizeTextInput;
