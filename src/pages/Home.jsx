import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroBanner from '../components/home/HeroBanner';
import FarmtoClient from '../components/home/FarmtoClient';
import ValuesSection from '../components/home/ValuesSection';

// Home page with hero banner and key sections
const Home = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      {/* Main content area - stretches to push footer down */}
      <Box flex="1" bg="gray.100">
        <HeroBanner />
        <FarmtoClient />
        <ValuesSection />
      </Box>

      <Footer />
    </Flex>
  );
};

export default Home;
