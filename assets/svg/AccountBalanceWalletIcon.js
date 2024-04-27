import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const  AccountBalanceWalletIcon = ({size=24, color="#D9D9D9"}) => {
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
          d="M16 13.5c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075-.283-.283-.642-.425-1.075-.425-.433 0-.792.142-1.075.425-.283.283-.425.642-.425 1.075 0 .433.142.792.425 1.075.283.283.642.425 1.075.425zM5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 013 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 015 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v2.5h-2V5H5v14h14v-2.5h2V19c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0119 21H5zm8-4c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0111 15V9c0-.55.196-1.02.588-1.412A1.926 1.926 0 0113 7h7c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v6c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0120 17h-7zm7-2V9h-7v6h7z"
          fill="#5F5F5F"
        />
      </G>
    </Svg>
  )
}
