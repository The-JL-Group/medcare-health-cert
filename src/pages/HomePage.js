import React from 'react';

// Components
import Header from '../components/Home/Header/Header';
import About from '../components/Home/About/About';
import Video from '../components/Home/Video/Video';
import Info from '../components/Home/Info/Info';
import Testimonials from '../components/Home/Testimonials/Testimonials';

function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Video />
      <Info />
      <Testimonials />
    </div>
  );
}

export default HomePage;
