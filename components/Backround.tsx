import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Wally Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odio.",
    imageUrl: "/bv.jpg",
    caseStudyLink: "#",
  },
  {
    title: "Another Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odio.",
    imageUrl: "/df.jpg",
    caseStudyLink: "#",
  },
  {
    title: "Another Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odio.",
    imageUrl: "/gda4.png",
    caseStudyLink: "#",
  },
  {
    title: "Another Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odio.",
    imageUrl: "/re.jpg",
    caseStudyLink: "#",
  },
  // Add more projects as needed
];

const Background = () => {
  return (
    <section className="w-full bg-[#5D3BEE] py-16">
      <main className="mx-auto max-w-[80rem] px-4">
        <div className="flex flex-col items-center justify-between px-4 md:p-[5.38rem]">
          <h2 className="heading text-center md:text-left">Take a look at my recent projects</h2>
          <p className="text-[#FFF] text-[1.125rem] font-[500] leading-[166.667%] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna,
            non nisl tincidunt ut elementum turpis.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#FBFAFF] max-w-[35.625rem] md:flex items-center justify-between mb-8"
            >
              <div className="flex flex-col items-start justify-start w-full md:w-1/2 py-[3rem] md:py-0 pl-[3rem]">
                <h2 className="text-[#080415] text-[1.5rem] md:text-[2rem] font-[500] leading-[125%] tracking-[-0.08rem]">
                  {project.title}
                </h2>
                <p className="text-[1rem] md:text-[1rem] text-[#51586A] font-[400] leading-[143.75%]">
                  {project.description}
                </p>
                <Link
                  href={project.caseStudyLink}
                  className="underline font-[700] text-[1.125rem] leading-[166.667%]"
                >
                  Case Study
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  alt={project.title}
                  src={project.imageUrl}
                  className="object-cover w-full h-48 md:h-auto md:w-full"
                  width={570}
                  height={242}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Background;
