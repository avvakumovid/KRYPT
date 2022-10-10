import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../styles';

export default function ArrowRight(props: any) {
  return (
    <Svg
      width={21}
      height={21}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='m12.525 5.442 5.058 5.058-5.058 5.059M3.417 10.5h14.025'
        stroke={props.disabled ? Colors.GREY : props.color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
