import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Opener(props: any) {
  return (
    <Svg
      width={94}
      height={4}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M2 2h90'
        stroke='#FAFAFA'
        strokeWidth={4}
        strokeLinecap='round'
      />
    </Svg>
  );
}
