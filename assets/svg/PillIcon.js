import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const PillIcon = ({size=24, color="#D9D9D9"}) => {
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
          d="M8.625 21c-1.567 0-2.896-.546-3.987-1.637C3.546 18.27 3 16.942 3 15.375A5.585 5.585 0 014.65 11.4l6.75-6.75A5.585 5.585 0 0115.375 3c1.567 0 2.896.546 3.988 1.638C20.454 5.729 21 7.058 21 8.625a5.585 5.585 0 01-1.65 3.975l-6.75 6.75A5.585 5.585 0 018.625 21zm6.65-7.15l2.675-2.65A3.677 3.677 0 0019 8.625c0-1-.354-1.854-1.063-2.563A3.492 3.492 0 0015.376 5 3.677 3.677 0 0012.8 6.05l-2.65 2.675 5.125 5.125zM8.625 19a3.677 3.677 0 002.575-1.05l2.65-2.675-5.125-5.125L6.05 12.8A3.677 3.677 0 005 15.375c0 1 .354 1.854 1.063 2.563A3.492 3.492 0 008.624 19z"
          fill="#5F5F5F"
        />
      </G>
    </Svg>
  )
}