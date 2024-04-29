import * as STRINGS from "./strings";
import ICONS from "../../assets/svg/export/ExportSVG";
import * as COLORS from "../constants/colors";
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
    className: "h-44 flex flex-col justify-end",
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
    className: "pb-10 h-44",
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
    className: "h-44 flex flex-col justify-end",
  },
];
