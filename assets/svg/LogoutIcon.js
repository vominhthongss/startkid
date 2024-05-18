import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const LogoutIcon = ({ size = 24, color = "#D9D9D9" }) => {
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
          d="M5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 013 19v-4h2v4h14V5H5v4H3V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 015 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0119 21H5zm5.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45 10.5 7l5 5-5 5z"
          fill={`rgba(${color},1)`}
        />
      </G>
    </Svg>
  )
}

export default LogoutIcon;