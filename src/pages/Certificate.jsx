import { Flex, Box, Container, Text } from '@chakra-ui/react';

import ProductHero from '../components/product/ProductHero';

import aboutBanner from '../assets/images/BG-04.jpg'; // Replace with your actual image path!



const Certificate = () => {
  return (
    <Flex direction="column" minH="100vh">
      
      {/* Main content area */}
      <Box>

        <ProductHero 
                title="Certificate" 
                pageName="Certificate" // This cleanly replaces "Product" in the breadcrumbs!
                bgImage={aboutBanner} 
            />
          {/* Certificate content goes here */}
  
      </Box>

    </Flex>
  );
};

export default Certificate;
