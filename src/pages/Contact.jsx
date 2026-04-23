import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';

// Contact page with form and map
const Contact = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      {/* Main content area */}
      <Box flex="1" bg="gray.100">
        <ContactForm />
        <MapSection />
      </Box>

      <Footer />
    </Flex>
  );
};

export default Contact;
