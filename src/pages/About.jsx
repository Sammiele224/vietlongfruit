import { Flex, Box } from '@chakra-ui/react';
import TeamSection from '../components/about/TeamSection';

// About page with team information
const About = () => {
  return (
    <Flex direction="column" minH="100vh">
      
      {/* Main content area */}
      <Box flex="1" bg="gray.100">
        <TeamSection />
      </Box>

    </Flex>
  );
};

export default About;
