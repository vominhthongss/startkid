import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as NAVIGATIONS from "../../components/navigations/navigations";
import * as SCREENS_NAME from "../../constants/screensName";
import * as SIZES from "../../constants/size";
import { Text, TouchableOpacity, View } from "react-native";
import * as COLORS from "../../constants/colors";
import AddIcon from "../../../assets/svg/AddIcon";
const Tab = createBottomTabNavigator();
function MainTabScreen() {
  const navigations = Object.values(NAVIGATIONS)
    .sort((a, b) => a.index - b.index)
    .map((navigation, index) => {
      return (
        <Tab.Screen
          key={index}
          name={navigation.name}
          options={navigation.options}
          component={navigation.component}
        />
      );
    });
  return (
    <View className="flex flex-col justify-end h-full relative">
      <View className={`absolute shadow z-10 -ml-[30px] bottom-[28px] left-1/2 transform -translate-x-1/2`}>
        <TouchableOpacity onPress={()=>{}}>
          <AddIcon color={COLORS.main} />
        </TouchableOpacity>
      </View>
      <Tab.Navigator initialRouteName={SCREENS_NAME.home}>
        {navigations}
      </Tab.Navigator>
    </View>
  );
}

export default MainTabScreen;
