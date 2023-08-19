import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { SocialIcon } from 'react-social-icons';
import Inststa from '../../lib/instagram/Inststa';
import useEmail from '../../hooks/useEmail';

const Team = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    fetch('team.json')
      .then((res) => res.json())
      .then((result) => setMember(result));
  }, []);

  const handleEmail = () => {
    useEmail();
  };

  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-[60px]' id='team'>
      <div className='root'>
        <div className='container overflow-x-hidden'>
          <div className='text-center max-w-[550px] w-full mx-auto'>
            <h3 className='md:text-5xl text-3xl font-bold mb-5 text-headingBlack'>
              Our Team
            </h3>
            <p className='text-lg text-subHeading mb-[60px]'>
              Meet our team of experienced real estate agents who are dedicated
              <br className='hidden md:block' /> to helping you find your dream
              home
            </p>
          </div>

          {/* test  */}

          <div>
            <Slider {...settings}>
              {member.length &&
                member.map((item) => {
                  return (
                    <div
                      className='mx-4 lg:h-[450px] h-[350px] min-w-[301px]'
                      key={item.id}
                    >
                      <div className='p-5 h-full w-full rounded-[20px] text-center border border-[#DADADC] bg-[#F7F9FD]'>
                        <div className='mb-8'>
                          <img
                            src={item.img}
                            className='lg:w-[254px] object-cover lg:h-[254px] w-[160px] h-[160px] rounded-full mx-auto'
                            alt=''
                          />
                        </div>
                        <h2 className='text-xl text-headingBlack uppercase'>
                          {item.name}
                        </h2>
                        <h4 className='mt-4 mb-5 text-lg text-[#373B44]'>
                          {item.role}
                        </h4>
                        <div className='flex items-center text-center justify-center gap-7'>
                          {item.fb && (
                            <SocialIcon
                              target='_blank'
                              url={item.fb}
                              className='rounded-full'
                              style={{ width: '32px', height: '32px' }}
                            />
                          )}
                          {item.insta && (
                            <a href={item.insta} target='_blank'>
                              <Inststa className='w-[52px]' />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className='text-center mt-[60px]'>
            <button className='btn-property text-base' onClick={handleEmail}>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
