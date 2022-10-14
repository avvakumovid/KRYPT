import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Confirm(props: any) {
  return (
    <Svg
      style={props.style}
      width={10}
      height={9}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='m.75 4.5 2.83 2.83 5.67-5.66'
        stroke='#97DC22'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
