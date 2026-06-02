import { useState } from 'react';
import { 
    Box, 
    Container, 
    Flex, 
    VStack, 
    HStack, 
    Text, 
    Heading, 
    Image, 
    Icon,
    Collapse,
    Avatar // 1. IMPORTED: Added Avatar from Chakra UI
} from '@chakra-ui/react';

import leafIcon from '../../assets/icons/Icon-17.svg'; 
import projectBg from '../../assets/images/project-bg.png';

// 1. MOCK DATA
const testimonials = [
    {
        id: 1,
        name: "Hoang Dung",
        location: "Ho Chi Minh City, Vietnam",
        rating: 5,
        heading: "I had an extraordinary experience!",
        text: "I tried the dragon fruit and it was absolutely phenomenal. The freshness and taste were like nothing I’ve ever had before. Highly recommend!"
    },
    {
        id: 2,
        name: "Truong Thuy",
        location: "Buon Me Thuot, Vietnam",
        rating: 5,
        heading: "Absolutely the freshest fruit!",
        text: "The service was amazing and the fruits were fresh and tasty."
    },
    {
        id: 3,
        name: "Kim Hanh",
        location: "Hanoi, Vietnam",
        rating: 5,
        heading: "Great customer service and quality.",
        text: "Loved the packaging and quick delivery. Will buy again!"
    }
];

const TestimonialSection = () => {
    // 2. STATE: Track which review is currently being displayed (defaults to 0)
    const [activeIndex, setActiveIndex] = useState(0);

    // Grab the active testimonial object based on the state
    const activeTestimonial = testimonials[activeIndex];

    return (
        <Box w="full" py={{ base: 16, md: 24 }} position="relative" bg="white">
            
            {/* Farm Sketch Background Image on the bottom left */}
            <Image 
                as="img"
                src={projectBg}
                alt=""
                aria-hidden="true"
                position="absolute"
                bottom={0}
                left={0}
                w={{ base: "75%", md: "42%" }}
                maxW="600px"
                opacity={1}         
                pointerEvents="none"
                userSelect="none"
                display="block"
            /> 

            <Container maxW="container.lg" position="relative" zIndex={1}>
                
                {/* 3. SECTION HEADER */}
                <VStack spacing={2} mb={16}>
                    <Flex align="center" gap={2}>
                        <Text color="yellow" fontWeight="bold" textTransform="uppercase" fontSize="sm">
                            Testimonials
                        </Text>
                        <Image 
                            as="img"
                            src={leafIcon}
                            h={{ base: "10px", md: "20px" }}
                            w="auto"
                            display="block"
                            transform={{ base: "translate(-13px, -13px)", lg: "translate(-15px, -15px)" }}
                        />
                    </Flex>
                    <Heading color="darkgreen" fontSize={{ base: "3xl", md: "4xl" }} fontWeight={700}>
                        What Our Customers Say
                    </Heading>
                </VStack>

                {/* 4. MAIN CONTENT LAYOUT */}
                <Box>
                    {/* --------------------------------------------------------------------------------
                        --- MOBILE VIEW (Accordion style) ---
                        --------------------------------------------------------------------------------
                    */}
                    <VStack 
                        display={{ base: "flex", md: "none" }} 
                        spacing={4} 
                        w="full" 
                        align="flex-start"
                    >
                        {/* Iterating through all testimonials to build the list */}
                        {testimonials.map((customer, index) => {
                            const isActive = activeIndex === index;
                            
                            return (
                                <VStack key={customer.id} spacing={0} w="full">
                                    
                                    {/* 4.1 CUSTOMER CARD (Header of Accordion) */}
                                    <Flex
                                        onClick={() => setActiveIndex(index)}
                                        w="full"
                                        align="center"
                                        gap={4}
                                        p={4}
                                        borderRadius="xl"
                                        cursor="pointer"
                                        transition="all 0.3s"
                                        bg={isActive ? "white" : "transparent"}
                                        boxShadow={isActive ? "xl" : "none"}
                                        _hover={{ bg: isActive ? "white" : "gray.50" }}
                                    >
                                        {/* 2. REPLACED IMAGE WITH AVATAR: This creates a clean, gender-neutral user silhouette */}
                                        <Avatar boxSize="50px" bg="gray.100" color="gray.400" />
                                        
                                        <Box>
                                            <Text fontWeight="bold" color="darkgreen" fontSize="md" lineHeight="1.2">
                                                {customer.name}
                                            </Text>
                                            <Text color="gray.400" fontSize="xs">
                                                {customer.location}
                                            </Text>
                                        </Box>
                                    </Flex>

                                    {/* 4.2 REVIEW CONTENT (Expandable Panel of Accordion) */}
                                    <Collapse in={isActive} animateOpacity style={{ width: '100%' }}>
                                        <Box 
                                            pl={{ base: "66px", sm: "66px" }} 
                                            pb={4} 
                                            pr={4}
                                            pt={4} 
                                        >
                                            <Heading fontSize="lg" color="darkgreen" mb={2}>
                                                {customer.heading}
                                            </Heading>
                                            
                                            <HStack spacing={1} mb={3}>
                                                {[...Array(5)].map((_, i) => (
                                                    <Icon key={i} viewBox="0 0 24 24" fill={i < customer.rating ? "#ECC94B" : "none"} stroke="#ECC94B" w={4} h={4}>
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                    </Icon>
                                                ))}
                                            </HStack>

                                            <Text color="gray.500" fontSize="sm" lineHeight="1.8">
                                                {customer.text}
                                            </Text>
                                        </Box>
                                    </Collapse>
                                </VStack>
                            );
                        })}

                        {/* 4.3 Pagination Dots (Centered below the list) */}
                        <HStack spacing={2} pt={4} w="full" justify="center">
                            {testimonials.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    w="8px"
                                    h="8px"
                                    borderRadius="full"
                                    cursor="pointer"
                                    transition="all 0.3s"
                                    bg={activeIndex === index ? "darkgreen" : "gray.300"}
                                    transform={activeIndex === index ? "scale(1.2)" : "scale(1)"}
                                />
                            ))}
                        </HStack>
                    </VStack>


                    {/* --------------------------------------------------------------------------------
                        --- DESKTOP VIEW (Classic split view) ---
                        --------------------------------------------------------------------------------
                    */}
                    <Flex 
                        display={{ base: "none", md: "flex" }} 
                        direction="row"
                        gap={20}
                        align="center"
                    >
                        {/* LEFT SIDE */}
                        <VStack w="40%" spacing={6} align="flex-start">
                            <VStack spacing={2} w="full">
                                {testimonials.map((customer, index) => {
                                    const isActive = activeIndex === index;
                                    return (
                                        <Flex key={customer.id} onClick={() => setActiveIndex(index)} w="100%" align="center" gap={4} p={4} borderRadius="xl" cursor="pointer" transition="all 0.3s" bg={isActive ? "white" : "transparent"} boxShadow={isActive ? "xl" : "none"} _hover={{ bg: isActive ? "white" : "gray.50" }}>
                                            
                                            {/* 3. REPLACED IMAGE WITH AVATAR HERE TOO */}
                                            <Avatar boxSize="50px" bg="gray.100" color="gray.400" />
                                            
                                            <Box>
                                                <Text fontWeight="bold" color="darkgreen" fontSize="md" lineHeight="1.2">{customer.name}</Text>
                                                <Text color="gray.400" fontSize="xs">{customer.location}</Text>
                                            </Box>
                                        </Flex>
                                    );
                                })}
                            </VStack>

                            <HStack spacing={2} pt={4} pl={4}>
                                {testimonials.map((_, index) => (
                                    <Box key={index} onClick={() => setActiveIndex(index)} w="8px" h="8px" borderRadius="full" cursor="pointer" transition="all 0.3s" bg={activeIndex === index ? "darkgreen" : "gray.300"} transform={activeIndex === index ? "scale(1.2)" : "scale(1)"} />
                                ))}</HStack>
                        </VStack>

                        {/* RIGHT SIDE */}
                        <Box w="60%">
                            <Heading fontSize="2xl" color="darkgreen" mb={4}>
                                {activeTestimonial.heading}
                            </Heading>                           

                            <HStack spacing={1} mb={8}>
                                {[...Array(5)].map((_, i) => (
                                    <Icon key={i} viewBox="0 0 24 24" fill={i < activeTestimonial.rating ? "#ECC94B" : "none"} stroke="#ECC94B" w={4} h={4}>
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </Icon>
                                ))}
                            </HStack>

                            <Text color="gray.500" fontSize="md" lineHeight="1.8">
                                {activeTestimonial.text}
                            </Text>
                        </Box>
                        
                    </Flex>

                </Box>
            </Container>
        </Box>
    );
};

export default TestimonialSection;