import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Home from '../Pages/Home/Home';
import ScrollUp from '../Components/ScrollUp/ScrollUp';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default MainLayout;
