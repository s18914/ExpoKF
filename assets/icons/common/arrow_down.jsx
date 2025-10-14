import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDown = ({ width = 10, height = 11, fill = "#1F2225", ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 10 11"
    fill="none"
    {...props}
  >
    <Path
      fill="none"
      stroke={fill}
      strokeWidth={2}
      strokeMiterlimit={10}
      transform="matrix(0.707107 0.707107 -0.707107 0.707107 4.9502 3.8147e-05)"
      d="M6 0L6 6L0 6"
      fillRule="evenodd"
    />
  </Svg>
);

export default ArrowDown;
