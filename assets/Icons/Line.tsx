import React from 'react';
import Svg, { Path, Defs, RadialGradient, Stop } from 'react-native-svg';

export default function Line(props: any) {
  return (
    <Svg
      style={props.style}
      width={350}
      height={2}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path d='M0 1h350' stroke='url(#a)' strokeOpacity={0.6} />
      <Defs>
        <RadialGradient
          id='a'
          cx={0}
          cy={0}
          r={1}
          gradientUnits='userSpaceOnUse'
          gradientTransform='matrix(0 .5 -175 0 175 1.5)'
        >
          <Stop stopColor='#fff' />
          <Stop offset={1} stopColor='#fff' stopOpacity={0} />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}
