import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const TRX = (props: any) => (
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
    <Path
      d='M23.062 13.019c-.703-.65-1.675-1.64-2.468-2.344l-.047-.033a.895.895 0 0 0-.26-.145c-1.91-.356-10.8-2.018-10.973-1.997a.328.328 0 0 0-.136.052l-.044.035a.523.523 0 0 0-.122.197L9 8.814v.192c1 2.787 4.952 11.916 5.73 14.058.047.145.136.422.303.436h.037c.09 0 .469-.502.469-.502s6.787-8.23 7.474-9.107a2.22 2.22 0 0 0 .234-.347.565.565 0 0 0-.185-.525Zm-5.782.958 2.897-2.402 1.7 1.566-4.597.836Zm-1.125-.157-4.987-4.087 8.07 1.488-3.083 2.6Zm.45 1.072 5.105-.823-5.836 7.031.731-6.209Zm-6.114-4.751 5.247 4.453-.76 6.51-4.487-10.963Z'
      fill='#fff'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={16}
        y1={0.024}
        x2={16}
        y2={31.936}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#D9534A' />
        <Stop offset={1} stopColor='#C6342A' />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default TRX;