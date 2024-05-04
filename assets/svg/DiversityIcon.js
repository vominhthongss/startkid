import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const DiversityIcon = ({size=24, color="#D9D9D9"}) => {
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
          d="M.95 13.3c-.3-.6-.533-1.208-.7-1.825A7.156 7.156 0 010 9.6c0-1.867.633-3.433 1.9-4.7C3.167 3.633 4.733 3 6.6 3c1.05 0 2.05.22 3 .663A6.798 6.798 0 0112 5.5a6.798 6.798 0 012.4-1.837 7.033 7.033 0 013-.663c1.867 0 3.433.633 4.7 1.9C23.367 6.167 24 7.733 24 9.6c0 .633-.083 1.258-.25 1.875a9.786 9.786 0 01-.7 1.825 4.1 4.1 0 00-.65-.85 2.92 2.92 0 00-.875-.6c.15-.383.267-.758.35-1.125.083-.367.125-.742.125-1.125 0-1.3-.442-2.392-1.325-3.275S18.7 5 17.4 5c-1.35 0-2.387.37-3.112 1.112A60.101 60.101 0 0012 8.6a47.96 47.96 0 00-2.287-2.5C8.988 5.367 7.95 5 6.6 5c-1.3 0-2.392.442-3.275 1.325S2 8.3 2 9.6c0 .383.042.758.125 1.125.083.367.2.742.35 1.125a2.92 2.92 0 00-.875.6 4.1 4.1 0 00-.65.85zM0 22v-1.575c0-.733.37-1.32 1.113-1.762C1.853 18.22 2.817 18 4 18c.217 0 .425.004.625.012.2.009.392.03.575.063a3.787 3.787 0 00-.525 1.075 4.186 4.186 0 00-.175 1.225V22H0zm6 0v-1.625c0-1.083.554-1.958 1.662-2.625 1.109-.667 2.555-1 4.338-1 1.8 0 3.25.333 4.35 1 1.1.667 1.65 1.542 1.65 2.625V22H6zm13.5 0v-1.625c0-.433-.054-.842-.163-1.225a3.913 3.913 0 00-.487-1.075c.183-.033.37-.054.563-.063.191-.008.387-.012.587-.012 1.2 0 2.167.22 2.9.663.733.441 1.1 1.029 1.1 1.762V22h-4.5zM12 18.75c-.95 0-1.8.125-2.55.375-.75.25-1.192.542-1.325.875H15.9c-.15-.333-.596-.625-1.338-.875-.741-.25-1.595-.375-2.562-.375zM4 17c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 012 15c0-.567.196-1.042.587-1.425A1.947 1.947 0 014 13c.567 0 1.042.192 1.425.575.383.383.575.858.575 1.425 0 .55-.192 1.02-.575 1.413A1.914 1.914 0 014 17zm16 0c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0118 15c0-.567.196-1.042.587-1.425A1.947 1.947 0 0120 13c.567 0 1.042.192 1.425.575.383.383.575.858.575 1.425 0 .55-.192 1.02-.575 1.413A1.914 1.914 0 0120 17zm-8-1a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 019 13c0-.85.292-1.563.875-2.137C10.458 10.288 11.167 10 12 10c.85 0 1.563.287 2.137.863.575.575.863 1.287.863 2.137 0 .833-.287 1.542-.863 2.125-.575.583-1.287.875-2.137.875zm0-4a.968.968 0 00-.713.287A.968.968 0 0011 13c0 .283.096.52.287.713.192.191.43.287.713.287s.52-.096.713-.287A.968.968 0 0013 13a.968.968 0 00-.287-.713A.968.968 0 0012 12z"
          fill="#EA3637"
        />
      </G>
    </Svg>
  )
}