import React, { useState, useEffect } from 'react';
import logo from '../../../assets/logo/white.png';
import logoBlack from '../../../assets/logo/black.png';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);
  const handleMobileMenu = () => {
    setMobileHeader(!mobileHeader);
  };
  const menu = [
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
      label: 'About us',
    },
    {
      link: '#team',
      label: 'Team',
    },
  ];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 80) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    });
  }, []);
  return (
    <header
      className={`fixed z-[999999] top-0 transition-all left-0 w-full bg-transparent ${
        headerActive ? 'shadow-xl bg-white' : 'bg-transparent'
      }`}
    >
      <div className='root'>
        <div
          className={`container flex  py-5 items-center justify-between gap-[140px]`}
        >
          <a href='#home' className=''>
            <img
              src={headerActive ? logoBlack : logo}
              className='w-[110px] h-[45px]'
              alt='logo'
            />
          </a>
          <div className='hidden lg:flex items-center justify-between  flex-grow'>
            {/* menu mapping  */}
            <ul className='flex items-center gap-8'>
              {menu.map(({ link, label }) => {
                return (
                  <a
                    href={link}
                    key={link}
                    className={`text-lg ${
                      headerActive
                        ? 'text-[#050B15] hover:text-primary'
                        : 'text-menuColor'
                    }  hover:underline`}
                  >
                    {label}
                  </a>
                );
              })}
            </ul>
            {/* header btn  */}
            <div className='flex items-center gap-8'>
              <button
                className={`${
                  headerActive ? 'activeBtn-primary' : 'btn-primary'
                }`}
              >
                Contact us
              </button>
              <button
                className={`${
                  headerActive ? 'activeBtn-primary' : 'btn-primary'
                } flex items-center gap-1`}
              >
                <IoLogoWhatsapp
                  size={24}
                  height={24}
                  className='text-[#4fce5d]'
                />
                WhatsApp
              </button>
            </div>
          </div>
          {/* mobile menu  */}
          <div className='lg:hidden block' onClick={handleMobileMenu}>
            {!mobileHeader ? (
              <FaBarsStaggered
                className={`${
                  headerActive ? 'text-primary' : 'text-menuColor'
                } hover:cursor-pointer`}
                size={30}
              />
            ) : (
              <FaTimes
                className={`${
                  headerActive ? 'text-primary' : 'text-menuColor'
                } hover:cursor-pointer`}
                size={30}
              />
            )}
          </div>
          {/* respnonsive header  */}
          <div
            className={`absolute left-0 top-[96px] transition-all z-[999] ${
              mobileHeader
                ? 'h-[70vh] visible opacity-100'
                : 'h-0 invisible opacity-0'
            } bg-white w-full`}
          >
            <div className='text-center container'>
              <ul>
                {menu.map((item) => {
                  return (
                    <li key={Math.random()} className='mt-8'>
                      <a
                        href={item.link}
                        className='text-2xl hover:text-primary text-[#050B15]'
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className='mt-8'>
                <button className='btn-mobile'>Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
