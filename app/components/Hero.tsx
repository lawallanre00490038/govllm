import Image from 'next/image';
import React from 'react';

const HeroComponent = () => {
  return (
    <div className="mx-auto flex w-[301px] flex-col items-center justify-center gap-y-[10px] md:w-full md:gap-y-[40px]">
      <div className="mx-auto flex max-w-[215px] flex-col items-center justify-center gap-y-[10px] text-center md:max-w-[860px] md:space-y-[40px]">
        <button className="flex items-center justify-center gap-4 rounded-md p-2 text-center font-bold text-[#000000] shadow-xl md:text-[16px]">
          <Image src="/AI.png" width={10} height={10} alt="logo" />
          <span className="text[#000000] text-[4px] md:text-[16px]">
            Converse with your data.
          </span>
        </button>

        <h1 className="text-[12px] font-bold leading-tight md:text-[48px]">
          BizLLMiner: Make informed decisions with AI-Powered Analytics from you
          data.
        </h1>

        <p className="text-[4px] text-[#D9D9D9] md:text-[16px]">
          Harnesses the power of artificial intelligence to transform your
          business data into actionable insights, propelling you to new heights
          of success.
        </p>

        <button className="rounded-md bg-[#096809] p-4 text-[4px] font-bold text-white hover:bg-green-900 md:text-[16px]">
          Request for a Demo
        </button>
      </div>

      <Image
        src="/hero-main.png"
        width={964}
        height={600}
        alt="hero"
        objectFit="cover"
      />
    </div>
  );
};

export default HeroComponent;
