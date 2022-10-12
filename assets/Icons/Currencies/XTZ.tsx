import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const XTZ = (props: any) => (
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
      d='M17.616 23.5c-1.07 0-1.852-.258-2.344-.773a2.388 2.388 0 0 1-.736-1.667 1.106 1.106 0 0 1 .129-.551.954.954 0 0 1 .351-.352 1.227 1.227 0 0 1 1.095 0 .938.938 0 0 1 .35.352c.092.168.138.359.133.55.01.23-.056.457-.188.645a.873.873 0 0 1-.445.326c.176.224.425.38.703.439.312.09.634.137.959.138.43.004.85-.122 1.207-.361a2.11 2.11 0 0 0 .787-1.066 4.632 4.632 0 0 0 .258-1.596 4.379 4.379 0 0 0-.281-1.66 2.048 2.048 0 0 0-.813-1.031 2.163 2.163 0 0 0-1.172-.335 2.23 2.23 0 0 0-1.015.344l-.753.378v-.378l3.383-4.537h-4.688v4.708c-.013.34.077.676.258.964a.888.888 0 0 0 .787.377c.282-.006.555-.102.778-.274.253-.186.474-.412.652-.67a.234.234 0 0 1 .085-.113.173.173 0 0 1 .113-.042.39.39 0 0 1 .22.094.468.468 0 0 1 .12.318 1.866 1.866 0 0 1-.043.235 2.27 2.27 0 0 1-.804.998 1.994 1.994 0 0 1-1.127.342c-1.015 0-1.718-.2-2.11-.6a2.245 2.245 0 0 1-.58-1.64v-4.697H10.5v-.874h2.395V9.496l-.548-.549V8.5h1.591l.598.31v2.68l6.192-.018.617.619-3.797 3.815c.23-.092.47-.15.717-.174.487.022.962.157 1.388.396a2.85 2.85 0 0 1 1.195 1.067c.258.392.441.828.54 1.287.08.362.123.731.128 1.102a4.608 4.608 0 0 1-.469 2.041 2.993 2.993 0 0 1-1.406 1.406 4.55 4.55 0 0 1-2.025.469Z'
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
        <Stop stopColor='#149DE1' />
        <Stop offset={1} stopColor='#107CB2' />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default XTZ;