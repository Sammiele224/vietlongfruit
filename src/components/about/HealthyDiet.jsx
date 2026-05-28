import { 
    Box, 
    Container, 
    Flex, 
    Heading, 
    Text, 
    VStack, 
    Image,
    HStack
} from '@chakra-ui/react';

// Replace these with your actual image and icon paths!
import dragonFruitImg from '../../assets/images/BG-full-08.jpg'; 
import thumbsUpIcon from '../../assets/icons/Icon-11.svg';     

// Feature Icons Placeholders
import icon1 from '../../assets/icons/Icon-36.svg'; 
import icon2 from '../../assets/icons/Icon-29.svg';  
import icon3 from '../../assets/icons/Icon-33.svg'; 
import icon4 from '../../assets/icons/Icon-30.svg'; 
import icon5 from '../../assets/icons/Icon-03.svg'; 

const HealthyDiet = () => {
    // Feature data
    const features = [
        { icon: icon1, label: "100% Guaranty" },
        { icon: icon2, label: "Timely Delivery" },
        { icon: icon3, label: "Best Equipment" },
        { icon: icon4, label: "Best Farmers" },
        { icon: icon5, label: "24/7 Support" }
    ];

    return (
        <Box w="full" overflow="hidden">

            {/* --- TOP SECTION: TEXT CONTENT (White Background) --- */}
            <Box bg="white" pt={{ base: 16, md: 24 }} pb={{ base: 8, md: 12 }}>
                <Container maxW="1000px" px={{ base: 4, md: 8 }}>
                    <Flex 
                        direction={{ base: "column", md: "row" }} 
                        gap={{ base: 8, md: 16 }}
                        align="flex-start"
                        justify="space-between"
                    >
                        {/* LEFT SIDE: Heading */}
                        <Box w={{ base: "100%", md: "45%" }}>
                            
                            {/* "Why Choose Us" with the line pointing to the LEFT */}
                            <HStack w="full" mb={4} spacing={4}>
                                <Box flex="1" h="1px" bg="gray.200" /> 
                                <Text color="gray.400" fontSize="sm" fontWeight={600} textTransform="uppercase" whiteSpace="nowrap">
                                    Why Choose Us
                                </Text>
                            </HStack>

                            <Heading 
                                color="darkgreen" 
                                fontSize={{ base: "3xl", md: "4xl" }} 
                                fontWeight={700} 
                                lineHeight="1.2"
                                textAlign={{ base: "left", md: "right" }}
                            >
                                Fruits are key to a<br/>healthy diet
                            </Heading>
                        </Box>

                        {/* RIGHT SIDE: Paragraph */}
                        <Box w={{ base: "100%", md: "55%" }} pt={{ md: 6 }}>
                            <Text color="gray.500" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
                            </Text>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            {/* --- MIDDLE SECTION: THE OVERLAPPING IMAGE --- */}
            <Box bgGradient="linear(to-b, white 50%, bgLight 50%)" w="full">
                <Container maxW="1000px" px={{ base: 4, md: 8 }}>
                    
                    <Box position="relative" w="full" borderRadius="2xl" overflow="hidden" boxShadow="2xl" border={{ base: "6px solid white", md: "12px solid white" }}>
                        
                        <Image 
                            src={dragonFruitImg} 
                            alt="Dragon Fruit" 
                            w="full" 
                            h={{ base: "300px", md: "450px" }} 
                            objectFit="cover" 
                        />

                        {/* Glassmorphism Circle */}
                        <Flex 
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            bg="rgba(31, 148, 31, 0.5)" 
                            backdropFilter="blur(8px)" 
                            w={{ base: "180px", md: "220px" }}
                            h={{ base: "180px", md: "220px" }}
                            borderRadius="full"
                            direction="column"
                            align="center"
                            justify="center"
                            textAlign="center"
                            px={4}
                            boxShadow="0 4px 70px rgba(106, 141, 85, 0.7)" 
                        >
                            <Image src={thumbsUpIcon} w="40px" h="auto" mb={3} />
                            
                            <Text color="yellow" fontSize={{ base: "3xl", md: "4xl" }} fontWeight={700} lineHeight="1">
                                24.504
                            </Text>
                            
                            <Text color="white" fontSize={{ base: "xs", md: "sm" }} fontWeight={600} mt={2} lineHeight="1.3">
                                The customers have used<br/>our products
                            </Text>
                        </Flex>

                    </Box>

                </Container>
            </Box>

            {/* --- BOTTOM SECTION: FEATURE ICONS (Light Green Background) --- */}
            <Box bg="bgLight" pt={{ base: 12, md: 16 }} pb={{ base: 16, md: 24 }}>
                <Container maxW="1000px" px={{ base: 4, md: 8 }}>
                    
                    <Flex 
                        direction={{ base: "column", md: "row" }} 
                        justify="space-between" 
                        align="center"
                        gap={{ base: 10, md: 4 }}
                    >
                        {features.map((feature, index) => (
                            <VStack key={index} spacing={4}>
                                
                                {/* --- THE FIX: ACCENT HIGHLIGHT EFFECT --- */}
                                <Box 
                                    position="relative" 
                                    w="60px" 
                                    h="60px" 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="center"
                                >
                                    {/* 1. The Yellow Accent Circle (Behind) */}
                                    <Box 
                                        position="absolute"
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        w="30px" // Smaller than the icon
                                        h="30px"
                                        bg="#F7D070" // A soft, warm yellow matching the design
                                        borderRadius="full"
                                        zIndex={0}
                                    />
                                    
                                    {/* 2. The Line-art Icon (In front) */}
                                    <Image 
                                        src={feature.icon} 
                                        w="100%" 
                                        h="auto" 
                                        position="relative" 
                                        zIndex={1} 
                                    />
                                </Box>
                                
                                <Text color="darkgreen" fontWeight={700} fontSize="md" textAlign="center">
                                    {feature.label}
                                </Text>
                            </VStack>
                        ))}
                    </Flex>

                </Container>
            </Box>

        </Box>
    );
};

export default HealthyDiet;