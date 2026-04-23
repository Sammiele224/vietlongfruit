import { memo } from 'react';
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Input,
    IconButton,
    Link,
    HStack,
    Image
} from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronUpIcon } from '@chakra-ui/icons';
import locationIcon from '../../assets/icons/Icon-05.svg';
import phoneIcon from '../../assets/icons/Icon-26.svg';
import emailIcon from '../../assets/icons/Icon-40.svg';
import fbIcon from '../../assets/icons/Icon-37.svg';
import twitterIcon from '../../assets/icons/Icon-39.svg';
import ytIcon from '../../assets/icons/Icon-41.svg';

// Footer component with contact info, links, and scroll-to-top button
const Footer = memo(() => {

    // Smooth scroll back to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    return(
        <Box bg="black" color="white" pt={10} pb={5} as='footer' position="relative">
            <Container maxW="6xl">
                        <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
                            {/* Contact Info Section */}
                            <Stack spacing={4}>

                                <Link href="/">
                                    <Image 
                                        src="/Logo-white.svg" 
                                        alt="Vietlongfruit Logo" 
                                        maxWidth="300px" 
                                        objectFit="contain" 
                                        ml={{ base: 0, md: -10 }} 
                                    />
                                </Link>

                                {/* Location Info */}
                                <HStack alignItems="flex-start">
                                    <Image src={locationIcon} alt="Location" boxSize="20px" mt={1} />
                                    <Text color="grey" fontSize="15px">160 Kansas City, Missouri, USA</Text>
                                </HStack>

                                {/* Phone Info */}
                                <HStack alignItems="center">
                                    <Image src={phoneIcon} alt="Phone" boxSize="20px" />
                                    <Text color="grey" fontSize="15px">00 0566 999 34 00</Text>
                                </HStack>

                                {/* Email Info */}
                                <HStack alignItems="center">
                                    <Image src={emailIcon} alt="Email" boxSize="20px" />
                                    <Text color="grey" fontSize="15px">support@vietlongfruit.com</Text>
                                </HStack>

                                {/* Social Links */}
                                <Text fontWeight="bold" mt={2} fontSize="sm">SOCIAL CONNECT</Text>

                                <HStack spacing={4}>
                                    <Link href="#" _hover={{ transform: 'scale(1.1)' }} transition="0.2s">
                                        <Image src={fbIcon} alt="Facebook" boxSize="5" />
                                    </Link>

                                    <Link href="#" _hover={{ transform: 'scale(1.1)' }} transition="0.2s">
                                        <Image src={twitterIcon} alt="Twitter" boxSize="5" />
                                    </Link>

                                    <Link href="#" _hover={{ transform: 'scale(1.1)' }} transition="0.2s">
                                        <Image src={ytIcon} alt="Youtube" boxSize="5" />
                                    </Link>
                                </HStack>
                            </Stack>

                            {/* Essential Pages Links */}
                            <Stack align="flex-start" mt={{ base: 8, md: 12 }}>
                                <Text fontWeight="bold" fontSize="20px" mb={{ base: 4, md: 7 }}>Essential Pages</Text>
                                <Link color="gray" _hover={{ color: 'yellow' }}>Contact</Link>
                                <Link color="gray" _hover={{ color: 'yellow' }}>Service</Link>
                                <Link color="gray" _hover={{ color: 'yellow' }}>Team</Link>
                                <Link color="gray" _hover={{ color: 'yellow' }}>About</Link>
                            </Stack>

                            {/* Newsletter Signup */}
                            <Stack align="flex-start" mt={{ base: 8, md: 12 }}>
                                <Text fontWeight="bold" fontSize="20px" mb={{ base: 4, md: 7 }}>Get Newsletter</Text>
                                <Text color="gray" fontSize="sm" mb={2}>
                                Want to be notified about our services. Just sign up and we'll send you a notification by email.
                                </Text>
                                <HStack w="full">
                                    <Input
                                        placeholder="Email Address"
                                        bg="transparent"
                                        border="1px solid"
                                        borderColor="gray"
                                        _focus={{ borderColor: 'yellow' }}
                                    />
                                    <IconButton
                                        bg="yellow"
                                        color="black"
                                        aria-label="Subscribe"
                                        icon={<ArrowForwardIcon />}
                                        _hover={{ bg: 'lightgreen' }}
                                    />
                                </HStack>
                            </Stack>

                        </SimpleGrid>

                        {/* Copyright Section */}
                        <Flex justifyContent="center" alignItems="center" mt={{ base: 8, md: 16 }} textAlign="center">
                            <Text fontSize="sm" color="gray">
                                Copyright © 2024 <Text as="span" color="yellow">Vietlongfruit</Text>. All Rights Reserved.
                            </Text>
                        </Flex>
                    </Container>
                    
                    {/* Scroll to Top Button */}
                    <IconButton
                        aria-label="Scroll to top"
                        icon={<ChevronUpIcon boxSize={6} />}
                        onClick={scrollToTop} 
                        position="absolute" 
                        right={{ base: 4, md: 10 }} 
                        bottom={{ base: 4, md: 10 }} 
                        bg="transparent" 
                        color="gray.400" 
                        border="1px solid" 
                        borderColor="gray.600" 
                        borderRadius="full" 
                        w="40px" 
                        h="40px" 
                        _hover={{
                            color: 'lightgreen', 
                            borderColor: 'lightgreen', 
                            bg: 'rgba(255,255,255,0.05)' 
                        }}
                        transition="all 0.3s"
                    />
                </Box>
    );
});

export default Footer;