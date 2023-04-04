import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { projects } from '@/data/projectData';
import { useState } from 'react';
import Modal from './Modal';

const ProjectList = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const handleClick = (key: number) => {
    console.log(key);
    setProjectIndex(key);
    showModal ? setShowModal(false) : setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const moveIn: Variants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="grid">
      {projects.map((project, i) => (
        // eslint-disable-next-line react/jsx-key
        <motion.button
          key={i}
          className="mx-auto mb-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl  dark:border-gray-700 dark:bg-gray-800 "
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={moveIn}
          onClick={() => handleClick(i)}
        >
          <Image
            className="object-cover rounded-t-lg h-80  md:h-60 md:w-60 md:rounded-none md:rounded-l-lg"
            src={`${project.image}`}
            width={400}
            height={400}
            alt=""
            priority
          />
          <div className="flex flex-col justify-between w-full items-center p-4 pt-8 leading-normal md:px-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <p className="mb-3 mx-auto font-normal text-gray-700 max-w-xs dark:text-gray-400">
              {project.description}
            </p>
            <div className="my-3 flex flex-wrap max-w-xs">
              {project.stack.map((item, j) => {
                return (
                  <span
                    key={j}
                    className="bg-teal-100 text-teal-800 text-xs font-medium mr-2 px-2.5 py-0.5 mb-1 rounded dark:bg-gray-700 dark:text-teal-400 border border-teal-400"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.button>
      ))}
      {showModal && (
        <Modal closeModal={closeModal} projectIndex={projectIndex} />
      )}
    </div>
  );
};

export default ProjectList;
