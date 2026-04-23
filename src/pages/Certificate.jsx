import { Flex, Box, Container, Text } from '@chakra-ui/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Certificate page with certification details
const Certificate = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      {/* Main content area */}
      <Box flex="1" bg="gray.100" py={10}>
        <Container maxW="6xl">
          <Text fontSize="2xl" fontWeight="bold" mb={6}>
            Certifications
          </Text>
          {/* Certificate content goes here */}
        </Container>
      </Box>

      <Footer />
    </Flex>
  );
};

export default Certificate;
