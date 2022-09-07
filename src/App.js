import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credit" element={<Credits />} />
          <Route path="*" element={<Error />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
