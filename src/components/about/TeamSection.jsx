import { 
    Box, 
    Container, 
    Flex, 
    Heading, 
    Text, 
    VStack, 
    Image 
} from '@chakra-ui/react';

import possibilityIcon from '../../assets/icons/Icon-16.svg'; 
import devIcon from '../../assets/icons/Icon-27.svg';         
import contributeIcon from '../../assets/icons/Icon-13.svg';  
import teamsectionBg from '../../assets/images/BG-07.jpg'; 

// Helper component for the white cards to keep our code DRY
const TeamCard = ({ icon, title }) => (
    <Box 
        bg="white" 
        p={{ base: 6, lg: 8 }} 
        textAlign="center" 
        w={{ base: "70%", md: "180px", lg: "200px" }} 
        h={{ base: "auto", md: "180px" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        boxShadow="xl"
        transition="all 0.3s"
        _hover={{ transform: "translateY(-5px)" }}
    >
        <Image src={icon} w="40px" h="auto" mx="auto" mb={4} />
        <Text color="darkgreen" fontWeight={700} fontSize="sm">
            {title}
        </Text>
    </Box>
);

const TeamSection = () => {
    return (
        // 1. MAIN CONTAINER
        <Box 
            w="full" 
            backgroundImage={`url(${teamsectionBg})`} 
            backgroundSize="cover" 
            backgroundPosition="center" 
            py={{ base: 16, md: 24 }} 
            position="relative"
            overflow="hidden"
        >
            
            {/* 2. THE WATERMARK TEXT (TEAM) */}
            <Text
                position="absolute"
                left={{ base: "45%", md: "5%" }} 
                top={{ base: "13%", md: "35%" }} 
                transform={{ base: "translate(-50%, -50%)", md: "translateY(-50%)" }} 
                fontSize={{ base: "120px", md: "150px", lg: "200px" }} 
                fontWeight={700}
                color="darkgreen" 
                lineHeight={1}
                zIndex={0}
                pointerEvents="none"
                userSelect="none"
                letterSpacing="wider"
                opacity={0.2}
            >
                TEAM
            </Text>

            <Container maxW="950px" px={{ base: 4, md:15 }} position="relative" zIndex={1}>
                
                <Flex 
                    direction={{ base: "column", md: "row" }} 
                    gap={{ base: 12, md: 12, lg: 16 }}
                    align="center"
                    justify="center"
                >
                    
                    {/* LEFT SIDE: Text Content */}
                    <Box w={{ base: "100%", md: "50%" }}>
                        <Heading 
                            color="white" 
                            fontSize={{ base: "4xl", md: "4xl"}} 
                            fontWeight={700} 
                            mb={{base: 12, md: 5}}
                        >
                            Join Our Team
                        </Heading>
                        
                        <Text color="whiteAlpha.900" fontSize={{ base: "sm", md: "sm" }} lineHeight="1.8">
                            vietlongfruit is a dynamic and growing company. By working with us, you'll have the opportunity to 
                            develop quickly in a supportive, family-oriented environment. Currently, we have no open positions, 
                            but if you share our values and are passionate about contributing to our success, we invite you to send 
                            your CV and cover letter to vlf@vietlongfruit.com.vn.
                        </Text>
                    </Box>

                    {/* RIGHT SIDE: The Staggered Cards */}
                    <Box w={{ base: "100%", md: "55%" }}>
                        
                        {/* --- DESKTOP LAYOUT (Staggered Grid) --- */}
                        <Flex 
                            display={{ base: "none", md: "flex" }} 
                            gap={6} 
                            align="center" 
                            justify="flex-end" 
                        >
                            {/* Left Card (Middle) */}
                            <TeamCard icon={devIcon} title="Development" />
                            
                            {/* Right Cards (Stacked) */}
                            <VStack spacing={6}>
                                <TeamCard icon={possibilityIcon} title="Attractive salary" />
                                <TeamCard icon={contributeIcon} title="Comfortable workplace" />
                            </VStack>
                        </Flex>

                        {/* --- MOBILE LAYOUT (Simple Stack) --- */}
                        <VStack 
                            display={{ base: "flex", md: "none" }} 
                            spacing={4} 
                            w="full"
                        >
                            <TeamCard icon={devIcon} title="Development" />
                            <TeamCard icon={possibilityIcon} title="Attractive salary" />
                            <TeamCard icon={contributeIcon} title="Comfortable workplace" />
                        </VStack>

                    </Box>

                </Flex>
            </Container>
        </Box>
    );
};

export default TeamSection;