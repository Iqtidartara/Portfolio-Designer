import Image from "next/image";
import Link from "next/link";
import React from "react";

const Backround = () => {
  return (
    <section className="w-full bg-[#5D3BEE] py-16">
      <main className="mx-auto max-w-[80rem] ">
        {/* tittle */}
        <div className="flex  items-center justify-between p-[5.38rem]">
          <h2 className="heading">Take a look at my recent projects</h2>

          <p className="text-[#FFF] text-[1.125rem] font-[500] leading-[166.667%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna,
            non nisl tincidunt ut elementum turpis.
          </p>
        </div>
        {/* cards  */}


        <div className="bg-[#FBFAFF] max-w-[35.625rem]  flex items-center justify-between">

<div className="flex flex-col items-start justify-start w-1/2 py-[3rem] pl-[3rem]">
  <h2 className="text-[#080415] text-[2rem] font-[500] leading-[125%] tracking-[-0.08rem] ">Wally Website</h2>
  <p className="text-[1rem] text-[#51586A] font-[400] leading-[143.75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odio.</p>
  <Link href={"#"} className="underline font-[700] text-[1.125rem] leading-[166.667%] ]">Case Study</Link>
</div>
      <div className="w-1/2"><Image alt="trial"  src={"/bv.jpg"} className="" width={570} height={242}/></div>   
        </div>
      </main>
    </section>
  );
};

export default Backround;
