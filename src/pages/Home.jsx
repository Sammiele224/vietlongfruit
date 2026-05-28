import { Flex, Box, useTheme } from '@chakra-ui/react';
import HeroBanner from '../components/home/HeroBanner';
import FarmtoClient from '../components/home/FarmtoClient';
import ValuesSection from '../components/home/ValuesSection';
import ProductSection from '../components/home/ProductSection';

// Home page with hero banner and key sections
const Home = () => {
  const theme = useTheme();
  
  return (
    <Flex direction="column" minH="100vh" w="full" overflowX="hidden">
      
      {/* Main content area - stretches to push footer down */}
      <Box flex="1" bg={theme.colors.bgLight}>
        <HeroBanner /> 
        <ValuesSection />
        <ProductSection />
        <FarmtoClient />
      </Box>

    </Flex>
  );
};

export default Home;
