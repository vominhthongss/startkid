import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const NestCameraOutdoorIcon = ({size=24, color="#D9D9D9"}) => {
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
          d="M14.075 20.25a.988.988 0 01-.688.363.966.966 0 01-.737-.238l-3.825-3.2a5.963 5.963 0 01-1.8-2.55 5.856 5.856 0 01-.275-3.075l-1.4-1.175A1.005 1.005 0 015.225 9H4v2c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 012 13V3c.55 0 1.02.196 1.413.587C3.804 3.98 4 4.45 4 5v2h2.875l1.55-1.875a.988.988 0 01.688-.362A.966.966 0 019.85 5l1.375 1.15a5.806 5.806 0 013.1-.3 5.902 5.902 0 012.825 1.325l3.825 3.2a.988.988 0 01.362.688.891.891 0 01-.237.712l-7.025 8.475zm-.9-2.075l5.775-6.925-3.1-2.55a3.58 3.58 0 00-2.387-.825 7.16 7.16 0 00-2.613.55l-1.525-1.25-1.925 2.3 1.5 1.25c-.2.9-.225 1.796-.075 2.688.15.891.575 1.629 1.275 2.212l3.075 2.55z"
          fill="#5F5F5F"
        />
      </G>
    </Svg>
  )
}