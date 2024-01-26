import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <section className='w-full bg-[#FBFAFF]'>
      <main className='mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center'>
        {/* Image div */}
        <div className='flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0'>
          <Image
            src='/bdsk.png'
            alt='portfolio'
            width={514}
            height={605}
          />
        </div>

        {/* Content div */}
        <div className='p-4 md:p-8 w-full md:w-1/2 flex flex-col'>
          <h2 className='text-4xl md:text-5xl text-[#080415] font-semibold leading-tight tracking-tight'>
            An Interactive Developer
          </h2>
          <p className='text-[#51586A] text-lg md:text-xl font-normal leading-normal mt-4 md:mt-6'>
            An Interactive Developer merges creativity and technical skills to develop captivating digital experiences. They specialize in crafting visually appealing and user-friendly interfaces for websites and applications.
          </p>

          <div className='mt-6'>
            <Button className='bg-[#5D3BEE] text-white text-lg md:text-xl py-4 px-6 md:py-6 md:px-8 rounded-none mt-4 md:mt-6'>
              Book a Call
            </Button>
            <Link href="/" className='underline pl-4 md:pl-6 font-semibold text-[#080415] text-lg md:text-xl mt-4 md:mt-6'>
              My Works
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomeSection;
