import React from "react";
import Svg, { Circle, G, Mask, Path, Rect } from "react-native-svg";

const ThumbMessageIcon = ({ size }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx="35" cy="35" r="35" fill="#E3FFF4" />
    <Circle
      cx="60.5"
      cy="59.5"
      r="7"
      fill="#EA3637"
      stroke="white"
      stroke-width="3"
    />
    <Mask
      id="mask0_1285_2013"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="15"
      y="16"
      width="40"
      height="40">
      <Rect x="15" y="16" width="40" height="40" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_1285_2013)">
      <Path
        d="M26.6944 46.0007C26.2778 46.0007 25.8912 45.8178 25.5347 45.452C25.1782 45.0863 25 44.6951 25 44.2784V40.4451H46.1111V26.0007H50C50.4166 26.0007 50.7986 26.1835 51.1458 26.5493C51.493 26.915 51.6666 27.3155 51.6666 27.7507V52.6395L45.0278 46.0007H26.6944ZM18.3333 44.334V21.0562C18.3333 20.6395 18.5069 20.2483 18.8541 19.8826C19.2014 19.5169 19.5833 19.334 20 19.334H41.6389C42.0741 19.334 42.4653 19.5122 42.8125 19.8687C43.1597 20.2252 43.3333 20.621 43.3333 21.0562V35.9451C43.3333 36.3618 43.1597 36.753 42.8125 37.1187C42.4653 37.4844 42.0741 37.6673 41.6389 37.6673H25L18.3333 44.334ZM40.5556 34.8896V22.1117H21.1111V34.8896H40.5556Z"
        fill="#0A6843"
      />
    </G>
  </Svg>
);

export default ThumbMessageIcon;
