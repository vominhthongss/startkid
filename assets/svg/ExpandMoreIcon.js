import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const ExpandMoreIcon = ({ size=24, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
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
        <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M12 15.375l-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4-6 6z"
          fill="#0A6843"
        />
      </G>
    </Svg>
  )
}