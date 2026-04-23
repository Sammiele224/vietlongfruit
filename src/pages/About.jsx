import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import TeamSection from '../components/about/TeamSection';

// About page with team information
const About = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      {/* Main content area */}
      <Box flex="1" bg="gray.100">
        <TeamSection />
      </Box>

      <Footer />
    </Flex>
  );
};

export default About;
