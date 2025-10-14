import * as React from 'react';
import Svg, { Path, Line, Polyline, Polygon } from 'react-native-svg';

const Close = ({ width = 103, height = 114, fill = "#4ECF17", ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 103 114"
    fill="none"
    {...props}
  >
    <Path
      d="M51.9953828,13 L68,13 C69.6568542,13 71,14.2668307 71,15.8295455 C71,26.7270612 71,34.9001981 71,40.348956 M71,65.7022538 C71,70.9286799 71,80.6103496 71,93.1704545 C71,94.7331693 69.6568542,96 68,96 L51.9953828,96"
      stroke="fill"
      strokeWidth={6}
    />
    <Path
      d="M4.12608837,8.49832751 L47.3008707,0.834164965 C49.4760046,0.448046514 51.5523099,1.89833012 51.9384284,4.07346406 C51.9793968,4.304253 52,4.53819637 52,4.77259336 L52,103.227407 C52,105.436546 50.209139,107.227407 48,107.227407 C47.765603,107.227407 47.5316596,107.206803 47.3008707,107.165835 L4.95130605,99.6481608 C2.08693289,99.1396922 4.4408921e-15,96.6496717 4.4408921e-15,93.7405182 L0,13.421363 C0,10.9970684 1.73911074,8.92205135 4.12608837,8.49832751 Z"
      stroke="fill"
      strokeWidth={6}
    />
    <Polygon
      points="49.5 39.5 49.5 66.5 39.3255914 64.4573255 39.3255914 41.4233698"
      fill="fill"
      fillRule="nonzero"
    />
    <Line
      x1={65.5}
      y1={52.5}
      x2={91.5}
      y2={52.5}
      stroke="fill"
      strokeWidth={6}
      strokeLinecap="square"
    />
    <Polyline
      points="75 44 92 44 92 61"
      stroke="fill"
      strokeWidth={6}
      transform="translate(83.5, 52.5) rotate(45) translate(-83.5, -52.5)"
    />
  </Svg>
);

export default Close;
