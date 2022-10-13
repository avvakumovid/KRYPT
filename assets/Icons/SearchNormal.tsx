import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function SearchNormal(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M9.167 16.666a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z'
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M15.775 17.241c.442 1.334 1.45 1.467 2.225.3.708-1.066.242-1.941-1.042-1.941-.95-.009-1.483.733-1.183 1.641Z'
        fill={props.color}
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
