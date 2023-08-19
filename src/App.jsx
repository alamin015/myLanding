// import Marquee from 'react-fast-marquee';

import MainLayout from './Layouts/MainLayout';
import './App.css';
import Loader from './Components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [myLoader, setMyLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setMyLoader(false);
    }, 3000);
  }, []);

  if (myLoader) {
    return <Loader />;
  }

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
