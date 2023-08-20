import React from 'react';
import LogoSlider from '../../Components/Banner/LogoSlider';
const Banner = () => {
  return (
    <div className='todo pt-[46px] pb-10' id='home'>
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
                an investment <br className={`hidden md:block`} /> opportunity,
                we have the expertise and the network to help you find the best
                deal.
              </p>
              <div className='sm:flex sm:items-center gap-5'>
                <button className='btn-secondary  mb-5 sm:mb-0'>
                  <a href='#our_properties'>Our properties</a>
                </button>
                <button className='btn-secondary-outline'>
                  <a href='#about_us'>About us</a>
                </button>
              </div>
              <div className=''>
                <LogoSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
