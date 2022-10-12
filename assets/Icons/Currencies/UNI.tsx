import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const UNI = (props: any) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.789 12.485c-.598-.527-1.845-1.628-3.469-3.586C9.138 8.68 8.995 8.5 9 8.5c.027 0 4.26 3.642 4.698 4.15l.121.139-.01.218a.887.887 0 0 1-.322.678c-.25.229-.552.35-1.03.416-.293.04-.399.083-.517.212-.114.125-.156.28-.187.671-.05.606-.12.863-.41 1.466-.278.581-.336.8-.286 1.112.059.38.275.655.78.998.385.262.56.432.655.634.059.125.066.17.065.387-.002.332-.055.465-.284.707-.368.392-1.024.71-1.831.89-.339.076-.354.076-.354 0 0-.098-.124-.348-.343-.683-.252-.39-.352-.582-.445-.878a2.298 2.298 0 0 1-.123-.914c.014-.332.05-.48.184-.743.106-.21.174-.304.592-.823.716-.887.973-1.404 1.065-2.137.082-.654.195-.97.449-1.25.152-.17.186-.235.186-.357 0-.013.006-.029.014-.05.033-.085.096-.252-.05-.588-1.004-1.786-1.126-2-1.118-2.006l.008.007c.396.595.787 1.193 1.173 1.794.4.704.486.778.561.842l.031.028s.053.058.206.058c.187-.014.369-.065.536-.149.235-.133.287-.303.15-.492-.043-.058-.171-.172-.375-.352Zm-2.414 6.34a.385.385 0 0 1-.04.277c-.096.167-.277.221-.405.122-.079-.062-.085-.152-.015-.255.068-.103.062-.153-.025-.198-.052-.026-.075-.056-.075-.098 0-.134.244-.183.4-.08.08.055.137.137.16.231ZM13.61 14.767c.069-.247.286-.483.51-.55.192-.04.392-.02.575.053.268.136.462.444.42.667-.052.272-.494.49-1.004.492-.26.001-.356-.033-.456-.165-.061-.081-.085-.346-.045-.497Zm1.016-.4c.134.081.168.2.09.312-.054.077-.222.15-.345.15-.184 0-.384-.13-.384-.25 0-.24.385-.367.639-.212Z'
      fill='#fff'
    />
    <Path
      d='M13.205 9.546c-.093.013-.084.016.111.046v.002c.712.109 1.268.39 1.835.925.25.235.499.527.904 1.056.913 1.189 1.3 1.52 2.068 1.769.45.147.906.215 1.71.257.89.046 1.227.118 1.545.327.183.123.338.283.453.471l.079.123-.017-.135c-.064-.518-.436-1.246-.91-1.78l-.087-.098-.044.197c-.109.492-.346.846-.566.846a.285.285 0 0 1-.256-.16c-.049-.117-.045-.16.028-.294.134-.249.166-.58.1-1.015a.922.922 0 0 0-.062-.26c-.047-.058-.432-.28-.676-.393-.887-.406-1.945-.538-2.987-.372l-.247.04-.172-.192c-.651-.72-1.26-1.125-1.93-1.283-.287-.068-.702-.104-.88-.077Z'
      fill='#fff'
    />
    <Path
      d='M20.444 9.972c-.098.213-.146.447-.165.8h-.001c-.013.229-.026.307-.052.317-.041.015-.095 0-.426-.128-.221-.084-.772-.244-.788-.228.083.047.168.09.256.125.179.081.354.171.524.27.565.33.662.525.662 1.33 0 .402-.005.456-.055.576-.066.163-.055.195.019.05.137-.266.194-.532.202-.947.006-.266.013-.322.052-.36.04-.04.05-.04.117-.007.1.051.549.407.744.589l.16.148-.16-.208a8.713 8.713 0 0 0-.54-.593c-.443-.451-.477-.512-.54-.93-.05-.329-.037-.612.034-.82a.546.546 0 0 0 .037-.138.857.857 0 0 0-.08.154ZM13.107 10.154c-.054.623.193 1.455.588 1.998.308.42.785.748 1.138.78.23.02.3-.052.195-.203-.144-.21-.323-.534-.37-.672a7.792 7.792 0 0 1-.141-.565c-.166-.768-.329-1.066-.704-1.292a2.271 2.271 0 0 0-.6-.223l-.09-.015-.016.192ZM17.289 13.72c0 1.087.653 1.731 2.507 2.472v.001c1.235.494 1.74.75 2.117 1.07.33.284.528.661.546 1.048.004.073.017.125.032.12.05-.016.239-.437.301-.671.08-.297.107-.858.06-1.157-.168-1.032-.868-1.79-2-2.162-.357-.118-.742-.198-1.428-.298-1.166-.169-1.587-.297-1.963-.596a1.355 1.355 0 0 0-.16-.118c-.007 0-.012.131-.012.291ZM18.405 16.111c.038.128.068.258.09.39.148.88-.316 1.59-1.218 1.864-.096.029-.473.103-.837.163-.738.122-1.068.208-1.398.367-.234.112-.519.28-.502.297a.338.338 0 0 0 .12-.028c.416-.145.88-.221 1.586-.258.28-.014.598-.037.707-.05.63-.08 1.065-.269 1.404-.612.177-.173.31-.385.39-.62.059-.157.067-.217.067-.498 0-.287-.006-.34-.069-.516a1.553 1.553 0 0 0-.299-.54l-.088-.1.047.141Z'
      fill='#fff'
    />
    <Path
      d='M19.345 18.002c-.246-.526-.303-1.034-.168-1.508.014-.052.037-.093.052-.093.013 0 .073.031.129.07.114.076.34.203.948.532.756.41 1.189.728 1.482 1.091.257.317.416.68.493 1.121.043.25.017.852-.047 1.104-.204.794-.676 1.418-1.352 1.782a1.606 1.606 0 0 1-.197.096c-.01 0 .027-.09.08-.201.228-.472.254-.93.082-1.441-.106-.313-.32-.694-.752-1.34-.503-.748-.626-.949-.75-1.213ZM12.379 20.843c.689-.578 1.544-.988 2.325-1.114.402-.052.81-.036 1.207.046.499.127.946.412 1.177.75.227.331.325.62.427 1.262.04.252.083.507.095.564.076.333.225.599.408.732.29.212.794.226 1.288.034a.642.642 0 0 1 .16-.05c.018.018-.23.183-.405.27-.207.11-.439.167-.673.163-.452 0-.828-.229-1.142-.695a5.51 5.51 0 0 1-.307-.61c-.33-.75-.494-.978-.878-1.228-.334-.219-.766-.257-1.09-.1-.426.209-.545.75-.24 1.092.144.148.33.245.533.277a.567.567 0 0 0 .644-.566c0-.225-.088-.353-.307-.453-.3-.134-.622.023-.62.303 0 .12.052.194.173.25.077.033.079.035.015.023-.274-.057-.338-.387-.118-.605.266-.262.815-.147 1.003.212.08.15.088.45.02.631-.156.405-.605.619-1.063.502-.311-.079-.437-.164-.812-.548-.652-.667-.905-.797-1.844-.942l-.181-.029.205-.171Z'
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
        <Stop stopColor='#E05CB4' />
        <Stop offset={1} stopColor='#D831A0' />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default UNI;