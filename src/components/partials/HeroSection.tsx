import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiInstagram, FiTwitter, FiFacebook, FiDribbble, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";


import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import  TypedText  from './TypedText';


const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/man.png" width={250} height={250} alt="avatar" />
        </div>
        <h1 className="mt-4 text-4xl font-bold ">Omar Essam Eldin</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <TypedText
            strings={['Frontend Developer', 'MEARN Fullstack Developer' ]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://github.com/OmarEssam01">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiGithub size={30} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/omar-essam-el-din-804801268">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiLinkedin size={30} />
            </a>
          </Link>
          <Link href="mailto:omaressam01@gmail.com">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiMail size={30} />
            </a>
          </Link>
        </div>
        
      </div>

      <div className="absolute bottom-10 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
