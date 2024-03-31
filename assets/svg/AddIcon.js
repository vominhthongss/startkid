import * as React from "react";
import Svg, { G, Circle, Mask, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AddIcon = ({ size, color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ alignSelf: "center" }}
  >
    <G filter="url(#a)">
      <Circle cx={26.5} cy={24.5} r={22.5} fill="#fff" />
    </G>
    <Mask
      id="b"
      width={30}
      height={30}
      x={12}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M12 5h30v30H12z" />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#0A6843"
        d="M26.375 25.322H19.5v-1.257h6.875V17.15h1.25v6.914H34.5v1.257h-6.875v6.913h-1.25v-6.913Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default AddIcon;
