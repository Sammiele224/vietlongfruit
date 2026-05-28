import { Box, Flex, Text, SimpleGrid, Image } from '@chakra-ui/react';

// Replace these with the actual paths to your SVGs!
import emailIcon from '../../assets/icons/Icon-40.svg'; 
import phoneIcon from '../../assets/icons/Icon-26.svg';
import locationIcon from '../../assets/icons/Icon-38.svg';

const ContactCards = () => {
    // Storing the data in a simple array makes the code super clean
    const cards = [
        {
            id: 1,
            icon: emailIcon,
            title: "Email",
            info: "Support@vietlongfruit.com"
        },
        {
            id: 2,
            icon: phoneIcon,
            title: "Phone",
            info: "00 0566 999 34 00"
        },
        {
            id: 3,
            icon: locationIcon,
            title: "Address",
            info: "66 Kansas City, Missouri, USA"
        }
    ];

    return (
        // THE OVERLAP TRICK: Negative margin-top pulls this component UP over the banner
        <Box 
            w="full" 
            mt={{ base: 15, md: 35 }} // Pulls up less on mobile, more on desktop
            position="relative" 
            zIndex={2} 
            px={{ base: 4, md: 8 }}
        >
            <SimpleGrid 
                columns={{ base: 1, md: 3 }} // 1 column (stacked) on mobile, 3 side-by-side on desktop
                spacing={{ base: 4, md: 8 }} 
                maxW="1200px" 
                mx="auto"
            >
                {cards.map((card) => (
                    <Flex
                        key={card.id}
                        bg="white"
                        p={{ base: 6, lg: 8 }}
                        borderRadius="2xl"
                        boxShadow="lg" // Creates that nice floating effect
                        align="center"
                        gap={5}
                        transition="all 0.3s"
                        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }} // Subtle hover bounce
                    >
                        {/* ICON WRAPPER */}
                        <Box w={{ base: "40px", md: "50px" }} h={{ base: "40px", md: "70px" }} flexShrink={0}>
                            <Image 
                                src={card.icon} 
                                alt={card.title} 
                                w="full" 
                                h="full" 
                                objectFit="contain" 
                            />
                        </Box>
                        
                        {/* TEXT INFO */}
                        <Box>
                            <Text color="gray.500" fontSize="sm" mb={1}>
                                {card.title}
                            </Text>
                            <Text color="black" fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
                                {card.info}
                            </Text>
                        </Box>
                    </Flex>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ContactCards;