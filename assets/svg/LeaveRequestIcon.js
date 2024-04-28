import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";

const LeaveRequestIcon = ({ size, color }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle
      cx="30.5"
      cy="30.5"
      r="30.5"
      fill={`rgba(${color},0.1)`}
    />
    <Mask
      id="mask0_9_372"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="13"
      y="14"
      width="35"
      height="35">
      <Rect x="13" y="14" width="35" height="35" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_9_372)">
      <Path
        d="M23.2083 36.0381V32.9737H37.7917V36.0381H23.2083ZM23.2083 41.8777V38.8133H33.4167V41.8777H23.2083ZM20.3963 47.9891C19.478 47.9891 18.6954 47.6639 18.0487 47.0135C17.4019 46.3632 17.0786 45.5763 17.0786 44.6528V24.3327C17.0786 23.4092 17.4019 22.6223 18.0487 21.972C18.6954 21.3216 19.478 20.9964 20.3963 20.9964H21.75V18.0635H24.8672V20.9964H36.1328V18.0635H39.25V20.9964H40.6037C41.522 20.9964 42.3046 21.3216 42.9513 21.972C43.5981 22.6223 43.9214 23.4092 43.9214 24.3327V44.6528C43.9214 45.5763 43.5981 46.3632 42.9513 47.0136C42.3046 47.6639 41.522 47.9891 40.6037 47.9891L20.3963 47.9891ZM20.3963 44.6528H40.6037V30.0933H20.3963V44.6528Z"
        fill={`rgba(${color},1)`}
      />
    </G>
  </Svg>
);

export default LeaveRequestIcon;
