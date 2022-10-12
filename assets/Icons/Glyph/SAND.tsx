import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SAND = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M4.305 1.5 3 2.802v5.2L4.305 9.3h5.22v2.598H6.918v-1.3H3v2.602L4.305 14.5h7.833l1.304-1.3V8.003l-1.304-1.303H6.917V4.101h2.609v1.3h3.916V2.801L12.138 1.5H4.305Z'
      fill='#fff'
    />
  </Svg>
);

export default SAND;
