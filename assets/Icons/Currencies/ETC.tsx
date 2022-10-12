import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const ETC = (props: any) => (
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
      d='M11.5 16.669c1.632.866 3.334 1.773 4.65 2.475l4.611-2.475c-1.67 2.48-3.061 4.546-4.611 6.831-1.554-2.28-3.27-4.797-4.65-6.831Zm.177-.684 4.478-2.39 4.418 2.372-4.416 2.392-4.48-2.374Zm4.473-3.155-4.65 2.448L16.13 8.5l4.631 6.793-4.611-2.463Z'
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
        <Stop stopColor='#9A7DE8' />
        <Stop offset={1} stopColor='#7852E0' />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default ETC;
