import { 
    Box, 
    Flex, 
    Heading, 
    Text, 
    Button, 
    VStack 
} from '@chakra-ui/react';

// Replace with your actual background image and arrow icon paths
import bgImage from '../../assets/images/BG-blur.png'; 
import customArrowIcon from '../../assets/icons/Icon-42.svg';

const OfficeHours = () => {
    return (
        // 1. BASE LAYER: Full-width white background section
        <Box w="full" bg="white" py={{ base: 8, md: 24 }}>
            
            <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
                
                {/* 2. SECOND LAYER: Blurred background container 
                    - RESPONSIVE TRICK: Turn off background image, shadow, and padding on mobile!
                */}
                <Box
                    position="relative"
                    backgroundImage={{ base: "none", md: `url(${bgImage})` }} // Only show image on desktop
                    backgroundSize="cover"
                    backgroundPosition="center"
                    py={{ base: 4, md: 20 }} // Less vertical padding on mobile
                    px={{ base: 0, md: 12, lg: 20 }} // Remove horizontal padding on mobile
                    boxShadow={{ base: "none", md: "lg" }} // Remove shadow on mobile
                >

                    {/* 3. TOP LAYER: Actual content (text and hours card) */}
                    <Flex 
                        direction={{ base: "column", md: "row" }} 
                        gap={{ base: 12, md: 16 }}
                        align="center"
                        position="relative"
                        zIndex={2} 
                    >
                        
                        {/* LEFT SIDE: Headline, paragraph, and CTA button */}
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Heading 
                                color="darkgreen" 
                                fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }} 
                                fontWeight={600} 
                                mb={6}
                                lineHeight="1.2"
                            >
                                Visit our office or<br />warehouse!
                            </Heading>
                            
                            <Text color="gray.500" fontSize={{ base: "md", md: "md" }} mb={8} lineHeight="1.8" pr={{ md: 8 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                            
                            <Button 
                                rightIcon={customArrowIcon ? <Box as="img" src={customArrowIcon} w="12px" h="auto" /> : null}
                                variant="solid" 
                                bg="buttonGreen" 
                                color="white" 
                                fontWeight={600} 
                                fontSize="16px"
                                h="50px" 
                                px={8} 
                                borderRadius="full" 
                                transition="all 0.2s"
                                _hover={{ bg: "buttonGreenHover", transform: "translateY(-2px)", boxShadow: "md" }}
                            >
                                Get Information
                            </Button>
                        </Box>

                        {/* RIGHT SIDE: The floating green hours card 
                            - THE MAGIC TRICK: display={{ base: "none", md: "flex" }} completely hides this on mobile!
                        */}
                        <Box 
                            w={{ base: "100%", md: "50%" }} 
                            display={{ base: "none", md: "flex" }} // <--- CHÌA KHÓA NẰM Ở ĐÂY
                            justifyContent={{ base: "center", md: "flex-end" }}
                        >
                            
                            {/* NEW INVISIBLE WRAPPER: Holds both the badge and the card as siblings */}
                            <Box position="relative" w="full" maxW="400px" mt={6}>
                                
                                {/* SIBLING 1: THE YELLOW "HOURS" BADGE */}
                                <Box
                                    position="absolute"
                                    top="-18px" 
                                    left="50%"
                                    transform="translateX(-50%)"
                                    bg="yellow"
                                    color="darkgreen"
                                    fontWeight={700}
                                    fontSize="sm"
                                    px={8}
                                    py={2}
                                    borderRadius="full"
                                    textTransform="uppercase"
                                    boxShadow="md"
                                    zIndex={10} 
                                >
                                    Hours
                                </Box>

                                {/* SIBLING 2: THE GREEN CARD */}
                                <Box
                                    bg="rgba(106, 141, 85, 0.85)" 
                                    backdropFilter="blur(4px)"
                                    color="white"
                                    p={{ base: 8, md: 12 }}
                                    borderRadius="3xl"
                                    w="full"
                                    textAlign="center"
                                    boxShadow="2xl"
                                >
                                    <VStack spacing={6} pt={4}> 
                                        <Box>
                                            <Text fontWeight={700} fontSize="lg" mb={1}>Monday - Friday</Text>
                                            <Text fontSize="sm" color="whiteAlpha.900">9am - 5pm</Text>
                                        </Box>
                                        
                                        <Box>
                                            <Text fontWeight={700} fontSize="lg" mb={1}>Saturdays</Text>
                                            <Text fontSize="sm" color="whiteAlpha.900">11am - 5pm</Text>
                                        </Box>
                                        
                                        <Box>
                                            <Text fontWeight={700} fontSize="lg" mb={1}>Sundays</Text>
                                            <Text fontSize="sm" color="whiteAlpha.900">9am - 3pm</Text>
                                        </Box>
                                    </VStack>
                                </Box>

                            </Box>
                        </Box>

                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default OfficeHours;