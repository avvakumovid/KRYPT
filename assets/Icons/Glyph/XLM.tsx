import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const XLM = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M15.5 2.08v1.297L.5 11.02V9.724l.545-.278a1.154 1.154 0 0 0 .627-1.116 6.346 6.346 0 0 1 10.056-5.62l-1.188.606a5.196 5.196 0 0 0-7.685 5.207L15.5 2.081ZM3.66 10.703l11.84-6.03v1.293l-.546.278a1.156 1.156 0 0 0-.626 1.116 6.347 6.347 0 0 1-10.056 5.62l1.12-.57.064-.034a5.196 5.196 0 0 0 7.692-5.212L.5 13.61v-1.296l3.16-1.61Z'
      fill='#fff'
    />
  </Svg>
);

export default XLM;
