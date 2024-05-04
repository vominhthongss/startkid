import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const LockIcon = ({size=24, color}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.28 7.53V6.28C16.28 3.58 15.63 0 10 0S3.72 3.58 3.72 6.28v1.25C.92 7.88 0 9.3 0 12.79v1.86C0 18.75 1.25 20 5.35 20h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-3.49-.92-4.91-3.72-5.26zM10 16.74c-1.67 0-3.02-1.36-3.02-3.02 0-1.67 1.36-3.02 3.02-3.02a3.03 3.03 0 013.02 3.02c0 1.67-1.35 3.02-3.02 3.02zm-4.65-9.3h-.23V6.28c0-2.93.83-4.88 4.88-4.88s4.88 1.95 4.88 4.88v1.17H5.35v-.01z"
        fill="#0A6843"
        fillOpacity={0.5}
      />
    </Svg>
  )
}