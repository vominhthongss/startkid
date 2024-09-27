import * as STRINGS from "./strings";
import ICONS from "../../assets/svg/export/ExportSVG";
import * as SCREENS_NAME from "../constants/screensName";

export const drawerItemList = [
  {
    drawerItemTitle: STRINGS.parentDiary,
    drawerItemDetailList: [
      {
        icon: <ICONS.SMSIcon></ICONS.SMSIcon>,
        text: STRINGS.messageBeginningDay,
        screen: SCREENS_NAME.message,
      },
      {
        icon: <ICONS.PillIcon></ICONS.PillIcon>,
        text: STRINGS.administerMedicine,
        screen: SCREENS_NAME.remindMedicine,
      },
      {
        icon: <ICONS.CalendarIcon></ICONS.CalendarIcon>,
        text: STRINGS.leave,
        screen: SCREENS_NAME.leaveRequest,
      },
      {
        icon: <ICONS.DraftIcon></ICONS.DraftIcon>,
        text: STRINGS.parentsFeedback,
        screen: SCREENS_NAME.feedBack,
      },
    ],
  },
  {
    drawerItemTitle: STRINGS.informationManage,
    drawerItemDetailList: [
      {
        icon: <ICONS.EditNoteIcon></ICONS.EditNoteIcon>,
        text: STRINGS.comment,
        screen: "",
      },
      {
        icon: <ICONS.DateRangeIcon></ICONS.DateRangeIcon>,
        text: STRINGS.schedule,
        screen: "",
      },
      {
        icon: <ICONS.RestaurantMenuIcon></ICONS.RestaurantMenuIcon>,
        text: STRINGS.menu,
        screen: "",
      },
      {
        icon: <ICONS.AssignmentIndIcon></ICONS.AssignmentIndIcon>,
        text: STRINGS.attendance,
        screen: "",
      },
    ],
  },
  {
    drawerItemTitle: STRINGS.cameraUtilitiesServices,
    drawerItemDetailList: [
      {
        icon: <ICONS.NestCameraOutdoorIcon></ICONS.NestCameraOutdoorIcon>,
        text: STRINGS.camera,
        screen: "",
      },
      {
        icon: <ICONS.AccountBalanceWalletIcon></ICONS.AccountBalanceWalletIcon>,
        text: STRINGS.tuition,
        screen: "",
      },
      {
        icon: <ICONS.FullCoverageIcon></ICONS.FullCoverageIcon>,
        text: STRINGS.news,
        screen: "",
      },
      {
        icon: <ICONS.RuleSettingIcon></ICONS.RuleSettingIcon>,
        text: STRINGS.customizeFunctions,
        screen: "",
      },
    ],
  },
  {
    drawerItemTitle: STRINGS.accountInformation,
    drawerItemDetailList: [
      {
        icon: <ICONS.DeveloperGuideIcon></ICONS.DeveloperGuideIcon>,
        text: STRINGS.userManual,
        screen: "",
      },
      {
        icon: <ICONS.SupportAgentIcon></ICONS.SupportAgentIcon>,
        text: STRINGS.onlineProfile,
        screen: "",
      },
      {
        icon: <ICONS.QuickReferenceIcon></ICONS.QuickReferenceIcon>,
        text: STRINGS.termsInformation,
        screen: "",
      },
      {
        icon: <ICONS.ManageAccountIcon></ICONS.ManageAccountIcon>,
        text: STRINGS.accountDrawer,
        screen: "",
      },
    ],
  },
];
