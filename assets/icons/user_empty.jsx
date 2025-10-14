import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const UserEmpty = ({ width = 32, height = 32, fill = "#B8B8B8", backgroundColor = "#E6E7E8", ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Circle
      cx={16}
      cy={16}
      r={16}
      fill={backgroundColor}
    />
    <Path
      d="M16,8 C12.686,8 10,10.686 10,14 L10,15 C10,18.314 12.686,21 16,21 C19.314,21 22,18.314 22,15 L22,14 C22,10.686 19.314,8 16,8 Z M15.998047,23 C11.992047,23 6.8520469,25.166844 5.3730469,27.089844 C4.4590469,28.278844 5.329125,30 6.828125,30 C10.7277959,32 13.6525491,33 15.6023845,33 C17.7285039,33 20.9176831,32 25.169922,30 C26.668922,30 27.539,28.278844 26.625,27.089844 C25.146,25.167844 20.004047,23 15.998047,23 Z"
      fill={fill}
      fillRule="nonzero"
    />
  </Svg>
);

export default UserEmpty;
