import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ size, color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{ alignSelf: "center" }}
  >
    <Path d="M2.239 20.927V9.457H.875l10-8.53 6.06 5.186v-3.25h1.516v4.516l2.424 2.079h-1.364v11.47h-6.59v-7.17H8.83v7.17H2.239Zm.909-.86H7.92V12.9h5.91v7.168h4.772V8.67l-7.727-6.595L3.148 8.67v11.398Zm5.05-11.684h5.379c0-.662-.274-1.201-.82-1.62a3.014 3.014 0 0 0-1.882-.627c-.707 0-1.33.207-1.869.62-.538.414-.808.956-.808 1.627Z" />
  </Svg>
);

export default HomeIcon;
