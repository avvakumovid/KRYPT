import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LINK = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='m8.002.5-1.376.791-3.75 2.168L1.5 4.25v7.5l1.376.791 3.785 2.168 1.376.791 1.376-.791 3.715-2.168 1.377-.791v-7.5l-1.377-.791-3.75-2.168L8.002.5Zm-3.75 9.667V5.833l3.75-2.168 3.75 2.168v4.334l-3.75 2.168-3.75-2.168Z'
      fill='#fff'
    />
  </Svg>
);

export default LINK;
