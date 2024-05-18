import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const ImageIcon = ({ size=15, color }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
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
        <Path fill="#D9D9D9" d="M0 0H15V15H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M3.125 13.125c-.344 0-.638-.122-.883-.367a1.204 1.204 0 01-.367-.883v-8.75c0-.344.122-.638.367-.883s.54-.367.883-.367h8.75c.344 0 .638.122.883.367s.367.54.367.883v8.75c0 .344-.122.638-.367.883a1.204 1.204 0 01-.883.367h-8.75zm0-1.25h8.75v-8.75h-8.75v8.75zm.625-1.25h7.5L8.906 7.5 7.031 10 5.625 8.125l-1.875 2.5z"
          fill="#0A6843"
        />
      </G>
    </Svg>
  )
}