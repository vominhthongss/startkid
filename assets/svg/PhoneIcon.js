import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const PhoneIcon = ({size=24, color}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.316 16.96l-5.25-2.25a1.125 1.125 0 00-1.313.323l-2.325 2.84a17.375 17.375 0 01-8.306-8.306l2.84-2.325a1.122 1.122 0 00.324-1.312L7.036.68A1.133 1.133 0 005.747.028L.872 1.153A1.125 1.125 0 000 2.25C0 14.273 9.745 24 21.75 24a1.125 1.125 0 001.097-.872l1.125-4.875a1.139 1.139 0 00-.656-1.294z"
        fill="#0A6843"
        fillOpacity={0.5}
      />
    </Svg>
  )
}