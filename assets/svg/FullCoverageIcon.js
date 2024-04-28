import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const FullCoverageIcon = ({size=24, color="#D9D9D9"}) => {
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
        <Path fill={color} d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M4 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 012 19V7h2v12h15v2H4zm4-4c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 016 15V3h17v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0121 17H8zm0-2h13V5H8v10zm2-3h4V7h-4v5zm5 0h4v-2h-4v2zm0-3h4V7h-4v2z"
          fill="#5F5F5F"
        />
      </G>
    </Svg>
  )
}