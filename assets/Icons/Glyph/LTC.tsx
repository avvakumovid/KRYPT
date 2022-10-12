import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LTC = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='m6.94 12.537 1.115-3.76 1.737-.492.363-1.244-1.71.518 1.814-6.17v-.098A.301.301 0 0 0 9.948 1H7.64a.391.391 0 0 0-.39.284L5.1 8.596l-1.711.519L3 10.307l1.711-.518-1.53 5.21h9.126a.387.387 0 0 0 .389-.285l.518-1.788v-.099a.3.3 0 0 0-.31-.29H6.94Z'
      fill='#fff'
    />
  </Svg>
);

export default LTC;
