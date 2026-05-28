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
    Image,
    useTheme
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
    const theme = useTheme();

    // Smooth scroll back to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    return(
        <Box bg="black" color="white" pt={10} pb={10} as='footer' position="relative">
            <Container maxW="6xl">
                        <SimpleGrid 
                            columns={{base: 1, md: 3}} 
                            spacing={{ base: 8, md: 12, lg: 24 }}
                        >
                            {/* Contact Info Section */}
                            <Stack spacing={4}>

                                <Link href="/">
                                    <Image 
                                        src="/Logo-white.svg" 
                                        alt="Vietlongfruit Logo" 
                                        maxWidth="200px" 
                                        objectFit="contain" 
                                        ml={{ base: -5, md: -5 }}
                                        mb={3}
                                    />
                                </Link>

                                {/* Location Info */}
                                <HStack alignItems="flex-start">
                                    <Image src={locationIcon} alt="Location" boxSize="15px" mt={1} />
                                    <Text color={theme.colors.grey} fontSize="12">160 Kansas City, Missouri, USA</Text>
                                </HStack>

                                {/* Phone Info */}
                                <HStack alignItems="center">
                                    <Image src={phoneIcon} alt="Phone" boxSize="15px" />
                                    <Text color={theme.colors.grey} fontSize="12">00 0566 999 34 00</Text>
                                </HStack>

                                {/* Email Info */}
                                <HStack alignItems="center">
                                    <Image src={emailIcon} alt="Email" boxSize="15px" />
                                    <Text color={theme.colors.grey} fontSize="12">support@vietlongfruit.com</Text>
                                </HStack>

                                {/* Social Links */}
                                <Text mt={2} fontSize="12">SOCIAL CONNECT</Text>

                                <HStack spacing={4}>
                                    <Link href="#" _hover={{ transform: 'scale(1.1)' }} transition="0.2s">
                                        <Image src={fbIcon} alt="Facebook" boxSize="4" />
                                    </Link>

                                    <Link href="#" _hover={{ transform: 'scale(1.1)' }} transition="0.2s">
                                        <Image src={twitterIcon} alt="Twitter" boxSize="4" />
                                    </Link>

                                    <Link href="#" _hover={{ transform: 'scale(1.1)' }} transition="0.2s">
                                        <Image src={ytIcon} alt="Youtube" boxSize="4" />
                                    </Link>
                                </HStack>
                            </Stack>

                            {/* Essential Pages Links */}
                            <Stack align="flex-start" fontSize="12" mt={{ base: 4, md: 6 }}>
                                <Text fontWeight="bold" fontSize="15px" mb={{ base: 0, md: 5 }}>Essential Pages</Text>
                                <Link color="gray" _hover={{ color: theme.colors.yellow }}>Contact</Link>
                                <Link color="gray" _hover={{ color: theme.colors.yellow }}>Service</Link>
                                <Link color="gray" _hover={{ color: theme.colors.yellow }}>Team</Link>
                                <Link color="gray" _hover={{ color: theme.colors.yellow }}>About</Link>
                            </Stack>

                            {/* Newsletter Signup */}
                            <Stack align="flex-start" mt={{ base: 4, md: 6 }}>
                                <Text fontWeight="bold" fontSize="15px" mb={{ base: 1, md: 5 }}>Get Newsletter</Text>
                                <Text color="gray" fontSize="12" mb={2}>
                                Want to be notified about our services. Just sign up and we'll send you a notification by email.
                                </Text>
                                <HStack w="full">
                                    <Input
                                        placeholder="Email Address"
                                        bg="transparent"
                                        border="1px solid"
                                        borderColor="gray"
                                        fontSize="sm"
                                        _focus={{ borderColor: theme.colors.yellow }}
                                    />
                                    <IconButton
                                        bg={theme.colors.yellow}
                                        color="black"
                                        aria-label="Subscribe"
                                        icon={<ArrowForwardIcon />}
                                        _hover={{ bg: theme.colors.lightgreen }}
                                    />
                                </HStack>
                            </Stack>

                        </SimpleGrid>

                        {/* Copyright Section */}
                        <Flex justifyContent="center" alignItems="center" mt={{ base: 8, md: 16 }} textAlign="center">
                            <Text fontSize="12" color="gray">
                                Copyright © 2024 <Text as="span" color={theme.colors.yellow}>Vietlongfruit</Text>. All Rights Reserved.
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
                            color: theme.colors.lightgreen, 
                            borderColor: theme.colors.lightgreen, 
                            bg: 'rgba(255,255,255,0.05)' 
                        }}
                        transition="all 0.3s"
                    />
                </Box>
    );
});

export default Footer;