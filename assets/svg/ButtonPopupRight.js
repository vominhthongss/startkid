import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const ButtonPopupRight = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Mask
      id="a"
      width={35}
      height={35}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h35v35H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#0A6843"
        d="M10.208 22.038v-3.064h14.584v3.064H10.208Zm0 5.84v-3.065h10.209v3.065H10.208Zm-2.812 6.111c-.918 0-1.7-.325-2.347-.975a3.225 3.225 0 0 1-.97-2.361v-20.32c0-.924.323-1.71.97-2.361a3.189 3.189 0 0 1 2.347-.976H8.75V4.063h3.117v2.933h11.266V4.063h3.117v2.933h1.354c.918 0 1.7.326 2.347.976.647.65.97 1.437.97 2.36v20.32c0 .924-.323 1.711-.97 2.362a3.19 3.19 0 0 1-2.347.975H7.396Zm0-3.336h20.208v-14.56H7.396v14.56Z"
      />
    </G>
  </Svg>
)
export default ButtonPopupRight
