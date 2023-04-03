import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

const imageList: string[] = [
  '/logos/html.png',
  '/logos/css.png',
  '/logos/javascript.png',
  '/logos/typescript.png',
  '/logos/sass.png',
  '/logos/react.png',
  '/logos/python.png',
  '/logos/php.png',
  '/logos/electron.png',
];

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
    <div className="pt-5 px-5 mb-5 rounded-2xl bg-white dark:bg-gray-100 md:mx-20 shadow-2xl">
      <Slide
        slidesToScroll={1}
        slidesToShow={2}
        indicators={true}
        responsive={responsiveSettings}
      >
        {imageList.map((image, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Image
              key={i}
              src={`${image}`}
              alt="techstacks"
              width={80}
              height={80}
              priority
              className="py-auto mx-1 md:mx-0"
            />
          );
        })}
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
