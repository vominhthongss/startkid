import MainTabScreen from "../screens/MainTab/MainTabScreen";
import { screenChildOption, screenParentOption } from "../constants/options";
import LoginScreen from "../screens/Login/LoginScreen";
import * as SCREENS_NAME from "../constants/screensName";
import LeaveRequestScreen from "../screens/LeaveRequest/LeaveRequestScreen";
import LeaveRequestDetailScreen from "../screens/LeaveRequest/LeaveRequestDetailScreen";

export const mainTab = {
  name: SCREENS_NAME.mainTab,
  component: MainTabScreen,
  options: screenParentOption,
};
export const leaveRequest = {
  name: SCREENS_NAME.leaveRequest,
  component: LeaveRequestScreen,
  options: screenChildOption(SCREENS_NAME.leaveRequest),
}
export const leaveRequestDetail = {
  name: SCREENS_NAME.leaveRequestDetail,
  component: LeaveRequestDetailScreen,
  options: screenChildOption(SCREENS_NAME.leaveRequestDetail),
}
export const login = {
  name: SCREENS_NAME.login,
  component: LoginScreen,
  options: screenParentOption,
};
