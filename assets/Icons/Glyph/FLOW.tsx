import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FLOW = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M15 4.29h-3.71c-.677 0-1.237.56-1.237 1.237v.42h-3.29v-.42A4.531 4.531 0 0 1 11.29 1H15v3.29Z'
      fill='#fff'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.053 9.237v-3.29H5.527A4.531 4.531 0 0 0 1 10.473 4.53 4.53 0 0 0 5.527 15a4.53 4.53 0 0 0 4.526-4.527V9.237ZM5.527 11.71c.676 0 1.236-.56 1.236-1.237V9.237H5.527c-.677 0-1.237.56-1.237 1.236 0 .677.56 1.237 1.237 1.237Z'
      fill='#fff'
    />
    <Path d='M10.053 5.947h3.29v3.29h-3.29v-3.29Z' fill='#fff' />
  </Svg>
);

export default FLOW;
