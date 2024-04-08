import { TouchableOpacity, View } from "react-native";
import DrawerIcon from "../../../assets/svg/DrawerIcon";

import { useDispatch } from "react-redux";
import { toggleContentDrawer } from "../../store/contentDrawer/contentDrawerSlice";

function Drawer({ size, color }) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(toggleContentDrawer());
      }}
    >
      <View className="pl-5">
        <DrawerIcon size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
}

export default Drawer;
