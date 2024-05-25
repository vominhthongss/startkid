import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";

const SendIcon_2 = ({ size, color }) => (
  <Svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle
      cx="17.5"
      cy="17.5"
      r="17.5"
      fill="#E3FFF4" />
    <Mask
      id="mask0_270_1513"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="7"
      y="5"
      width="24"
      height="24">
      <Rect x="7" y="5" width="24" height="24" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_270_1513)">
      <Path d="M26.8 17.925L11.4 24.425C11.0667 24.5583 10.75 24.5291 10.45 24.3375C10.15 24.1458 10 23.8666 10 23.5V10.5C10 10.1333 10.15 9.85414 10.45 9.66247C10.75 9.4708 11.0667 9.44164 11.4 9.57497L26.8 16.075C27.2167 16.2583 27.425 16.5666 27.425 17C27.425 17.4333 27.2167 17.7416 26.8 17.925ZM12 22L23.85 17L12 12V15.5L18 17L12 18.5V22Z"
        fill="#0A6843" />
    </G>
  </Svg>

);

export default SendIcon_2;