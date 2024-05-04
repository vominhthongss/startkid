import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const SendIcon = ({ size=20, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
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
        <Path fill="#D9D9D9" d="M0 0H20V20H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M2.5 16.666V3.333L18.333 10 2.5 16.666zm1.667-2.5L14.042 10 4.167 5.833V8.75l5 1.25-5 1.25v2.916z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}