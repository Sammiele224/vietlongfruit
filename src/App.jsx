import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from '@chakra-ui/react';
import theme from './theme'; // Importing the theme.js file I saw in your folder!

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './pages/Home'; 
import ProductDetail from './pages/ProductDetail';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Certificate from './pages/Certificate';
import Tracking from './pages/Tracking';

function App() {
  
  return (
    <Router>
      {/* Global Header appears on all pages */}
      <Header /> 

      {/* Routes decides WHICH page to show based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        {/* The Child Page: Shows the specific fruit based on the ID */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>

      {/* Global Footer appears on all pages */}
      <Footer />
    </Router>
  );
}
export default App;