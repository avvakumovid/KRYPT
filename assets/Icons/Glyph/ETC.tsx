import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ETC = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M3.5 8.669c1.632.866 3.334 1.774 4.65 2.475L12.76 8.67c-1.67 2.48-3.061 4.545-4.611 6.831-1.554-2.28-3.27-4.797-4.65-6.831Zm.177-.684 4.478-2.39 4.418 2.372-4.416 2.392-4.48-2.374ZM8.15 4.83 3.5 7.278 8.13.5l4.631 6.793L8.15 4.83Z'
      fill='#fff'
    />
  </Svg>
);

export default ETC;
