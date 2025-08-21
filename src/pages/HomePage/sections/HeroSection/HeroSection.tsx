import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[799px] bg-gradient-to-r from-gray-900 to-gray-800">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      />
      <div className="relative flex flex-col items-center justify-center h-full px-4 z-10">
        <div className="flex flex-col items-center space-y-4 max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#c99e67] text-[28px] text-center tracking-[16.80px] leading-[33.6px] whitespace-nowrap">
              PETER
            </div>
            <div className="[font-family:'Great_Vibes',Helvetica] font-normal text-[#f7f6f5] text-[28px] text-center tracking-[16.80px] leading-[33.6px] whitespace-nowrap ml-1">
              J
            </div>
            <div className="[font-family:'Arial-Narrow',Helvetica] font-normal text-[#c99e67] text-[28px] text-center tracking-[16.80px] leading-[33.6px] whitespace-nowrap ml-1">
              WEBB:
            </div>
          </div>

          <div className="[font-family:'Spectral',Helvetica] font-light text-white text-[37px] text-center tracking-[2.22px] leading-[44.4px] whitespace-nowrap mt-4">
            LAWYER. BUSINESS ADVISOR. ENTREPRENEUR.
          </div>

          <div className="[font-family:'Spectral',Helvetica] font-normal text-white text-[25px] text-center tracking-[5.00px] leading-[30px] whitespace-nowrap mt-4">
            An experienced business advisor, lawyer, entrepreneur, and family man
          </div>

          <div className="w-[70px] h-0.5 bg-[#c99e67] rounded-[5px] mt-8" />
        </div>
      </div>
    </section>
  );
};