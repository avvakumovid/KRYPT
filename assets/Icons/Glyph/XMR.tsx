import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

const XMR = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <G clipPath='url(#a)' fill='#fff'>
      <Path d='M.5 8C.495 3.864 3.859.5 8 .5v.001c4.142 0 7.507 3.358 7.5 7.5a7.523 7.523 0 0 1-.38 2.369h-2.245V4.06L8 8.934 3.125 4.06v6.31H.88A7.52 7.52 0 0 1 .5 8Z' />
      <Path d='M4.75 7.928 8 11.176l3.248-3.248v3.97h3.162a7.502 7.502 0 0 1-12.82 0H4.75v-3.97Z' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default XMR;
