import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="#fff"
    viewBox="0 0 100 100"
    {...props}
  >
    <Path d="m58.369 10.173-5.62 5.87 31.267 29.892H0v8.117h84.016L52.75 83.957l5.619 5.87L100 49.993Z" />
  </Svg>
);
export default SvgComponent;
