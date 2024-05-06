import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";

const FacebookIcon = ({ size, color }) => (
  <Svg
  style={{}}
    width={size}
    height={size}
    viewBox="0 0 65 60"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">

    <Path
      d="M40.1348 35.0625H35.0078V50.375H28.1719V35.0625H22.5664V28.7734H28.1719V23.9199C28.1719 18.4512 31.4531 15.375 36.4434 15.375C38.8359 15.375 41.3652 15.8535 41.3652 15.8535V21.2539H38.5625C35.8281 21.2539 35.0078 22.8945 35.0078 24.6719V28.7734H41.0918L40.1348 35.0625Z"
      fill={`rgba(${color},1)`}
    />
    <Circle
      cx="32.5"
      cy="30.5"
      r="30.5"
      fill={`rgba(${color},0.1)`}
    />
  </Svg>


);

export default FacebookIcon;

