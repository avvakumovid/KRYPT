import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const XRP = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M15.47 2h-2.167l-3.43 3.393a2.67 2.67 0 0 1-3.748 0L2.697 2H.527l4.514 4.467a4.216 4.216 0 0 0 5.918 0L15.471 2ZM.5 14.422h2.17L6.127 11a2.67 2.67 0 0 1 3.747 0l3.457 3.42H15.5l-4.541-4.494a4.216 4.216 0 0 0-5.918 0L.5 14.422Z'
      fill='#fff'
    />
  </Svg>
);

export default XRP;
