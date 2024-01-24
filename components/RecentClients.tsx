import Image from "next/image";
import React from "react";

const RecentClients:React.FC = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[70rem] py-8 md:py-16 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex py-8">
        
          <h2 className="text-2xl md:text-3xl text-[#080415] leading-7 md:leading-10 font-semibold text-center md:text-left ">
            Meet my <br className="md:block hidden"/> recent clients
          </h2>
        </div>
<div className="flex flex-col items-start justify-start ">
        <div className="flex flex-wrap justify-center md:justify-start gap-16">
          {/* Clients 1-4 */}
          {[1, 2, 3, 4].map((clientNumber) => (
            <div key={clientNumber} className="flex items-center justify-start gap-2">
              <Image src={`/${clientNumber}.png`} alt={`client${clientNumber}`} width={100} height={32}  />
            
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-14 mt-8">
          {/* Clients 5-8 */}
          {[5, 6, 7, 8].map((clientNumber) => (
            <div key={clientNumber} className="flex items-center justify-start gap-2 ">
              <Image src={`/${clientNumber}.png`} alt={`client${clientNumber}`} width={100} height={32} />
             
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default RecentClients;
