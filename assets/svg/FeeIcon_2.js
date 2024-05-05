import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";

const FeeIcon_2 = ({ size, color }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Mask
      id="mask0_16_423"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="13"
      y="14"
      width="35"
      height="35">
      <Rect x="13" y="14" width="35" height="35" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_16_423)">
      <Path
        d="M30.5 15.1881L43.7677 23.1067C44.2982 23.4264 44.6995 23.8476 44.9716 24.3705C45.2437 24.8933 45.3798 25.4564 45.3798 26.0598V41.6822C45.3798 42.6006 45.0564 43.3831 44.4097 44.0298C43.7629 44.6766 42.9804 44.9999 42.062 44.9999H18.938C18.0196 44.9999 17.2371 44.6766 16.5904 44.0298C15.9436 43.3831 15.6202 42.6006 15.6202 41.6822V26.0598C15.6202 25.4564 15.7563 24.8933 16.0284 24.3705C16.3006 23.8476 16.7019 23.4264 17.2324 23.1067L30.5 15.1881ZM30.5 32.4218L41.6919 25.7452L30.5 19.0686L19.3081 25.7452L30.5 32.4218ZM30.5 35.9971L18.938 29.0581V41.6822H42.062V29.0581L30.5 35.9971Z"
        fill={`rgba(${color},1)`}
      />
    </G>
  </Svg>
);

export default FeeIcon_2;
