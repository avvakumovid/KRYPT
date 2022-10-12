import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

const ALGO = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <G clipPath='url(#a)'>
      <Path
        d='m3.093 15.5 2.169-3.757L7.432 8l2.155-3.757.357-.595.16.595.66 2.474L10.025 8l-2.17 3.743L5.698 15.5h2.593l2.17-3.757L11.584 9.8l.529 1.944 1.005 3.757h2.328l-1.005-3.757L13.437 8l-.265-.966 1.614-2.79H12.43l-.08-.278-.82-3.07L11.427.5H9.164l-.053.08-2.116 3.663L4.825 8 2.67 11.743.5 15.5h2.593Z'
        fill='#fff'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ALGO;
