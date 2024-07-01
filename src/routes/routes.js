import MainTabScreen from "../screens/MainTab/MainTabScreen";
import { screenChildOption, screenParentOption } from "../constants/options";
import LoginScreen from "../screens/Login/LoginScreen";
import * as SCREENS_NAME from "../constants/screensName";
import LeaveRequestScreen from "../screens/LeaveRequest/LeaveRequestScreen";
import LeaveRequestDetailScreen from "../screens/LeaveRequest/LeaveRequestDetailScreen";
import AddLeaveRequestScreen from "../screens/LeaveRequest/AddLeaveRequest";
import BackButton from "../components/BackButton/BackButton";
import PickDropScreen from "../screens/PickDrop/PickDropScreen";
import { ChangePasswordScreen } from "../screens/changePassword/ChangePasswordScreen";
import MessageScreen from "../screens/Message/MessageScreen";
import MessageDetailScreen from "../screens/Message/MessageDetailScreen";
import AddMessageScreen from "../screens/Message/AddMessageScreen";
import RemindMedicineScreen from "../screens/RemindMedicine/RemindMedicineScreen";
import RemindMedicineDetailScreen from "../screens/RemindMedicine/RemindMedicineDetailScreen";
import FeedBackScreen from "../screens/FeedBack/FeedBackScreen";
import FeedBackDetailScreen from "../screens/FeedBack/FeedBackDetailScreen";
import AddFeedBackScreen from "../screens/FeedBack/AddFeedBackRequest";
import AddRemindMedicineScreen from "../screens/RemindMedicine/AddRemindMedicineScreen";

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
export const leaveRequestDetail = {
  name: SCREENS_NAME.leaveRequestDetail,
  component: LeaveRequestDetailScreen,
  options: screenChildOption(SCREENS_NAME.leaveRequestDetail),
};
export const addLeaveRequest = {
  name: SCREENS_NAME.addLeaveRequest,
  component: AddLeaveRequestScreen,
  options: screenChildOption(SCREENS_NAME.addLeaveRequest, () => (
    <BackButton />
  )),
};
export const message = {
  name: SCREENS_NAME.message,
  component: MessageScreen,
  options: screenChildOption(SCREENS_NAME.message),
};
export const messageDetail = {
  name: SCREENS_NAME.messageDetail,
  component: MessageDetailScreen,
  options: screenChildOption(SCREENS_NAME.messageDetail),
};
export const addMessage = {
  name: SCREENS_NAME.addMessage,
  component: AddMessageScreen,
  options: screenChildOption(SCREENS_NAME.addMessage, () => <BackButton />),
};
export const remindMedicine = {
  name: SCREENS_NAME.remindMedicine,
  component: RemindMedicineScreen,
  options: screenChildOption(SCREENS_NAME.remindMedicine),
};
export const remindMedicineDetail = {
  name: SCREENS_NAME.remindMedicineDetail,
  component: RemindMedicineDetailScreen,
  options: screenChildOption(SCREENS_NAME.remindMedicineDetail),
};
export const addRemindMedicine = {
  name: SCREENS_NAME.addRemindMedicine,
  component: AddRemindMedicineScreen,
  options: screenChildOption(SCREENS_NAME.addRemindMedicine, () => (
    <BackButton />
  )),
};
export const feedBack = {
  name: SCREENS_NAME.feedBack,
  component: FeedBackScreen,
  options: screenChildOption(SCREENS_NAME.feedBack),
};
export const feedBackDetail = {
  name: SCREENS_NAME.feedBackDetail,
  component: FeedBackDetailScreen,
  options: screenChildOption(SCREENS_NAME.feedBackDetail),
};
export const addFeedBack = {
  name: SCREENS_NAME.addFeedBack,
  component: AddFeedBackScreen,
  options: screenChildOption(SCREENS_NAME.addFeedBack, () => <BackButton />),
};
export const login = {
  name: SCREENS_NAME.login,
  component: LoginScreen,
  options: screenParentOption,
};
export const pickDrop = {
  name: SCREENS_NAME.pickDrop,
  component: PickDropScreen,
  options: screenChildOption(SCREENS_NAME.pickDrop),
};
export const changePasswordScreen = {
  name: SCREENS_NAME.changePassword,
  component: ChangePasswordScreen,
  options: screenChildOption(SCREENS_NAME.changePassword, () => <BackButton />),
};
