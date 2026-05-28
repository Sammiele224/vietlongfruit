import { 
    Box, 
    Flex, 
    Heading, 
    Text, 
    Input, 
    Textarea, 
    Button, 
    Image, 
    VStack, 
    SimpleGrid 
} from '@chakra-ui/react';

import leafIcon from '../../assets/icons/Icon-17.svg';
import customArrowIcon from '../../assets/icons/Icon-42.svg';
import farmerImage from '../../assets/images/BG-06.jpg';

const ContactForm = () => {
    return (
        <Box w="full" py={{ base: 12, md: 20 }}>
            <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
                
                {/* SPLIT LAYOUT CONTAINER */}
                <Flex 
                    direction={{ base: "column", md: "row" }} 
                    align="stretch"
                    bg="white"
                    borderRadius="3xl"
                    overflow="hidden"
                    boxShadow="lg"
                >
                    
                    {/* LEFT SIDE */}
                    <Box w={{ base: "100%", md: "40%" }}>
                        <Image 
                            src={farmerImage} 
                            alt="Farmer harvesting rambutans" 
                            w="full" 
                            h="full" 
                            objectFit="cover" 
                        />
                    </Box>

                    {/* RIGHT SIDE */}
                    <Box w={{ base: "100%", md: "60%" }} p={{ base: 8, md: 12, lg: 16 }}>
                        
                        {/* SECTION HEADER */}
                        <VStack align="flex-start" spacing={2} mb={8}>
                            <Flex align="center" gap={2}>
                                <Text color="yellow" fontWeight={600} textTransform="uppercase" fontSize="sm">
                                    Get To Contact Us
                                </Text>
                                {leafIcon && (
                                    <Image src={leafIcon} w="15px" h="auto" transform={{ base: "translate(-13px, -13px)", lg: "translate(-13px, -13px)" }} />
                                )}
                            </Flex>
                            <Heading color="darkgreen" fontSize={{ base: "3xl", md: "4xl" }} fontWeight={600}>
                                Have any Questions?<br/> Get in Touch!
                            </Heading>
                        </VStack>

                        {/* FORM FIELDS */}
                        <Box as="form" w="full">
                            <VStack spacing={6}>
                                
                                {/* 2-Column Grid for short inputs */}
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                                    <Input 
                                        placeholder="Your Name" 
                                        size="lg" 
                                        borderRadius="md" 
                                        focusBorderColor="darkgreen"
                                        bg="transparent"
                                    />
                                    <Input 
                                        placeholder="Phone Number" 
                                        size="lg" 
                                        borderRadius="md" 
                                        focusBorderColor="darkgreen"
                                        bg="transparent"
                                    />
                                    <Input 
                                        placeholder="Email Address" 
                                        type="email"
                                        size="lg" 
                                        borderRadius="md" 
                                        focusBorderColor="darkgreen"
                                        bg="transparent"
                                    />
                                    <Input 
                                        placeholder="Subject" 
                                        size="lg" 
                                        borderRadius="md" 
                                        focusBorderColor="darkgreen"
                                        bg="transparent"
                                    />
                                </SimpleGrid>

                                {/* Full-width Textarea for the message */}
                                <Textarea 
                                    placeholder="Comment" 
                                    size="lg" 
                                    borderRadius="md" 
                                    focusBorderColor="darkgreen"
                                    bg="transparent"
                                    rows={5} 
                                />

                                {/* SUBMIT BUTTON */}
                                <Box w="full" pt={2}>
                                    <Button 
                                        type="submit"
                                        rightIcon={customArrowIcon ? <Box as="img" src={customArrowIcon} w="12px" h="auto" /> : null}
                                        variant="solid" 
                                        bg="buttonGreen" 
                                        color="white" 
                                        fontWeight={600} 
                                        fontSize="16px"
                                        h="56px" 
                                        px={10} 
                                        borderRadius="full" 
                                        transition="all 0.2s"
                                        _hover={{ bg: "buttonGreenHover", transform: "translateY(-2px)", boxShadow: "md" }}
                                    >
                                        Send Message
                                    </Button>
                                </Box>

                            </VStack>
                        </Box>

                    </Box>

                </Flex>
            </Box>
        </Box>
    );
};

export default ContactForm;