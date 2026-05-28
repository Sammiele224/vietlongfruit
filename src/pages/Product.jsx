import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react'; 

import ProductHero from '../components/product/ProductHero';
import ProductGrid from '../components/product/ProductGrid';
import TestimonialSection from '../components/product/TestimonialSection';

import banner1 from '../assets/images/BG-09.jpg';
import banner2 from '../assets/images/BG-10.jpg';

const Products = () => {
  const heroBanners = [banner1, banner2];

  // 1. GET URL HASH: Extracts the hash from the URL (e.g., '#product-grid')
  const { hash } = useLocation();
  
  // 2. CREATE REFERENCE: Targets the wrapper Box around the ProductGrid
  const gridRef = useRef(null);

  // 3. SCROLL EFFECT: Listens for hash changes and smoothly scrolls to the grid
  useEffect(() => {
    if (hash === '#product-grid' && gridRef.current) {
      // A small timeout ensures all DOM elements and images are loaded before calculating the scroll position
      setTimeout(() => {
        gridRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' // Aligns the top of the grid with the top of the viewport
        });
      }, 100);
    }
  }, [hash]); 

  return (
    <Box w="full" overflowX="hidden">
       <ProductHero title="Product" bgImage={heroBanners} />
       
       {/* 4. ATTACH REF & ID: Wrap ProductGrid to make it the scroll target */}
       {/* Added padding top (pt) so it doesn't stick directly to the top edge when scrolling */}
       <Box ref={gridRef} id="product-grid">
           <ProductGrid />
       </Box>
       
       <TestimonialSection />
    </Box>
  );
};

export default Products;