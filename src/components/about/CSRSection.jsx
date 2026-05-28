import { 
    Box, 
    Container, 
    Flex, 
    Text, 
    SimpleGrid, 
    VStack, 
    HStack, 
    Image, 
    Icon 
} from '@chakra-ui/react';

import growersIcon from '../../assets/icons/Icon-34.svg'; 
import peopleIcon from '../../assets/icons/Icon-32.svg';  
import customersIcon from '../../assets/icons/Icon-07.svg'; 

// A simple SVG checkmark component so you don't have to import one
const CheckIcon = (props) => (
    <Icon viewBox="0 0 24 24" color="green.500" w={4} h={4} {...props}>
        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </Icon>
);

const CSRSection = () => {
    // Storing the column data here keeps the layout code extremely clean
    const csrColumns = [
        {
            icon: growersIcon,
            title: "CSR to our partnering growers",
            points: [
                "Long term partnership",
                "Fair pricing/agreements",
                "Technical financial support",
                "Post-harvest handling training"
            ]
        },
        {
            icon: peopleIcon,
            title: "CSR to our people & growers",
            points: [
                "Good working conditions",
                "Health and hygiene awareness",
                "Opportunities to grow"
            ]
        },
        {
            icon: customersIcon,
            title: "CSR to our customers",
            points: [
                "Top quality produce",
                "Traceability/food safety guarantee",
                "Reliable supply",
                "Positive/long term relationships"
            ]
        }
    ];

    return (
        <Box w="full" bg="bgLight" py={{ base: 12, md: 24 }}>
            <Container maxW="1000px" px={{ base: 4, md: 8 }}>
                
                {/* --- TOP ROW: Glowing Circle & Paragraph --- */}
                <Flex 
                    direction={{ base: "column", md: "row" }} 
                    align="center" 
                    gap={{ base: 8, md: 12 }} 
                    mb={{ base: 12, md: 16 }}
                >
                    <Flex
                        justify="center"
                        align="center"
                        w={{ base: "100px", md: "110px" }}
                        h={{ base: "100px", md: "110px" }}
                        borderRadius="full"
                        bg="yellow" 
                        flexShrink={0}
                        boxShadow="0 0 30px rgba(236, 201, 75, 0.6)" 
                    >
                        <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight={600} color="darkgreen">
                            Csr
                        </Text>
                    </Flex>

                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8" fontWeight={700}>
                        We realize that our social, economic and environmental responsibilities to the 
                        stakeholders are essential to our business. We aim to demonstrate these 
                        responsibilities through our actions and our corporate policies.
                    </Text>
                </Flex>

                {/* --- BOTTOM ROW: The 3 Columns --- */}
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 8 }}>
                    
                    {csrColumns.map((col, index) => (
                        <VStack key={index} align="flex-start" spacing={5}>
                            
                            <Flex 
                                justify="center" 
                                align="center" 
                                w="60px" 
                                h="60px" 
                                bg="white" 
                                borderRadius="full" 
                                boxShadow="sm" 
                            >
                                <Image src={col.icon} w="30px" h="auto" />
                            </Flex>

                            {/* Column Title */}
                            <Text color="darkgreen" fontWeight={700} fontSize="md">
                                {col.title}
                            </Text>

                            {/* Bullet Points with Checkmarks */}
                            <VStack align="flex-start" spacing={3}>
                                {col.points.map((point, idx) => (
                                    <HStack key={idx} align="flex-start" spacing={3}>
                                        <Box mt={-1}>
                                            <CheckIcon />
                                        </Box>
                                        <Text color="gray.500" fontSize="sm" lineHeight="1.6">
                                            {point}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>

                        </VStack>
                    ))}

                </SimpleGrid>

            </Container>
        </Box>
    );
};

export default CSRSection;