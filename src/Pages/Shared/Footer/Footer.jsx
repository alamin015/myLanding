import React from 'react';
import logo from '../../../assets/logo/white.png';

const Footer = () => {
  const quickLinks = [
    {
      link: '#home',
      label: 'Home',
    },
    {
      link: '#our_properties',
      label: 'Our properties',
    },
    {
      link: '#about_us',
      label: 'About Us',
    },
  ];
  const supportLinks = [
    {
      link: '#contact',
      label: 'Contact us',
    },
    {
      link: '#privacy',
      label: 'Privacy Policy',
    },
    {
      link: '#condition',
      label: 'Terms & Coditions',
    },
  ];
  return (
    <footer className='bg-[#050B15] pt-[60px]'>
      <div className='root'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-5'>
            <div className='text-center mx-auto sm:text-left'>
              <img
                src={logo}
                alt='logo'
                className='w-[80px] h-[30px] sm:w-[110px] sm:h-[45px]'
              />
            </div>
            <div className='text-center sm:text-left'>
              <h3 className='text-[#FBFCFE] text-xl '>QUICK LINKS</h3>
              <ul>
                {quickLinks.map((item) => {
                  return (
                    <li key={Math.random()} className='mt-[20px]'>
                      <a href={item.link} className='text-[#D2DAE8] text-lg'>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <h3 className='text-[#FBFCFE] text-xl'>Support</h3>
              <ul>
                {supportLinks.map((item) => {
                  return (
                    <li key={Math.random()} className='mt-[20px]'>
                      <a href={item.link} className='text-[#D2DAE8] text-lg'>
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <h3 className='text-[#FBFCFE] text-xl'>Head Office</h3>
              <p className='text-[#D2DAE8] text-lg mt-5'>Sydney, NSW 2000</p>
              <p className='text-[#D2DAE8] text-lg mt-5'>Sydney, NSW 2000</p>
              <h3 className='text-[#FBFCFE] text-xl my-5'>Newsletter</h3>
              <div className='relative'>
                <input
                  type='text'
                  className='absolute left-0 top-0 bg-transparent border rounded-tl-[30px] rounded-bl-[30px] myClass  h-[40px] border-[#FBFCFE] border-r-0 outline-none pl-3 text-[#FBFCFE] text-lg'
                />
                <button className='absolute right-0 top-0  bg-[#FBFCFE] w-[130px] h-[40px] rounded-[30px] border border-[#FBFCFE] -ml-3 text-[#20478C] text-base'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {/* unlock section  */}
          <div className='p-8 bg-[#20478C] mt-[120px] rounded-[20px]'>
            <div className='md:flex md:items-center md:justify-between text-center sm:text-left'>
              <div>
                <h2 className='text-[#FBFCFE] text-3xl'>
                  Unlock Your Dream Home
                </h2>
                <p className='mt-5 text-[#D2DAE8] text-lg mb-6 md:mb-0'>
                  Connect with Expert Real Estate Broker Mohammad Korhani Today
                </p>
              </div>
              <div>
                <button className='btn-primary'>Contact us</button>
              </div>
            </div>
          </div>
          <p className='text-center text-[#D2DAE8] text-lg py-5 mt-[90px]'>
            © copyright - K & A Property group- {new Date().getUTCFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
