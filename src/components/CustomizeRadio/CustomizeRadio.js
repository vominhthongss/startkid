import React, { useMemo, useState } from "react";
import { Text, TextInput, View } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

function CustomizeRadio({ label, options, value, onChangeText, editable }) {
  console.log("editable :", editable);
  const radioButtons = useMemo(
    () =>
      options || [
        {
          id: "option1",
          label: "Option 1",
        },
        {
          id: "option2",
          label: "Option 2",
        },
      ],
    []
  );

  const [selectedId, setSelectedId] = useState(value?.id || value);
  const handleChange = (data) => {
    setSelectedId(data);
    onChangeText(data);
  };
  const renderLabel = (id) => {
    return options?.find((o) => (o.id = id))?.label;
  };
  return (
    <View className="border-b pt-5 pb-1 border-b-[#999999] w-full">
      <Text className="text-[#999999] absolute">{label}</Text>
      <RadioGroup
        containerStyle={{
          display: !editable ? "flex" : "none",
          flexDirection: "row",
        }}
        radioButtons={radioButtons}
        onPress={(data) => handleChange(data)}
        selectedId={selectedId}
      />
      {editable === true && (
        <View className="h-[30px] flex flex-row items-center">
          <Text>{renderLabel(selectedId)}</Text>
        </View>
      )}
    </View>
  );
}

export default CustomizeRadio;
