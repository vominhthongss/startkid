import { Text, TouchableOpacity } from "react-native";
import * as COLORS from "../../constants/colors";

function CustomizeButton({ title, onPress, styleButton }) {
  return (
    <TouchableOpacity
    style={{
      backgroundColor: COLORS.main,
    }}
    className={"rounded-3xl flex flex-row items-center justify-center self-center mb-[9px]" + " " + styleButton}
    onPress={onPress}>
    <Text className="text-white font-[600] text-lg w-[40%] pb-[5px] pt-[5px] text-center">{title}</Text>
  </TouchableOpacity>
  );
}

export default CustomizeButton;
