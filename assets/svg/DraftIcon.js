import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const DraftIcon = ({size=24, color="#D9D9D9"}) => {
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
          d="M12 1l9.05 5.4c.3.183.533.433.7.75.167.317.25.65.25 1V19c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0120 21H4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 012 19V8.15c0-.35.083-.683.25-1 .167-.317.4-.567.7-.75L12 1zm0 11.65L19.8 8 12 3.35 4.2 8l7.8 4.65zM12 15l-8-4.8V19h16v-8.8L12 15z"
          fill="#5F5F5F"
        />
      </G>
    </Svg>
  )
}