import { Flex, Box } from '@chakra-ui/react';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';

// Contact page with form and map
const Contact = () => {
  return (
    <Flex direction="column" minH="100vh">
      
      {/* Main content area */}
      <Box flex="1" bg="gray.100">
        <ContactForm />
        <MapSection />
      </Box>

    </Flex>
  );
};

export default Contact;
