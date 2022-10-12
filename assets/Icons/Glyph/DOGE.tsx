import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DOGE = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.126 14.99H7.74s6.487.553 6.487-6.877C14.227.97 8.303.995 7.158 1H3.126v6.233H1.5v1.526h1.626v6.232ZM5.725 3.587h1.82c.681 0 4.106.279 4.112 4.577.005 4.247-3.448 4.242-4.004 4.242H5.725V8.759h2.864V7.232H5.725V3.586Z'
      fill='#fff'
    />
  </Svg>
);

export default DOGE;
