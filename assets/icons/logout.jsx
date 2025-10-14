import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Logout = ({ width = 21, height = 24, fill = "#4ECF17", ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 21 24"
    fill="none"
    {...props}
  >
    <Path
      d="M10.5 9.333333L10.5 5.8333335L0 5.8333335L0 3.5L10.5 3.5L10.5 0L15.166667 4.6666665L10.5 9.333333Z"
      transform="translate(5.83333 7)"
      fill={fill}
    />
    <Path
      d="M14 8.166667L14 2.3333333C14 1.0441667 12.955833 0 11.666667 0L2.3333333 0C1.0441667 0 0 1.0441667 0 2.3333333L0 21C0 22.289167 1.0441667 23.333334 2.3333333 23.333334L11.666667 23.333334C12.955833 23.333334 14 22.289167 14 21L14 15.166667L11.666667 15.166667L11.666667 21L2.3333333 21L2.3333333 2.3333333L11.666667 2.3333333L11.666667 8.166667L14 8.166667Z"
      fill={fill}
    />
  </Svg>
);

export default Logout;
