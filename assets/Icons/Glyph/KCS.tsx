import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const KCS = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='m5.945 8 4.022 4.1 2.552-2.553c.464-.464 1.16-.464 1.547 0a1.214 1.214 0 0 1 0 1.702l-3.326 3.403a1.121 1.121 0 0 1-1.624 0L4.32 9.702v2.939c0 .619-.541 1.16-1.16 1.16-.619 0-1.16-.541-1.16-1.16V3.359c0-.619.541-1.16 1.16-1.16.619 0 1.16.541 1.16 1.16V6.3l4.796-4.95a1.122 1.122 0 0 1 1.624 0l3.326 3.402a1.214 1.214 0 0 1 0 1.702c-.464.464-1.16.464-1.547 0l-2.552-2.63L5.945 8Zm4.022-1.16c.619 0 1.16.541 1.16 1.16 0 .619-.541 1.16-1.16 1.16-.619 0-1.16-.541-1.16-1.16 0-.619.541-1.16 1.16-1.16Z'
      fill='#fff'
    />
  </Svg>
);

export default KCS;
