import React from 'react';

// Components
import Header from '../components/Home/Header/Header';
import About from '../components/Home/About/About';
import Video from '../components/Home/Video/Video';
import Info from '../components/Home/Info/Info';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Video />
      <Info />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
