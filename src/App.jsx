import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
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
      <ScrollToTop />
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;