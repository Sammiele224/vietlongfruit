import { Flex, Box, Container, Text } from '@chakra-ui/react';

// Tracking page for order tracking
const Tracking = () => {
  return (
    <Flex direction="column" minH="100vh">
      
      {/* Main content area */}
      <Box flex="1" bg="gray.100" py={10}>
        <Container maxW="6xl">
          <Text fontSize="2xl" fontWeight={400} mb={6} align="center">
            Coming soon:333
          </Text>
          {/* Tracking content goes here */}
        </Container>
      </Box>

    </Flex>
  );
};

export default Tracking;
