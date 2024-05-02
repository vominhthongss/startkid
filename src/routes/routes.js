import MainTabScreen from "../screens/MainTab/MainTabScreen";
import { screenChildOption, screenParentOption } from "../constants/options";
import * as SCREENS_NAME from "../constants/screensName";
import LeaveRequestScreen from "../screens/LeaveRequest/LeaveRequestScreen";

export const mainTab = {
  name: SCREENS_NAME.mainTab,
  component: MainTabScreen,
  options: screenParentOption,
};
export const leaveRequest = {
  name: SCREENS_NAME.leaveRequest,
  component: LeaveRequestScreen,
  options: screenChildOption(SCREENS_NAME.leaveRequest),
};
