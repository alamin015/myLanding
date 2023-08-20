import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/trusted-logo/t1.png';
import img2 from '../../assets/trusted-logo/t2.png';
import img3 from '../../assets/trusted-logo/t3.png';
import img4 from '../../assets/trusted-logo/t4.png';
import img5 from '../../assets/trusted-logo/t5.png';

const LogoSlider = () => {
  return (
    <div className='mt-[60px]'>
      <h3 className='text-3xl text-menuColor text-left mb-5'>
        Our trusted partners
      </h3>
      <Marquee autoFill pauseOnHover speed={30}>
        <div className='flex items-center gap-5'>
          <img src={img1} alt='img1' className='w-[178px] h-[69px]' />
          <img src={img2} alt='img2' className='w-[152px] h-[105px]' />
          <img src={img3} alt='img3' className='w-[99px] h-[99px]' />
          <img src={img4} alt='img4' className='w-[99px] h-[99px]' />
          <img src={img5} alt='img5' className='w-[185px] h-[37px] mr-3' />
        </div>
      </Marquee>
    </div>
  );
};

export default LogoSlider;
