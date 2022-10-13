import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HBAR = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M14.5 15h-2.03v-4.317H3.53V15H1.5V1h2.03v4.214h8.94V1h2.03v14ZM3.628 9.067h8.939v-2.23h-8.94v2.23Z'
      fill='#fff'
    />
  </Svg>
);

export default HBAR;
