import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is the primary objective of Reactive Growth?",
    answer:
      "Reactive Growth's primary objective is to empower businesses with strategic and effective marketing solutions. Focused on driving growth, they aim to elevate online presence, optimize sales, and provide tailored strategies, ensuring clients achieve sustained success and maximize their business potential.",
  },
  {
    question: "What do you mean by 'selling systems'?",
    answer:
      "'Selling systems' refers to structured and optimized processes designed to enhance sales performance. It involves methodically organizing strategies, technologies, and workflows to streamline the sales process, improve efficiency, and increase the likelihood of successfully converting leads into customers.",
  },
  {
    question:
      "I've tried marketing agencies before and failed. How are you different?",
    answer:
      "Reactive Growth differentiates by offering personalized strategies, data-driven insights, and a client-centric focus. Unlike past experiences, we prioritize measurable results and sustainable growth. Our innovative approach ensures success where other marketing agencies may have fallen short.",
  },
  {
    question: "Can you automate the selling process?",
    answer:
      "Yes, Reactive Growth specializes in automating the selling process. Through strategic implementation of marketing automation tools and technologies, we streamline workflows, nurture leads, and optimize conversions, enabling businesses to operate efficiently and effectively in driving sales.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "All costs will be discussed upfront during the strategy session. We believe in transparency and ensuring our clients are well-informed every step of the way. Remember, if you have any more questions, feel free to reach out to us directly. Our team at Reactive Growth is always here to help!",
  },
];

const Faq: React.FC = () => {
  return (
    <section className="w-full relative overflow-x-clip">
      {/* Your existing code remains unchanged */}

    
      <div className="w-full max-w-[60rem] mx-auto px-4 md:py-36 py-1 text-center ">
      <div className="flex  flex-col items-start justify-center text-start">
        <h2 className=" text-[3.5rem] font-[500]">
          A few questions <br/> clients normally ask me
        </h2>
      </div>
        <div className="flex flex-col gap-3 md:mt-[3.94rem] mt-[1.5rem]">
          {faqs.map((faq, index) => (
            <Accordion
              key={`faq-${index}`}
              type="single"
              collapsible
              className="rounded-md border border-opacity-10 accoedianBorder px-4 bg-[#e1e3e4] p-[1.14rem]"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-[#080415] text-[1rem] md:text-center text-start">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#51586A] text-[.9rem] md:text-center text-start mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <div className="bgfaq w-[84rem] h-[44rem] absolute z-[-1] top-36"></div>
    </section>
  );
};

export default Faq;
