import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import Html from '../public/logos/html.png';
import Css from '../public/logos/css.png';
import Javascript from '../public/logos/javascript.png';
import Typescript from '../public/logos/typescript.jpg';
import Sass from '../public/logos/sass.png';
import React from '../public/logos/react.png';
import Python from '../public/logos/python.png';

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 7,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 300,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
];

const Techstacks = () => {
  return (
    <div className="pt-5 px-5 mb-5 rounded-2xl dark:bg-white md:mx-20">
      <Slide
        slidesToScroll={1}
        slidesToShow={2}
        indicators={true}
        responsive={responsiveSettings}
      >
        <Image
          src={Html}
          alt="html5"
          height={100}
          className="grayscale ml-5 dark:bg-white"
        />
        <Image
          src={Css}
          alt="css3"
          height={100}
          className="grayscale ml-3 dark:bg-white"
        />
        <Image
          src={Javascript}
          alt="javascript"
          height={100}
          className="grayscale dark:bg-white"
        />
        <Image
          src={Typescript}
          alt="typescript"
          height={100}
          className="grayscale dark:bg-white"
        />
        <Image
          src={Sass}
          alt="sass"
          height={100}
          className="grayscale dark:bg-white"
        />
        <Image
          src={React}
          alt="react.js"
          height={100}
          className="grayscale ml-7 dark:bg-white"
        />
        <Image
          src={Python}
          alt="python"
          height={100}
          className="grayscale ml-3 dark:bg-white"
        />
      </Slide>
    </div>
  );
};

export default Techstacks;
