import React from 'react';
import image from '../../assets/about/about.png';
import auctioneer from '../../assets/smallLogo/auctioneer.png';
import men from '../../assets/smallLogo/men.png';
import trophy from '../../assets/smallLogo/trophy.png';
import useEmail from '../../hooks/useEmail';

const About = () => {
  const handleEmail = () => {
    useEmail();
  };
  return (
    <div className='py-[60px]' id='about_us'>
      <div className='root'>
        <div className='container'>
          <div className='lg:flex lg:items-start lg:justify-between gap-8'>
            <div className='text-left lg:w-1/2'>
              <h3 className='md:text-5xl text-3xl font-bold text-headingBlack'>
                About Us
              </h3>
              <p className='sm:text-xl text-lg text-[#050B15] uppercase md:my-8 my-7'>
                Inspire devotion dedication Drive
              </p>
              <div className='text-[#373B44]'>
                <p className='text-[#373B44] text-lg md:mb-5 mb-6'>
                  Direct in their approach and dedicated to providing a quality
                  of service that is precise Korhani & Alice Property Group are
                  highly connected and leverages their loyal network in favor of
                  success for both sides of the sale, Referred by those who
                  value quality service and a prompt reply it's about being the
                  first to respond at every opportunity.
                </p>
                <p className='text-[#373B44] text-lg mb-8'>
                  Constantly pushing the expectation for service, the team leads
                  by example. A consistently high achieving Real Estate company
                  and dedicated enthusiasts, the team at K&A-PG combine their
                  intricate local market knowledge with contagious enthusiasm
                  and exceptional communication skills. Along side Mohammed
                  Korhani Founder at Korhani & Alice Property Group an industry
                  brand name that is synonymous with his own values of
                  professionalism and market leading innovation
                </p>
              </div>
              <div className='flex items-start justify-between gap-2'>
                <div>
                  <h3 className='uppercase mb-8 text-headingBlack text-xl'>
                    SPECIALITIES
                  </h3>
                  <p className='flex items-center gap-3 mb-5'>
                    <img src={men} alt='man' />
                    <span className='text-[#373B44] text-lg'>
                      Sales Specialist
                    </span>
                  </p>
                  <p className='flex items-center gap-3'>
                    <img src={auctioneer} alt='auction' />
                    <span className='text-[#373B44] text-lg'>Auctioneer</span>
                  </p>
                </div>
                <div>
                  <h3 className='uppercase mb-8 text-headingBlack text-xl'>
                    AWARDS
                  </h3>
                  <p className='flex items-center gap-3'>
                    <img src={trophy} alt='auction' />
                    <span className='text-[#373B44] text-lg'>
                      Trusted Agent 2022, 2023
                    </span>
                  </p>
                </div>
              </div>
              <div className='md:mt-[40px] mt-7'>
                <button
                  className='btn-property text-base'
                  onClick={handleEmail}
                >
                  Contact us
                </button>
              </div>
            </div>
            <div className='lg:w-1/2 lg:grow-1 mt-8 lg:mt-0'>
              <img src={image} alt='image' className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
