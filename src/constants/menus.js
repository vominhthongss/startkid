import * as STRINGS from "./strings";
import ICONS from "../../assets/svg/export/ExportSVG";
import * as COLORS from "../constants/colors";
import * as SCREENS_NAME from "../constants/screensName";
export const menus = [
  {
    icon: <ICONS.MessageIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.message,
    screen: SCREENS_NAME.message,
  },
  {
    icon: <ICONS.RemindMedicineIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.remindMedicine,
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
    icon: <ICONS.LearnMoreIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.learMore,
    showSwipeUpDrawer: true,
  },
];
