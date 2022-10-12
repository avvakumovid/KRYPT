import * as React from 'react';
import Svg, {
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const WBTC = (props: any) => (
  <Svg
    width={32}
    height={32}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M15.462.048a6 6 0 0 1 1.076 0l1.781.16c.358.033.712.097 1.059.193l1.724.476a6 6 0 0 1 1.006.378l1.612.776c.324.155.633.34.923.551l1.447 1.051c.29.212.562.448.81.708l1.236 1.293c.248.26.473.541.67.84l.986 1.493c.198.3.369.617.51.948l.703 1.644c.14.33.252.673.332 1.023l.398 1.744c.08.35.128.707.144 1.066l.08 1.786c.017.36 0 .719-.048 1.075l-.24 1.772a6 6 0 0 1-.239 1.049l-.553 1.7a6.003 6.003 0 0 1-.422.99l-.848 1.575c-.17.316-.369.617-.593.898l-1.115 1.398c-.224.28-.472.54-.743.777l-1.347 1.177a5.99 5.99 0 0 1-.87.632l-1.535.918c-.309.184-.633.34-.97.466l-1.674.629a6 6 0 0 1-1.037.286l-1.76.32a6.005 6.005 0 0 1-1.07.096h-1.79c-.359 0-.717-.033-1.07-.097l-1.76-.32a6 6 0 0 1-1.037-.285l-1.675-.629a5.994 5.994 0 0 1-.969-.466L7.06 29.22a5.993 5.993 0 0 1-.87-.632l-1.347-1.177a6.001 6.001 0 0 1-.743-.777l-1.115-1.399a5.999 5.999 0 0 1-.593-.897l-.848-1.575a6 6 0 0 1-.422-.99l-.553-1.7a6 6 0 0 1-.24-1.049l-.24-1.772a6 6 0 0 1-.048-1.075l.08-1.786a6 6 0 0 1 .145-1.066l.398-1.744c.08-.35.191-.693.332-1.023l.703-1.644a6 6 0 0 1 .51-.948l.985-1.492a6 6 0 0 1 .67-.841L5.1 4.34a6 6 0 0 1 .81-.708l1.447-1.05a6 6 0 0 1 .923-.552l1.611-.776c.324-.156.661-.283 1.008-.378L12.623.4c.346-.096.7-.16 1.058-.192l1.781-.16Z'
      fill='url(#a)'
    />
    <G clipPath='url(#b)' fill='#fff'>
      <Path d='M16.004 10.156a5.83 5.83 0 0 0-3.935 1.528l-.421-.412a6.42 6.42 0 0 1 8.702 0l-.411.412a5.83 5.83 0 0 0-3.935-1.528ZM20.32 12.06l.411-.412v-.01a6.42 6.42 0 0 1 0 8.703l-.412-.412a5.83 5.83 0 0 0 0-7.869ZM11.684 19.933a5.83 5.83 0 0 1 0-7.865l-.412-.412a6.42 6.42 0 0 0 0 8.703l.412-.426ZM15.999 21.841a5.83 5.83 0 0 0 3.934-1.527l.422.412a6.42 6.42 0 0 1-8.703 0l.412-.412a5.83 5.83 0 0 0 3.935 1.527Z' />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.6 14.626c-.082-.86-.824-1.148-1.761-1.236v-1.183h-.725v1.161h-.58v-1.161h-.719v1.191h-1.47v.776s.535-.01.527 0a.374.374 0 0 1 .412.319v3.261a.255.255 0 0 1-.175.228.252.252 0 0 1-.1.013c.01.008-.527 0-.527 0l-.137.866H14.8v1.21h.725V18.88h.58v1.187h.726V18.87c1.224-.074 2.078-.376 2.185-1.522.087-.923-.347-1.335-1.04-1.5.421-.208.682-.592.623-1.221Zm-1.016 2.578c0 .827-1.3.808-1.894.8-.053-.002-.1-.002-.14-.002v-1.598l.18-.003c.61-.014 1.854-.041 1.854.803Zm-.336-2.252c0 .754-1.076.734-1.574.726l-.123-.002v-1.453c.04 0 .09 0 .147-.002.507-.014 1.55-.04 1.55.732Z'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.832 22.235a7.5 7.5 0 1 0 8.335-12.47 7.5 7.5 0 0 0-8.335 12.47Zm.329-11.983a6.912 6.912 0 1 1 7.687 11.489 6.912 6.912 0 0 1-7.687-11.489Z'
      />
    </G>
    <Defs>
      <LinearGradient
        id='a'
        x1={16}
        y1={0.024}
        x2={16}
        y2={31.936}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#F4BA45' />
        <Stop offset={1} stopColor='#F19C3B' />
      </LinearGradient>
      <ClipPath id='b'>
        <Path fill='#fff' transform='translate(8 8)' d='M0 0h16v16H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WBTC;
