import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CRO = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M10.352 14.156h1.325L15 8.351l-2.445-1.848-2.147 1.4v2.482l-1.643 1.568v.747l1.587 1.456Z'
      fill='#fff'
    />
    <Path
      d='m6.432 7.903-.243 2.333h3.622l-.224-2.333.784-2.091H5.629l.803 2.09Z'
      fill='#fff'
    />
    <Path
      d='M5.685 14.175 7.272 12.7v-.747l-1.643-1.568V7.903L3.464 6.52 1 8.351l3.341 5.824h1.344ZM11.659 1.5H4.323l-.859 3.733h9.072L11.659 1.5Z'
      fill='#fff'
    />
  </Svg>
);

export default CRO;
