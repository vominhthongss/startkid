import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";

const CommentIcon = ({ size, color }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx="30.5" cy="30.5" r="30.5" fill={`rgba(${color},0.1)`} />
    <Mask
      id="mask0_761_1304"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="13"
      y="14"
      width="35"
      height="35">
      <Rect x="13" y="14" width="35" height="35" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_761_1304)">
      <Path
        d="M15.6203 40.1412V36.805H18.938V40.1412H15.6203ZM15.6203 33.872V30.5358H18.938V33.872H15.6203ZM15.6203 27.6029V24.2666H18.938V27.6029H15.6203ZM22.0203 40.1412V36.805H27.6618V40.1412H22.0203ZM22.0203 33.872V30.5358H40.7519V33.872H22.0203ZM22.0203 27.6029V24.2666H40.7519V27.6029H22.0203ZM36.6179 45.6476L30.4548 39.4502L32.7509 37.1413L36.6179 41.0298L44.561 33.0423L46.8381 35.3879L36.6179 45.6476Z"
        fill={`rgba(${color},1)`}
      />
    </G>
  </Svg>
);

export default CommentIcon;
