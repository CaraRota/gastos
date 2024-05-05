import React from "react";
import HeroImage from "./uicomponents/icons/HeroImage";

const Hero = () => {
    return (
        <section className='flex items-center justify-center flex-wrap font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md'>
            <div className='px-3 w-full lg:w-2/5'>
                <div className='mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left text-oracle-950'>
                    <h2 className='mb-4 text-3xl font-bold text-left lg:text-5xl'>
                        Exclusive Agency For
                        <span className='text-5xl text-oracle-500 leading-relaxeds'>
                            Technology
                        </span>
                        Provide Solution
                    </h2>

                    <p className='visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-oracle-950'>
                        Helping you maximize operations management with digitization
                    </p>
                </div>

                <div className='text-center lg:text-left'>
                    <a className='block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-oracle-50 bg-oracle-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block'>
                        Key Features
                    </a>

                    <a className='block visible py-4 px-8 text-xs font-semibold leading-none bg-oracle-50 rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-oracle-500'>
                        How We Work?
                    </a>
                </div>
            </div>
            <div className='px-3 mt-12 w-full lg:mb-0 lg:w-3/5'>
                <div className='flex justify-center items-center'>
                    <HeroImage className='block max-w-full h-auto align-middle lg:max-w-lg text-oracle-500' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
