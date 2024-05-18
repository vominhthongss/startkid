import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";
const HomePinIcon = ({ size, color }) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Mask
      id="mask0_227_1125"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24">
      <Rect
        width="24"
        height="24"
        fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_227_1125)">
      <Path d="M9 13H11V10.25H13V13H15V8.25L12 6.25L9 8.25V13ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
        fill="#EA3637" />
    </G>
  </Svg>

);

export default HomePinIcon;