import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const BackIcon = ({ size, color="#fff" }) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={22}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={0.4800000000000001}
      stroke="#fff"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.707 4.293a1 1 0 010 1.414L6.414 11H20a1 1 0 110 2H6.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
        fill={color}
      />
    </Svg>
  )
}