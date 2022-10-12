import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ETH = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M3.5 8.139 8.104.5v.004V.5l4.604 7.638h.002L8.107 10.86h-.003L3.5 8.14Z'
      fill='#fff'
    />
    <Path
      d='M8.104 15.497v.003L3.5 9.012l4.604 2.72v.002l.001-.002 4.606-2.72L8.105 15.5l-.001-.003Z'
      fill='#fff'
    />
  </Svg>
);

export default ETH;
