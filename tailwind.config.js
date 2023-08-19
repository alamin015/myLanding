/** @type {import('tailwindcss').Config} */
import bannerImg from './src/assets/bg/banner.png';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#20478C',
        menuColor: '#F7F9FD',
        headingBlack: '#050B15',
        subHeading: '#373B44',
      },
      container: {
        padding: '1rem',
        center: true,
      },
      backgroundImage: {
        // banner: `url(${bannerImg})`,
      },
    },
  },
  plugins: [],
};
