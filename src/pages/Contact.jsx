import { Box } from '@chakra-ui/react';

// 1. Import your Hero banner
import ProductHero from '../components/product/ProductHero';

// 2. Import your 4 Contact page components
import ContactCards from '../components/contact/ContactCards';
import ContactForm from '../components/contact/ContactForm';
import OfficeHours from '../components/contact/OfficeHours';
import MapSection from '../components/contact/MapSection';

// 3. Import the banner background image for this page
import contactBanner from '../assets/images/BG-05.jpg'; // Adjust to your actual banner

const Contact = () => {
  return (
    <Box bg="#F3F7F2"> {/* Using a light greenish-gray background for the whole page */}
       
       {/* Top Banner */}
       <ProductHero 
          title="Contact Us" 
          bgImage={contactBanner} 
          pageName="Contact" 
       />
       
       {/* 1. The Floating Info Cards */}
       <ContactCards />
       
       {/* 2. The Form with the Farmer Image */}
       <ContactForm />

       {/* 3. The Office Hours block with background image */}
       <OfficeHours />

       {/* 4. The Clickable Map */}
       <MapSection />
       
    </Box>
  )
}

export default Contact;