import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VET = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M6.948 14.522.533 1.455A.317.317 0 0 1 .816 1H3.04a.32.32 0 0 1 .284.172l4.685 9.48c.418.85 1.626.85 2.044 0l4.67-9.473a.32.32 0 0 1 .283-.171h.276c.165 0 .269.171.195.313L8.993 14.522c-.418.85-1.627.85-2.045 0Z'
      fill='#fff'
    />
  </Svg>
);

export default VET;
