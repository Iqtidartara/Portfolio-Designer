import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <section className='w-full bg-white shadow-md'>
      <main className='mx-auto max-w-[80rem] py-4 md:py-6 flex items-center justify-between'>
        {/* Left section */}
        <div className='flex items-center space-x-2 md:space-x-4'>
          <Image src="/mail.png" alt='mail' width={46} height={46} className='w-fit h-fit' />
          <Link href="https://www.upwork.com/nx/find-work/best-matches" className='underline text-[#080415] font-semibold text-lg leading-tight md:text-xl md:leading-snug'>hussainiqtidar80@gmail.com</Link>
        </div>

        {/* Center section (logo or other icon) */}
        <div className='hidden md:block'>
          <Image src="/navmen.png" alt='cartoon' width={100} height={100} />
        </div>

        {/* Right section (navigation links) */}
        <ul className='hidden md:flex gap-10'>
          <Link href="/" className='text-lg font-normal text-[#51586A] leading-normal hover:underline'>Projects</Link>
          <Link href="/" className='text-lg font-normal text-[#51586A] leading-normal hover:underline'>Journey</Link>
          <Link href="/" className='text-lg font-normal text-[#51586A] leading-normal hover:underline'>Services</Link>
          <Link href="/" className='text-lg font-normal text-[#51586A] leading-normal hover:underline'>Contact</Link>
        </ul>

        {/* Mobile navigation (burger icon) */}
        <div className='md:hidden'>
          {/* You can add your mobile navigation button here */}
        </div>
      </main>
    </section>
  );
};

export default Navbar;
