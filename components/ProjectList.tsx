import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { projects } from '@/data/projectData';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ProjectList = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const handleClick = (key: number) => {
    console.log(key);
    setProjectIndex(key);
    showModal ? setShowModal(false) : setShowModal(true);
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

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.3,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
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
          <div className="flex flex-col justify-between w-full p-4 pt-8 leading-normal md:px-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <p className="mb-3 mx-auto font-normal text-gray-700 max-w-xs dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </motion.button>
      ))}
      {showModal && (
        <>
          <motion.div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed mx-10 inset-0 z-50 outline-none focus:outline-none"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:border-gray-700 dark:bg-gray-800">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t dark:border-slate-600">
                  <h3 className="text-3xl text-gray-900 dark:text-white font-semibold">
                    {projects[projectIndex].title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They are slowed down by their perception of
                    themselves. If you are taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b dark:border-slate-600">
                  <button
                    className="text-teal-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 dark:text-teal-400"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default ProjectList;
