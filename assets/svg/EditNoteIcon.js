import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const EditNoteIcon = ({size=24, color="#D9D9D9"}) => {
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
          d="M12 21v-2.125l5.3-5.3 2.125 2.125-5.3 5.3H12zm-9-5v-2h7v2H3zm17.125-1L18 12.875l.725-.725a.948.948 0 01.7-.275c.283 0 .517.092.7.275l.725.725a.948.948 0 01.275.7.948.948 0 01-.275.7l-.725.725zM3 12v-2h11v2H3zm0-4V6h11v2H3z"
          fill="#5F5F5F"
        />
      </G>
    </Svg>
  )
}