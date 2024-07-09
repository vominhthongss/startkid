import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RadioButton = ({
  isSelected,
  onPress,
  label,
  dotColor = "#0A684380",
  borderColor = "#EA3637",
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      }}>
      <TouchableOpacity
        style={{
          height: 15,
          width: 15,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: borderColor,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onPress}>
        {isSelected ? (
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 6,
              backgroundColor: dotColor,
            }}
          />
        ) : null}
      </TouchableOpacity>
      {label && (
        <Text className="ml-2 text-base" style={{ color: "#00000066" }}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default RadioButton;
