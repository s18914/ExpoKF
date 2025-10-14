import * as React from 'react';
import Svg, { Path, Line, Polyline } from 'react-native-svg';

const Clock = ({ width = 102, height = 94, fill = "#4ECF17", ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 102 94"
    fill="none"
    {...props}
  >
    <Path
      d="M63.8480513,4.72037354 C57.8848011,1.70117582 51.141066,0 44,0 C19.699471,0 0,19.699471 0,44 C0,68.300529 19.699471,88 88,88 C68.300529,88 88,68.300529 88,44"
      stroke="fill"
      strokeWidth={6}
    />
    <Line
      x1={44}
      y1={0.463157895}
      x2={44}
      y2={7}
      stroke="fill"
      strokeWidth={6}
      strokeLinecap="square"
    />
    <Line
      x1={44}
      y1={82}
      x2={44}
      y2={87.5368421}
      stroke="fill"
      strokeWidth={6}
      strokeLinecap="square"
    />
    <Line
      x1={2.31583579}
      y1={44.0000463}
      x2={7}
      y2={44}
      stroke="fill"
      strokeWidth={6}
      strokeLinecap="square"
    />
    <Polyline
      points="44 24.8984573 44 44 60.8158898 60.7294111"
      stroke="fill"
      strokeWidth={6}
    />
    <Path
      d="M81.5,4 C91.1649831,4 99,11.8350169 99,21.5 C99,31.1649831 91.1649831,39 81.5,39 C71.8350169,39 64,31.1649831 64,21.5 C64,11.8350169 71.8350169,4 81.5,4 Z M87.9323393,15.4838436 L80.5578866,23.3195404 L75.8883911,19.0275783 L73.1813822,21.9724217 L79.3059124,27.602316 L80.7611488,28.940023 L82.1158475,27.500591 L90.8452006,18.2252372 L87.9323393,15.4838436 Z"
      fill="fill"
    />
  </Svg>
);

export default Clock;
