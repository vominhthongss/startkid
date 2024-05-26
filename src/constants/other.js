import * as STRINGS from "./strings";
import ICONS from "../../assets/svg/export/ExportSVG";
import * as COLORS from "../constants/colors";
import * as SCREENS_NAME from "../constants/screensName";
export const other = [
  {
    icon: <ICONS.PickDropIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.pickDrop,
    screen: SCREENS_NAME.pickDrop,
  },
  {
    icon: <ICONS.InstructIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.instruct,
  },
  {
    icon: <ICONS.ChangePasswordIcon size={60} color={COLORS.mainRgba} />,
    text: STRINGS.changePassword,
    screen: SCREENS_NAME.changePassword,
  },
  {
    icon: <ICONS.LogOutIconn size={60} color={COLORS.mainRgba} />,
    text: STRINGS.logout,
  },

];
