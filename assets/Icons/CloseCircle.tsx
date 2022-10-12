import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function CloseCircle(props: any) {
  return (
    <Svg
      style={props.style}
      width={100}
      height={100}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M50 91.667c22.917 0 41.667-18.75 41.667-41.667 0-22.916-18.75-41.666-41.667-41.666C27.084 8.334 8.334 27.084 8.334 50c0 22.917 18.75 41.667 41.666 41.667ZM38.209 61.792l23.583-23.584M61.792 61.792 38.208 38.208'
        stroke='#97DC22'
        strokeWidth={3}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
