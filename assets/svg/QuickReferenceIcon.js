import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const QuickReferenceIcon = ({size=24, color="#D9D9D9"}) => {
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
          d="M16.5 20h1v-4h-1v4zm.5-5a.48.48 0 00.35-.15.48.48 0 000-.7.48.48 0 00-.7 0 .48.48 0 000 .7c.1.1.217.15.35.15zM7 14h3.675c.183-.383.396-.742.637-1.075.242-.333.513-.642.813-.925H7v2zm0 4h3.075a6.732 6.732 0 010-2H7v2zm-2 4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 013 20V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 015 2h8l6 6v2.3a6.373 6.373 0 00-.975-.225A6.901 6.901 0 0017 10V9h-5V4H5v16h5.675c.183.383.396.742.637 1.075.242.333.513.642.813.925H5zm12-10c1.383 0 2.563.488 3.538 1.463C21.512 14.438 22 15.617 22 17s-.488 2.563-1.462 3.538C19.562 21.512 18.383 22 17 22s-2.563-.488-3.537-1.462C12.488 19.562 12 18.383 12 17s.488-2.563 1.463-3.537C14.438 12.488 15.617 12 17 12z"
          fill="#5F5F5F"
        />
      </G>
    </Svg>
  )
}