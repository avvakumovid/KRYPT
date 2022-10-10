import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../styles';
export default function ArrowLeft(props: any) {
  return (
    <Svg
      width={21}
      height={21}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M8.475 5.442 3.417 10.5l5.058 5.059M17.583 10.5H3.558'
        stroke={props.disabled ? Colors.GREY : props.color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
