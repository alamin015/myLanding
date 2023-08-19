import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='w-full h-screen bg-[#0d0b25f5] flex items-center justify-center'>
      <Bars
        height='80'
        width='80'
        color='#fff'
        ariaLabel='bars-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  );
};

export default Loader;
