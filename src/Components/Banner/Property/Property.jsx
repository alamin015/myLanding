import React from 'react';
import LazyLoad from 'react-lazy-load';
import { CiLocationOn } from 'react-icons/ci';
import { LiaBedSolid } from 'react-icons/lia';
import { AiOutlineCar } from 'react-icons/ai';
import { FaSwimmingPool } from 'react-icons/fa';

const Property = ({ data }) => {
  const { img, title, state, location, facilities } = data;
  return (
    <div className='bg-white min-w-[301px] h-[400px] hover:shadow-xl rounded-[10px] p-5 border border-[#DADADC]'>
      <div className='relative rounded-[10px] overflow-hidden'>
        <LazyLoad height={191} threshold={0.5}>
          <img
            src={img}
            alt='image'
            className='w-full h-[191px] hover:scale-125 transition-all'
          />
        </LazyLoad>
        <div
          className={`absolute top-[10px] right-[10px] shadow-xl ${
            state === 'Sell' ? 'bg-[#20478C]' : 'bg-[#01C324]'
          } rounded-[35px] flex place-items-center justify-center text-sm text-menuColor w-[43px] h-[30px] p-1`}
        >
          <h4>{state}</h4>
        </div>
      </div>
      <h3 className='mt-4 mb-3 text-xl uppercase'>{title}</h3>
      <p className='text-[#696C72] text-lg flex items-start gap-2 mb-4'>
        <CiLocationOn className='mt-1' />
        {location}
      </p>
      <p className='flex items-center gap-4 text-lg text-[#696C72]'>
        <span className='flex items-center gap-2 text-lg text-[#696C72]'>
          <LiaBedSolid size={16} />
          {facilities.room}
        </span>
        <span className='flex items-center gap-2 text-lg text-[#696C72]'>
          <FaSwimmingPool size={16} />
          {facilities.pool}
        </span>
        <span className='flex items-center gap-2 text-lg text-[#696C72]'>
          <AiOutlineCar size={16} />
          {facilities.car}
        </span>
        <span>|</span>
        <span>{facilities.extra}</span>
      </p>
    </div>
  );
};

export default Property;
