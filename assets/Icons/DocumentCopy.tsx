import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function DocumentCopy(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M11.334 8.933v2c0 2.667-1.067 3.733-3.734 3.733H5.067c-2.667 0-3.734-1.066-3.734-3.733V8.4c0-2.667 1.067-3.734 3.734-3.734h2'
        stroke='#97DC22'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M11.334 8.933H9.2c-1.6 0-2.133-.533-2.133-2.133V4.667l4.267 4.266ZM7.733 1.333H10.4M4.667 3.333c0-1.106.893-2 2-2h1.746M14.667 5.333V9.46c0 1.033-.84 1.873-1.873 1.873M14.666 5.333h-2c-1.5 0-2-.5-2-2v-2l4 4Z'
        stroke='#97DC22'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
