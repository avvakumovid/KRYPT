import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function DashedBorder(props: any) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={334}
      height={336}
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'optimizeQuality',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
      {...props}
    >
      <Path
        style={{
          opacity: 0.997,
        }}
        fill='#97dc21'
        d='M-.5-.5h21C14.021.49 7.354.824.5.5c.324 6.854-.01 13.521-1 20v-21Z'
      />
      <Path
        style={{
          opacity: 1,
        }}
        fill='#96db21'
        d='M61.5-.5h43a231.625 231.625 0 0 1-43 0Z'
      />
      <Path
        style={{
          opacity: 0.994,
        }}
        fill='#97dc21'
        d='M145.5-.5h42a221 221 0 0 1-42 0Z'
      />
      <Path
        style={{
          opacity: 1,
        }}
        fill='#96db21'
        d='M228.5-.5h43a231.625 231.625 0 0 1-43 0Z'
      />
      <Path
        style={{
          opacity: 0.997,
        }}
        fill='#96dc21'
        d='M312.5-.5h21v21c-.991-6.479-1.324-13.146-1-20-6.854.324-13.521-.01-20-1Z'
      />
      <Path
        style={{
          opacity: 1,
        }}
        fill='#96dc21'
        d='M-.5 62.5a221 221 0 0 1 0 42v-42ZM333.5 62.5v42c-1.333-14-1.333-28 0-42ZM-.5 146.5a221 221 0 0 1 0 42v-42ZM333.5 146.5v42c-1.333-14-1.333-28 0-42ZM-.5 230.5a221 221 0 0 1 0 42v-42ZM333.5 230.5v42c-1.333-14-1.333-28 0-42Z'
      />
      <Path
        style={{
          opacity: 0.997,
        }}
        fill='#97dc21'
        d='M-.5 314.5c.99 6.479 1.324 13.146 1 20 6.854-.324 13.521.009 20 1h-21v-21Z'
      />
      <Path
        style={{
          opacity: 0.997,
        }}
        fill='#96dc21'
        d='M333.5 314.5v21h-21c6.479-.991 13.146-1.324 20-1-.324-6.854.009-13.521 1-20Z'
      />
      <Path
        style={{
          opacity: 1,
        }}
        fill='#96db21'
        d='M61.5 335.5a231.683 231.683 0 0 1 43 0h-43Z'
      />
      <Path
        style={{
          opacity: 0.994,
        }}
        fill='#97dc21'
        d='M145.5 335.5c14-1.333 28-1.333 42 0h-42Z'
      />
      <Path
        style={{
          opacity: 1,
        }}
        fill='#96db21'
        d='M228.5 335.5a231.683 231.683 0 0 1 43 0h-43Z'
      />
    </Svg>
  );
}
