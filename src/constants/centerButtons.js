import * as STRINGS from "./strings";
import ICONS from "../../assets/svg/export/ExportSVG";
import * as COLORS from "../constants/colors";
import * as SCREENS_NAME from "../constants/screensName";
export const centerButtons = [
  {
    icon: (
      <ICONS.MessageIcon
        size={60}
        color={COLORS.mainRgba}
        otherColor={COLORS.centerButtonRgba}
      />
    ),
    text: STRINGS.message,
    screen: SCREENS_NAME.message,
  },
  {
    icon: (
      <ICONS.RemindMedicineIcon
        size={60}
        color={COLORS.mainRgba}
        otherColor={COLORS.centerButtonRgba}
      />
    ),
    text: STRINGS.remindMedicine,
    screen: SCREENS_NAME.remindMedicine,
  },
  {
    icon: (
      <ICONS.LeaveRequestIcon
        size={60}
        color={COLORS.mainRgba}
        otherColor={COLORS.centerButtonRgba}
      />
    ),
    text: STRINGS.leaveRequest,
    screen: SCREENS_NAME.leaveRequest,
  },
];
