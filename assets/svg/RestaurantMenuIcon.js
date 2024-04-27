import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const RestaurantMenuIcon = ({size=24, color="#D9D9D9"}) => {
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
          d="M4.375 21l-1.4-1.4 10.25-10.25c-.3-.7-.342-1.492-.125-2.375.217-.883.692-1.675 1.425-2.375.883-.883 1.867-1.4 2.95-1.55 1.083-.15 1.967.117 2.65.8.683.683.95 1.567.8 2.65-.15 1.083-.667 2.067-1.55 2.95-.7.733-1.492 1.208-2.375 1.425-.883.217-1.675.175-2.375-.125L13.375 12l7.6 7.6-1.4 1.4-7.6-7.55-7.6 7.55zm2.95-8.55l-3-3c-.9-.9-1.35-1.975-1.35-3.225S3.425 3.9 4.325 3l6.2 6.25-3.2 3.2z"
          fill="#5F5F5F"
        />
      </G>
    </Svg>
  )
}