import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollUp = () => {
  const [arrow, setArrow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 120) {
        setArrow(true);
      } else {
        setArrow(false);
      }
    });
  }, []);

  const handleScroll = () => {
    scrollTo(0, 0);
  };

  return (
    <div className={`fixed right-6 bottom-6 ${arrow ? 'block' : 'hidden'}`}>
      <div
        onClick={handleScroll}
        className='w-12 cursor-pointer h-12 rounded-full border bg-primary text-menuColor border-menuColor flex items-center justify-center'
      >
        <AiOutlineArrowUp size={30} />
      </div>
    </div>
  );
};

export default ScrollUp;
