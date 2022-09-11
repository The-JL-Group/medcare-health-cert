import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import Error from './pages/Error';

function App() {

  return (
    <Router>
      <div>
        <Routes>

          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Gallery Page */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* Servies Page */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Error Page */}
          <Route path="*" element={<Error />} />
          
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
