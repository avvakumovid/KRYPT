import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Swap(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M15.28 8.45 19 4.73l-3.72-3.72M1 4.73h18'
        stroke='#97DC22'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M4.72 11.55 1 15.27l3.72 3.72M19 15.27H1'
        stroke='#FAFAFA'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
