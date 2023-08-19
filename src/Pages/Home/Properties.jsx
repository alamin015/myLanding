import React, { useEffect, useState } from 'react';
import Property from '../../Components/Banner/Property/Property';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch('properties.json')
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className='' id='our_properties'>
      <div className='root'>
        <div className='container py-[60px]'>
          <div className='text-center max-w-[500px] w-full mx-auto'>
            <h3 className='md:text-5xl text-3xl font-bold mb-5 text-headingBlack'>
              Our Properties
            </h3>
            <p className='text-lg text-subHeading mb-[60px]'>
              Browse our latest listings and find your dream home
            </p>
          </div>

          <div className='w-full overflow-x-auto pb-6 md:pb-0'>
            <div className='flex items-center flex-nowrap gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8'>
              {properties.length &&
                properties.map((item) => (
                  <Property key={item.id} data={item} />
                ))}
            </div>
          </div>
          <div className='text-center md:mt-[60px] mt-6'>
            <button className='btn-property text-base'>
              View all properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
