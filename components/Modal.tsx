import Image from 'next/image';
import { projects } from '@/data/projectData';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

interface IModalProps {
  projectIndex: number;
  closeModal: (arg: boolean) => void;
}

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

const Modal: React.FC<IModalProps> = ({ projectIndex, closeModal }) => {
  return (
    <>
      <motion.div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed mx-10 my-10 inset-0 z-50 outline-none focus:outline-none"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full mx-auto max-h-full max-w-4xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:border-gray-700 dark:bg-gray-800">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t dark:border-slate-600">
              <h3 className="text-3xl text-gray-900 dark:text-white font-semibold">
                {projects[projectIndex].title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none dark:text-white"
                onClick={() => closeModal(false)}
              >
                <AiOutlineClose />
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto">
              <Image
                className="object-cover h-82 w-full md:h-80"
                src={`${projects[projectIndex].modal.image}`}
                width={200}
                height={200}
                alt=""
                priority
              />
              <ul className="flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 border-t max-w-2xl mx-auto px-10 pt-8">
                <li className="w-full text-sm text-slate-900 p-6 bg-gray-100 border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center dark:bg-gray-700 dark:text-white">
                  <span className="mb-1 font-semibold font-display text-base text-teal-600 dark:text-teal-400">
                    {projects[projectIndex].modal.type}
                  </span>
                  {projects[projectIndex].modal.part}
                </li>
                <li className="w-full text-sm text-slate-900 p-6 bg-gray-100 border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center dark:bg-gray-700 dark:text-white">
                  <span className="mb-1 font-semibold font-display text-base text-teal-600 dark:text-teal-400">
                    Key Function
                  </span>
                  {projects[projectIndex].modal.keyFunc}
                </li>
                <li className="w-full text-sm text-slate-900 p-6 bg-gray-100 border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center dark:bg-gray-700 dark:text-white">
                  <span className="mb-1 font-semibold font-display text-base text-teal-600 dark:text-teal-400">
                    Tech Stacks
                  </span>
                  {projects[projectIndex].modal.stack}
                </li>
              </ul>
              <ul className="my-8 mx-10 md:mx-20 space-y-3 font-normal">
                {projects[projectIndex].modal.build.map((item, i) => {
                  return (
                    <li key={i} className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-teal-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="ml-3 leading-5 text-start text-gray-600 dark:text-gray-400">
                        {item}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end my-auto p-3 border-t border-solid border-slate-200 rounded-b dark:border-slate-600">
              {projects[projectIndex].link.demo && (
                <button
                  className="text-teal-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 dark:text-teal-400"
                  type="button"
                >
                  <a
                    target="_blank"
                    href={`${projects[projectIndex].link.demo}`}
                  >
                    Demo
                  </a>
                </button>
              )}
              {projects[projectIndex].link.code && (
                <button
                  className="text-teal-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 dark:text-teal-400"
                  type="button"
                >
                  <a
                    target="_blank"
                    href={`${projects[projectIndex].link.code}`}
                  >
                    Code
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
