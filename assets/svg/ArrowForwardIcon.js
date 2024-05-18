import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const ArrowForwardIcon  = ({ size=26, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={size}
        height={size}
      >
        <Path fill="#D9D9D9" d="M0 0H26V26H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M17.523 14.083H4.333v-2.166h13.19L11.456 5.85 13 4.333 21.667 13 13 21.667l-1.544-1.517 6.067-6.067z"
          fill="#999"
        />
      </G>
    </Svg>
  )
}