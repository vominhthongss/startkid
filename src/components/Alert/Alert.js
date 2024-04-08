import { View } from "react-native";
import AlertIcon from "../../../assets/svg/AlertIcon";

function Alert({size, color}) {
  return <View className="pr-5">
    <AlertIcon size={size} color={color}/>
  </View>;
}

export default Alert;
