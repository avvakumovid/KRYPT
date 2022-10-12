import * as React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

const WBTC = (props: any) => (
  <Svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <G clipPath='url(#a)' fill='#fff'>
      <Path d='M8.004 2.156a5.83 5.83 0 0 0-3.935 1.528l-.421-.412a6.42 6.42 0 0 1 8.702 0l-.411.412a5.83 5.83 0 0 0-3.935-1.528ZM12.32 4.06l.411-.412v-.01a6.42 6.42 0 0 1 0 8.703l-.412-.412a5.83 5.83 0 0 0 0-7.869ZM3.684 11.933a5.83 5.83 0 0 1 0-7.865l-.412-.412a6.42 6.42 0 0 0 0 8.703l.412-.426ZM7.999 13.841a5.83 5.83 0 0 0 3.934-1.527l.422.412a6.42 6.42 0 0 1-8.703 0l.412-.412a5.83 5.83 0 0 0 3.935 1.527Z' />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.6 6.626c-.082-.86-.824-1.148-1.761-1.236V4.207h-.725v1.161h-.58V4.207h-.719v1.191h-1.47v.776s.535-.01.527 0a.375.375 0 0 1 .412.319v3.262a.254.254 0 0 1-.088.177.251.251 0 0 1-.187.063c.01.008-.527 0-.527 0l-.137.866H6.8v1.21h.725V10.88h.58v1.187h.726V10.87c1.224-.074 2.078-.376 2.185-1.522.087-.923-.347-1.335-1.04-1.5.421-.208.682-.592.623-1.221ZM9.584 9.204c0 .827-1.3.808-1.894.8-.053-.002-.1-.002-.14-.002V8.404l.18-.003c.61-.014 1.854-.041 1.854.803Zm-.336-2.252c0 .753-1.076.734-1.574.726l-.123-.002V6.223c.04 0 .09 0 .147-.002.507-.013 1.55-.04 1.55.731Z'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.832 14.235a7.5 7.5 0 1 0 8.336-12.47 7.5 7.5 0 0 0-8.336 12.47Zm.329-11.983a6.911 6.911 0 1 1 7.686 11.488A6.911 6.911 0 0 1 4.161 2.252Z'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WBTC;
