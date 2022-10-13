import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../styles';

export default function ArrowRightSimple(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='m5.94 13.28 4.347-4.346a1.324 1.324 0 0 0 0-1.867L5.94 2.72'
        stroke='#FAFAFA'
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
