import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function EyeIcon(props: any) {
  return (
    <Svg
      style={props.style}
      width={20}
      height={20}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M17.708 7.629C15.783 4.604 12.967 2.862 10 2.862c-1.483 0-2.925.434-4.242 1.242-1.317.817-2.5 2.008-3.466 3.525-.834 1.308-.834 3.433 0 4.742 1.925 3.033 4.741 4.766 7.708 4.766 1.483 0 2.925-.433 4.242-1.241 1.316-.817 2.5-2.009 3.466-3.525.834-1.3.834-3.434 0-4.742ZM10 13.371a3.363 3.363 0 0 1-3.367-3.367c0-1.858 1.5-3.367 3.367-3.367a3.363 3.363 0 0 1 3.367 3.367c0 1.858-1.5 3.367-3.367 3.367Z'
        fill={props.color}
        opacity={0.5}
      />
    </Svg>
  );
}
