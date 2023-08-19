import React from 'react';
import LogoSlider from '../../Components/Banner/LogoSlider';
const Banner = () => {
  return (
    <div className='todo pt-[96px] pb-10' id='home'>
      <div className='root'>
        <div className='container'>
          <div className='flex items-center justify-start sm:pt-[140px] pt-[70px]'>
            <div>
              <h2 className='md:text-5xl text-3xl uppercase font-bold text-white'>
                inspire devotion,
                <br className={`hidden md:block`} /> dedication and drive
              </h2>
              <p className='mt-5 mb-10 text-lg text-menuColor'>
                Whether you are looking for a new home, a commercial space, or
                an investment opportunity, we have the
                <br className={`hidden md:block`} /> expertise and the network
                to help you find the best deal.
              </p>
              <div className='sm:flex sm:items-center gap-5'>
                <button className='btn-secondary  mb-5 sm:mb-0'>
                  Our properties
                </button>
                <button className='btn-secondary-outline'>About us</button>
              </div>
              <LogoSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
