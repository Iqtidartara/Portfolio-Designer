import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const HomeSection = () => {
  return (
    <section className='w-full bg-[#FBFAFF]'>
        <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row items-center justify-center'>
            <div className='flex flex-col items-start w-1/2 '>
                <Image
                src="/Group 18482.png"
                alt='portfolio'
                width={514}
                height={605} />
            </div>
            {/* content div */}
            <div className='p-[3rem] w-1/2 flex flex-col'>
<h2 className='text-[5rem] text-[#080415] font-[500] leading-[95%] tracking-[-0.2rem]'>An Interactive Designer</h2>
<p className='text-[#51586A] text-[1.125rem] font-[400] leading-[166.667% ] mt-[1.25rem]'>
An Interactive Designer merges creativity and technical skills to design captivating digital experiences. They specialize in crafting visually appealing and user-friendly interfaces for websites and applications.</p>

<div className=' '>
<Button className='bg-[#5D3BEE] text-[#FFF] text-[1.125rem] rounded-none py-7 px-7 mt-[3rem]'>Book a Call</Button>
<Link href={"/"} className='underline pl-10 font-[700] text-[#080415] text-[1.125rem]' >My Works</Link>

</div>

            </div>
        </main>
    </section>
  )
}

export default HomeSection