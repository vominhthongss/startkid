import * as STRINGS from "./strings";
import ICONS from "../../assets/svg/export/ExportSVG";
import * as COLORS from "../constants/colors";
import * as SCREENS_NAME from "../constants/screensName";
import { View } from "react-native";
export const learnMore = [
  {
    icon: <ICONS.MessageIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.message,
    screen: SCREENS_NAME.message,
  },
  {
    icon: <ICONS.RemindMedicineIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.remindMedicine,
    screen: SCREENS_NAME.remindMedicine,
  },
  {
    icon: <ICONS.LeaveRequestIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.leaveRequest,
    screen: SCREENS_NAME.leaveRequest,
  },
  {
    icon: <ICONS.PictureIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.picture,
  },
  {
    icon: <ICONS.CommentIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.com,
    screen: SCREENS_NAME.feedBack,
  },
  {
    icon: <ICONS.AttendIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.attend,
  },
  {
    icon: <ICONS.FeeIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.fee,
  },
  {
    icon: <ICONS.LearningIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.learning,
  },
  {
    icon: <ICONS.MenuIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.menu,
  },
  {
    icon: <ICONS.VideoIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.video,
  },
  {
    icon: <ICONS.CameraIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.camera,
  },
  {
    icon: <ICONS.NewsIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.news,
  },
  {
    icon: <ICONS.FacebookIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.facebook,
  },
  {
    icon: <ICONS.BabyIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.baby,
  },
  {
    icon: <ICONS.FeeIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.fee,
  },
  {
    icon: <View className="w-[60px]"></View>,
    text: "",
  },
];
