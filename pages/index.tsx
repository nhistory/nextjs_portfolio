import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Image from 'next/image';
import profile from '../public/profile-modified.png';
import feStack from '../public/FE.png';
import beStack from '../public/BE.png';
import otherStack from '../public/Other.png';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Techstacks from '@/components/TechStacks';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const updateDarkMode = (dark: boolean) => {
    setDarkMode(dark);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header></Header>
      <main className="bg-white dark:bg-gray-900 px-10">
        <section className="min-h-screen">
          <Navbar updateDarkMode={updateDarkMode}></Navbar>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sehwan Lee
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full-Stack Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Fullstack developer with experience in both web and mobile
              development. Strong interest in data management and am passionate
              about using my skills to achieve specific business goals.
            </p>
          </div>
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
          <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden my-20 md:h-96 md:w-96">
            <Image src={profile} alt="profile picture" />
          </div>
          <div className="text-center p-10 py-10">
            <h3 className="text-3xl font-medium py-2 mb-12 dark:text-white md:text-4xl">
              Techstacks
            </h3>
            <Techstacks></Techstacks>
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
        </section>
      </main>
    </div>
  );
}
