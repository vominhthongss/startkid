import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";
const InstructIcon = ({ size, color }) => (

  <Svg
    width={size}
    height={size}
    viewBox="5 0 60 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx="35.5" cy="30.5" r="30.5" fill={`rgba(${color},0.1)`} />
    <Mask
      id="mask0_227_1140"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="20"
      y="14"
      width="35"
      height="35">
      <Rect x="20" y="14" width="35" height="35" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_227_1140)">
      <Path
        d="M26.25 41.25C25.5625 41.25 24.974 41.0052 24.4844 40.5156C23.9948 40.026 23.75 39.4375 23.75 38.75V21.25C23.75 20.5625 23.9948 19.974 24.4844 19.4844C24.974 18.9948 25.5625 18.75 26.25 18.75H43.75C44.4375 18.75 45.026 18.9948 45.5156 19.4844C46.0052 19.974 46.25 20.5625 46.25 21.25V38.75C46.25 39.4375 46.0052 40.026 45.5156 40.5156C45.026 41.0052 44.4375 41.25 43.75 41.25H26.25ZM26.25 21.25V38.75H43.75V21.25H41.25V28.9062C41.25 29.1562 41.1458 29.3385 40.9375 29.4531C40.7292 29.5677 40.5208 29.5625 40.3125 29.4375L38.7813 28.5C38.5729 28.375 38.3542 28.3125 38.125 28.3125C37.8958 28.3125 37.6771 28.375 37.4688 28.5L35.9375 29.4375C35.7292 29.5625 35.5208 29.5677 35.3125 29.4531C35.1042 29.3385 35 29.1562 35 28.9062V21.25H26.25Z"
        fill={`rgba(${color},1)`}
      />
    </G>
  </Svg>

);

export default InstructIcon;
