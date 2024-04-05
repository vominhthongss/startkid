import * as React from "react"
import Svg, { G, Circle, Mask, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AddIcon = ({ size, color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={53}
    height={49}
    fill="none"
  >
    <G filter="url(#a)">
      <Circle cx={26.5} cy={26.5} r={22.5} fill="#fff" />
    </G>
    <Mask
      id="b"
      width={30}
      height={30}
      x={12}
      y={12}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M12 12h30v30H12z" />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill={color}
        d="M26.375 25.322H19.5v-1.257h6.875V17.15h1.25v6.914H34.5v1.257h-6.875v6.913h-1.25v-6.913Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default AddIcon
