import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto max-w-[80rem] py-[20px] flex items-center justify-between'>

            <div className='flex gap-2 items-center'>
                <Image  src="/mail.png" alt='mail' width={46} height={46} className='w-fit h-fit'/>
                <Link href="https://www.upwork.com/nx/find-work/best-matches" className='underline text-[#080415] font-[500] text-[1.375rem] leading-[136.364%]'>hussainiqtidar80@gmail.com</Link>
            </div>
            <div>
                <Image 
                src="/navmen.png" alt='cartoon' width={100} height={100}/>
            </div>
            <ul className='flex gap-10'>
                <Link href="/" className='text-[1.125rem] font-[400] text-[#51586A] leading-normal'>Projects</Link>
                <Link href="/" className='text-[1.125rem] font-[400] text-[#51586A] leading-normal'>Journey</Link>
                <Link href="/" className='text-[1.125rem] font-[400] text-[#51586A] leading-normal'>Services</Link>
                <Link href="/" className='text-[1.125rem] font-[400] text-[#51586A] leading-normal'>Contact</Link>



            </ul>
        </main>
    </section>
  )
}

export default Navbar