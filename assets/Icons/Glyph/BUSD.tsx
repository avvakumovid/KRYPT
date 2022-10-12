import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

const BUSD = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <G clipPath='url(#a)' fill='#fff'>
      <Path d='M9.858 2.403 8 .5 3.32 5.224 5.18 7.082l4.68-4.679ZM12.679 5.224 10.821 3.32l-7.5 7.545 1.858 1.858 7.5-7.5ZM2.358 6.142l1.858 1.903-1.858 1.858L.5 8.045l1.858-1.903ZM15.5 8.045l-1.858-1.903-7.5 7.545L8 15.545l7.5-7.5Z' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BUSD;
