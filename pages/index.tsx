import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import profile from '@/public/profile-modified.png';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Techstacks from '@/components/TechStacks';
import ProjectList from '@/components/ProjectList';
import Contact from '@/components/Contact';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const updateDarkMode = (dark: boolean) => {
    setDarkMode(dark);
  };

  const moveInVariants: Variants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header></Header>
      <main className="bg-gray-100 dark:bg-gray-900 px-5 md:px-10">
        <section className="min-h-screen">
          <Navbar updateDarkMode={updateDarkMode}></Navbar>
          <div className="text-center md:p-10 py-10">
            {/* Title */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  y: 20,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                },
              }}
            >
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Sehwan Lee
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  y: 20,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    duration: 1,
                  },
                },
              }}
            >
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Full-Stack Software Developer
              </h3>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  y: 20,
                  opacity: 0,
                },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    duration: 1,
                  },
                },
              }}
            >
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Fullstack developer with experience in both web and mobile
                development. Strong interest in data management and am
                passionate about using my skills to achieve specific business
                goals.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.2,
                  duration: 1,
                },
              },
            }}
          >
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <Link href="https://github.com/nhistory" target="_blank">
                <AiFillGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/sehwann/" target="_blank">
                <AiFillLinkedin />
              </Link>
              <Link href="mailto:sehwan.lee.dev@gmail.com">
                <AiOutlineMail />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                y: 20,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.6,
                  duration: 1,
                },
              },
            }}
          >
            <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden my-20 md:h-96 md:w-96">
              <Image src={profile} alt="profile picture" />
            </div>
          </motion.div>
          <div className="text-center md:p-10 py-10">
            <motion.h3
              className="text-3xl font-medium py-2 mb-12 dark:text-white md:text-4xl"
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={moveInVariants}
            >
              Techstacks
            </motion.h3>
            <Techstacks />
          </div>
          <div className="text-center md:p-10 py-10">
            <motion.h3
              id="projects"
              className="text-3xl font-medium py-2 mb-12 dark:text-white md:text-4xl"
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={moveInVariants}
            >
              Projects
            </motion.h3>
            <ProjectList />
          </div>
          <div className="text-center md:p-10 py-10">
            <motion.h3
              id="contact"
              className="text-3xl font-medium py-2 mb-12 dark:text-white md:text-4xl"
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={moveInVariants}
            >
              Contact Me
            </motion.h3>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
