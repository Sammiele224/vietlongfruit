import { Flex, Box, Container, Text } from '@chakra-ui/react';

import ProductHero from '../components/product/ProductHero';
import CertificateIntro from '../components/certificate/CertificateIntro';
import CertificateGrid from '../components/certificate/CertificateGrid';

import aboutBanner from '../assets/images/BG-04.jpg'; 



const Certificate = () => {
  return (
    <Flex direction="column" minH="100vh">
      
      {/* Main content area */}
      <Box>

        <ProductHero 
            title="Certificate" 
            pageName="Certificate" 
            bgImage={aboutBanner} 
        />
          
        {/* 2. Intro Section (Trophy & Text) */}
        <CertificateIntro />

        {/* 3. Document Grid Section */}
        <CertificateGrid /> 
  
      </Box>

    </Flex>
  );
};

export default Certificate;
