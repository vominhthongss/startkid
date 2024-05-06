import React from "react";
import Svg, { Path, Circle, Mask, G, Rect } from "react-native-svg";

const CameraIcon = ({ size, color }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Mask
      id="mask0_19_289"
      style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="13"
      y="14"
      width="35"
      height="35">
      <Rect x="13" y="14" width="35" height="35" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_19_289)">
      <Path
        d="M43.1146 24.2084C43.1146 22.3125 42.4584 20.7084 41.1459 19.3959C39.8334 18.0834 38.2292 17.4271 36.3334 17.4271V15.4584C38.7639 15.4584 40.8299 16.3091 42.5313 18.0105C44.2327 19.7118 45.0834 21.7778 45.0834 24.2084H43.1146ZM39.25 24.2084C39.25 23.4063 38.9644 22.7197 38.3932 22.1485C37.8221 21.5773 37.1354 21.2917 36.3334 21.2917V19.323C37.6702 19.323 38.8064 19.7969 39.7422 20.7448C40.678 21.6927 41.1702 22.8473 41.2188 24.2084H39.25ZM18.8334 44.625C18.0313 44.625 17.3446 44.3394 16.7735 43.7683C16.2023 43.1971 15.9167 42.5105 15.9167 41.7084V24.2084C15.9167 23.4063 16.2023 22.7197 16.7735 22.1485C17.3446 21.5773 18.0313 21.2917 18.8334 21.2917H23.4271L26.125 18.375H34.875V21.2917H27.4011L24.7396 24.2084H18.8334V41.7084H42.1667V25.6667H45.0834V41.7084C45.0834 42.5105 44.7978 43.1971 44.2266 43.7683C43.6554 44.3394 42.9688 44.625 42.1667 44.625H18.8334ZM30.5 39.5209C32.3229 39.5209 33.8724 38.8829 35.1485 37.6068C36.4245 36.3308 37.0625 34.7813 37.0625 32.9584C37.0625 31.1355 36.4245 29.586 35.1485 28.3099C33.8724 27.0339 32.3229 26.3959 30.5 26.3959C28.6771 26.3959 27.1276 27.0339 25.8516 28.3099C24.5755 29.586 23.9375 31.1355 23.9375 32.9584C23.9375 34.7813 24.5755 36.3308 25.8516 37.6068C27.1276 38.8829 28.6771 39.5209 30.5 39.5209ZM30.5 36.6042C29.4792 36.6042 28.6163 36.2518 27.9115 35.5469C27.2066 34.8421 26.8542 33.9792 26.8542 32.9584C26.8542 31.9375 27.2066 31.0747 27.9115 30.3698C28.6163 29.665 29.4792 29.3125 30.5 29.3125C31.5209 29.3125 32.3837 29.665 33.0886 30.3698C33.7934 31.0747 34.1459 31.9375 34.1459 32.9584C34.1459 33.9792 33.7934 34.8421 33.0886 35.5469C32.3837 36.2518 31.5209 36.6042 30.5 36.6042Z"
        fill={`rgba(${color},1)`}
      />
    </G>
  </Svg>

);

export default CameraIcon;