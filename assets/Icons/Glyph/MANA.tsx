import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MANA = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M7.117 3.52a1.02 1.02 0 1 1-2.039 0 1.02 1.02 0 0 1 2.04 0ZM11.26 7.801a2.04 2.04 0 1 0 0-4.078 2.04 2.04 0 0 0 0 4.078ZM1 11.88l5.098-6.118 3.94 4.73 1.222-1.467v4.486H7.525l1.358-1.631H1ZM11.26 9.025v4.486H15l-3.74-4.486Z'
      fill='#fff'
    />
  </Svg>
);

export default MANA;
