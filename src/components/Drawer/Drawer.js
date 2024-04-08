import { TouchableOpacity, View } from "react-native";
import DrawerIcon from "../../../assets/svg/DrawerIcon";

function Drawer({ size, color }) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View className="pl-5">
        <DrawerIcon size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
}

export default Drawer;
