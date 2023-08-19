import React from 'react';

const slick = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className='hidden'>
      <div
        className={className}
        style={{ ...style, display: 'none', background: 'red' }}
        onClick={onClick}
      />
    </div>
  );
};

export default slick;
