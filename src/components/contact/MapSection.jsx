import { Box, Link, Image } from '@chakra-ui/react';

// Replace with the path to your static map screenshot!
import mapImage from '../../assets/images/Layer-78.jpg'; 

const MapSection = () => {
    return (
        <Box w="full" py={{ base: 12, md: 20 }}>
            <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
                
                {/* The Link wrapper. Replace the href with the actual Google Maps URL 
                  for your specific address!
                */}
                <Link 
                    href="https://maps.app.goo.gl/1wBPWr4RfRFg8juE8" 
                    isExternal // Opens in a new tab
                    _hover={{ opacity: 0.9 }} // Slight fade effect on hover so they know it's clickable
                    display="block"
                    borderRadius="3xl"
                    overflow="hidden"
                    boxShadow="lg"
                >
                    <Image 
                        src={mapImage} 
                        alt="Our Location on Google Maps" 
                        w="full" 
                        h={{ base: "300px", md: "400px", lg: "500px" }} 
                        objectFit="cover" 
                        transition="transform 0.3s ease"
                        _hover={{ transform: "scale(1.02)" }} // Slight zoom effect when they hover
                    />
                </Link>

            </Box>
        </Box>
    );
};

export default MapSection;