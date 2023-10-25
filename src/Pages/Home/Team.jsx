import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { SocialIcon } from "react-social-icons";
import Inststa from "../../lib/instagram/Inststa";
import useEmail from "../../hooks/useEmail";
import "swiper/css/bundle";

const Team = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((result) => setMember(result));
  }, []);

  const handleEmail = () => {
    useEmail();
  };

  // const params = {
  //   slidesPerView: '3',
  //   spaceBetween: 30,
  //   // centeredSlides: true,
  //   loop: true,
  //   autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     dynamicBullets: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     1024: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     640: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 10,
  //     },
  //   },
  // };

  return (
    <div className='py-[60px]' id='team'>
      <div className='root'>
        <div className='container'>
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
            <Swiper
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              // centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Autoplay]}
              className='mySwiper'
            >
              {member.length &&
                member.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className='lg:h-[450px] h-[350px] min-w-[301px] rounded-[20px] lg:mb-0 mb-14'>
                        <div className='p-5  h-full w-full rounded-[20px] text-center border border-[#DADADC] bg-[#F7F9FD]'>
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
                                style={{ width: "32px", height: "32px" }}
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
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className='text-center mt-[60px]'>
            <a
              href='tel:+61411891061'
              className='btn-property text-base inline-block'
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
