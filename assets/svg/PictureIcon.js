import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";

const PictureIcon = ({ size, color }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx="30.5" cy="30.5" r="30.5" fill={`rgba(${color},0.1)`} />
    <Mask
      id="mask0_9_384"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="13"
      y="13"
      width="35"
      height="35">
      <Rect x="13" y="13" width="35" height="35" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_9_384)">
      <Path
        d="M26.3255 34.7464H40.9089L35.8776 28.1473L32.5234 32.5467L30.263 29.6137L26.3255 34.7464ZM24.9718 40.9103C24.0535 40.9103 23.2709 40.5852 22.6242 39.9348C21.9775 39.2845 21.6541 38.4976 21.6541 37.5741V20.1869C21.6541 19.2634 21.9775 18.4765 22.6242 17.8262C23.2709 17.1758 24.0535 16.8506 24.9718 16.8506H42.2626C43.1809 16.8506 43.9634 17.1758 44.6102 17.8262C45.2569 18.4765 45.5803 19.2634 45.5803 20.1869V37.5741C45.5803 38.4976 45.2569 39.2845 44.6102 39.9348C43.9634 40.5852 43.1809 40.9103 42.2626 40.9103H24.9718ZM18.7375 47.1795C17.8191 47.1795 17.0366 46.8543 16.3898 46.204C15.7431 45.5537 15.4197 44.7667 15.4197 43.8433V23.1198H18.7375V43.8433H39.3459V47.1795H18.7375Z"
        fill={`rgba(${color},1)`}
      />
    </G>
  </Svg>
);

export default PictureIcon;
