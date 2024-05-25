import MainTabScreen from "../screens/MainTab/MainTabScreen";
import { screenChildOption, screenParentOption } from "../constants/options";
import LoginScreen from "../screens/Login/LoginScreen";
import * as SCREENS_NAME from "../constants/screensName";
import LeaveRequestScreen from "../screens/LeaveRequest/LeaveRequestScreen";
import LeaveRequestDetailScreen from "../screens/LeaveRequest/LeaveRequestDetailScreen";
import AddLeaveRequestScreen from "../screens/LeaveRequest/AddLeaveRequest";
import BackButton from "../components/BackButton/BackButton";
import PickDropScreen from "../screens/PickDrop/PickDropScreen";

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
export const addLeaveRequest = {
  name: SCREENS_NAME.addLeaveRequest,
  component: AddLeaveRequestScreen,
  options: screenChildOption(SCREENS_NAME.addLeaveRequest, () => <BackButton />),
}
export const login = {
  name: SCREENS_NAME.login,
  component: LoginScreen,
  options: screenParentOption,
};
export const pickDrop = {
  name: SCREENS_NAME.pickDrop,
  component: PickDropScreen,
  options: screenChildOption(SCREENS_NAME.pickDrop),
}
