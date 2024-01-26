import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <section>
        <main className='mx-auto max-w-[80rem] flex items-center justify-between '>


        <div className=''>
          <Image src="/navmen.png" alt='cartoon' width={100} height={100} />
        </div>

        {/* Right section (navigation links) */}
        <ul className=' md:flex gap-10'>
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
        <Separator  className='max-w-[80rem]'/>
    </section>
  )
}

export default Footer