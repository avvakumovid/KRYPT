import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

const BNB = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <G clipPath='url(#a)' fill='#fff'>
      <Path d='M8 3.89 5.087 6.803 3.392 5.108 8 .5l4.61 4.61-1.695 1.694L8 3.89ZM2.195 6.305.5 8l1.695 1.695L3.89 8 2.195 6.305ZM8 12.11 5.087 9.197 3.39 10.89 8 15.5l4.61-4.61-1.696-1.694L8 12.11ZM13.805 6.306 12.11 8l1.695 1.695L15.5 8l-1.695-1.695Z' />
      <Path d='M9.72 7.999h-.001.002L9.72 8 8 9.72 6.28 8.002l-.002-.003.002-.002L8 6.279l1.72 1.72Z' />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BNB;
