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
import feStack from '../public/FE.png';
import beStack from '../public/BE.png';
import otherStack from '../public/Other.png';

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
    <div className="pt-5 px-5 mb-5 rounded-2xl dark:bg-white md:mx-20 shadow-2xl">
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
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="mb-12 lg:mb-0">
          <Image
            src={feStack}
            className="img-fluid grayscale rounded-2xl shadow-2xl"
            alt="Front end stack"
          />
        </div>

        <div className="mb-12 lg:mb-0">
          <Image
            src={beStack}
            className="img-fluid grayscale rounded-2xl shadow-2xl"
            alt="Back end stack"
          />
        </div>

        <div className="mb-12 lg:mb-0">
          <Image
            src={otherStack}
            className="img-fluid grayscale rounded-2xl shadow-2xl"
            alt="Other stack"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Techstacks;
