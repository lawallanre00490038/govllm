import Image from 'next/image';
import React from 'react';

const HeroComponent = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-[10px] md:mt-[112px] md:gap-y-[40px]">
      <div className="mx-auto flex max-w-[215px] flex-col items-center justify-center gap-y-[20px] text-center md:max-w-[860px]">
        <button className="flex items-center justify-center gap-4 rounded-md p-2 text-center font-bold text-[#000000] shadow-xl md:h-[42px] md:w-[244px] md:text-[16px]">
          <Image src="/AI.png" width={10} height={10} alt="logo" />
          <span className="text[#000000] text-[4px] md:text-[16px]">
            Converse with your data.
          </span>
        </button>

        <h1 className="text-[12px] font-bold leading-tight text-[#000000] md:text-[48px]">
          BizLLMiner: Make informed decisions with AI-Powered Analytics from you
          data.
        </h1>

        <p className="text-[4px] text-black/50 md:text-[16px] lg:max-w-[600px]">
          Harnesses the power of artificial intelligence to transform your
          business data into actionable insights, propelling you to new heights
          of success.
        </p>

        <button className="my-[20px] rounded-md bg-[#096809] text-[4px] font-bold text-white hover:bg-green-900 md:h-[48px] md:w-[213px] md:text-[16px]">
          Request for a Demo
        </button>
      </div>

      <div className="relative">
        <Image
          src="/hero-main.png"
          width={964}
          height={600}
          alt="hero"
          objectFit="cover mt-[60px]"
        />

        <Image
          src="/btn_hero_img.png"
          width={226}
          height={84}
          alt="shape"
          className="contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform shadow-xl hover:cursor-pointer hover:shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroComponent;
