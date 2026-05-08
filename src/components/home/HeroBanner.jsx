import { Box, Flex, Heading, Text, Button, VStack, Container, useTheme } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import heroBg from '../../assets/images/BG.jpg';

const HeroBanner = () => {
    const theme = useTheme();
    
    return (
        <Flex
            w="full"
            h={{ base: "60vh", md: "80vh" }}
            backgroundImage={`url(${heroBg})`}
            backgroundSize="cover"
            backgroundPosition="center"
            alignItems="center"
            px={{ base: 5, md: 20 }}
            position="relative"
        >

            <VStack alignItems="flex-start" spacing={2} color="white">
                <Box>
                    <Heading
                        as="h1"
                        fontSize={{ base: "30", md: "50" }}
                        fontWeight={700}
                    >
                        Naturally Clean,
                    </Heading>

                    <Text
                        fontSize={{ base: "15", md: "25" }}
                        color={theme.colors.yellow}
                        fontWeight={500}
                    >
                        Naturally Delicious
                    </Text>
                </Box>

                <Button
                    mt={4}
                    bg="white"
                    color={theme.colors.darkgreen}
                    borderRadius="full"
                    px={6}
                    py={4}
                    fontSize="12"
                    fontWeight={500}
                    rightIcon={<ArrowForwardIcon />}
                    _hover={{ bg: "gray.100" }}
                    >
                    Shop Now
                </Button>
            </VStack>

            <Box
                position="absolute"
                bottom="8" 
                left="50%" 
                transform="translateX(-50%)" 
                zIndex="10"
                w="30px" 
                h="50px" 
                border="2px solid white" 
                borderRadius="full" 
                display="flex"
                justifyContent="center"
                pt="10px" 
            >

                <Box
                    w="4px" 
                    h="10px" 
                    bg="white" 
                    borderRadius="full"
                    animation="scrollDown 1.5s infinite" 
                />
            </Box>

        </Flex>
    );
};
export default HeroBanner;