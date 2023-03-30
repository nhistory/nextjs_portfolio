import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Compcar project',
    description:
      'FARM stack application to search used car with data visualization',
    stack: ['React', 'FastAPI', 'MongoDB', 'Python', 'JavaScript'],
    image: '/projects/compcar.jpg',
    lens: '/projects/lens.png',
    link: [
      {
        demo: 'https://compcar-front.onrender.com',
        code: 'https://github.com/Hongseoupyun/compcar-ui',
      },
    ],
  },
  {
    title: 'Music player',
    description: 'Music player desktop application with Electron',
    stack: ['JavaScript', 'Electron', 'jQuery'],
    image: '/projects/musicPlayer.jpg',
    lens: '/projects/lens.png',
    link: [{ code: 'https://github.com/nhistory/electron-music-player' }],
  },
  {
    title: 'Project manage app',
    description:
      'A MERN stack application to manage clients and project data that can make CRUD functionality with simple web page.',
    stack: ['React', 'NodeJS', 'express', 'MongoDB'],
    image: '/projects/compcar.jpg',
    lens: '/projects/lens.png',
    link: [{ code: 'https://github.com/nhistory/project-manage-app' }],
  },
];

const ProjectList = () => {
  const moveInVariants: Variants = {
    hide: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="grid">
      {projects.map((project) => (
        // eslint-disable-next-line react/jsx-key
        <motion.div
          className="mx-auto mb-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl  dark:border-gray-700 dark:bg-gray-800 "
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={moveInVariants}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-80"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 grayscale hover:grayscale-0 md:h-60 md:w-80 md:rounded-none md:rounded-l-lg"
              src={`${project.image}`}
              width={500}
              height={500}
              alt=""
            />
          </a>
          <div className="flex flex-col justify-between w-full p-4 pt-8 leading-normal md:px-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectList;
