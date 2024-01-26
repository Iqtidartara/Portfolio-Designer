import Image from "next/image";
import React from "react";

const specialtiesData = [
  {
    icon: "/icon.png",
    title: "Product design",
    description:
      "I specialize in transforming innovative concepts into market-ready products, blending design and technology with a keen eye for detail. Expert in cross-functional collaboration, ensuring efficient development and exceeding customer expectations.",
  },
  {
    icon: "/icon(1).png",
    title: "UI/UX Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut laborum, a eos in dolore commodi nam debitis cumque tempora nulla provident veniam fuga pariatur impedit facilis quo repudiandae corporis quaerat.",
  },
  {
    icon: "/icon(2).png",
    title: "Interactive design",
    description:
      "Lorem ipsum dolor sit amet, solor adipiscing elit. Non nisl solor ut elementum turpis. kcnwdbvyugjyuh xyusvc ujsgcb gsjvbx ysgjcbyukasjcv yu",
  },
];

const Specialities = () => {
  return (
    <section className="w-full">
      <main className="mx-auto max-w-[80rem] py-8 md:py-12">
        <h1 className="text-[#080415] text-3xl font-bold flex items-center justify-center pt-6 md:pt-8">
          Specialities
        </h1>
        <p className="text-[1.125rem] text-[#51586A] font-normal leading-[166.667%] text-center pb-6 md:pb-12">
          As a frontend developer specializing in JavaScript, React, and Next.js
          frameworks, my expertise includes:
        </p>

        <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 items-center justify-center">
          {specialtiesData.map((specialty, index) => (
            <div
              key={index}
              className="shadow-md border-0 bg-[#FBFAFF] p-6 mb-4 md:mb-8 mx-4 md:mx-10 w-full md:w-[29.125rem]"
            >
              <Image
                src={specialty.icon}
                alt={`card ${index + 1}`}
                width={74}
                height={74}
              />
              <h2 className="font-bold text-[#080415] text-2xl leading-[125%] tracking-[-0.08rem] mt-4 md:mt-6">
                {specialty.title}
              </h2>
              <p className="text-[#51586A] text-[1.125rem] font-normal leading-[166.667%] mt-4">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Specialities;
