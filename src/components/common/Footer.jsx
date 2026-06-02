import { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box, Container, SimpleGrid, Stack, Text, Flex, Input, IconButton, Link, HStack, Image, useTheme
} from '@chakra-ui/react';
import { ArrowForwardIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { FOOTER_LINKS } from '../../constants/navigation';
import locationIcon from '../../assets/icons/Icon-05.svg';
import phoneIcon from '../../assets/icons/Icon-26.svg';
import emailIcon from '../../assets/icons/Icon-40.svg';
import fbIcon from '../../assets/icons/Icon-37.svg';
import twitterIcon from '../../assets/icons/Icon-39.svg';
import ytIcon from '../../assets/icons/Icon-41.svg';

const Footer = memo(() => {
    const theme = useTheme();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    return(
        <Box bg="black" color="white" pt={{ base: 10, md: 12 }} pb={{ base: 8, md: 8 }} as='footer' position="relative">
            <Container maxW="1000px" px={{ base: 4, md: 8 }}>
                <SimpleGrid 
                    columns={{base: 1, md: 3}} 
                    spacing={{ base: 8, md: 10, lg: 12 }}
                >
                    {/* --- COLUMN 1: Contact Info --- */}
                    <Stack spacing={4}>
                        <Link as={RouterLink} to="/">
                            <Image 
                                src="/Logo-white.svg" 
                                alt="Vietlongfruit Logo" 
                                maxWidth="180px" 
                                objectFit="contain" 
                                ml={{ base: -4, md: -4 }}
                                mb={2}
                            />
                        </Link>

                        <HStack alignItems="flex-start">
                            <Image src={locationIcon} alt="Location" boxSize="15px" mt={1} />
                            <Text color={theme.colors.grey} fontSize="12">9 Phan Ngu, Da Kao Ward, District 1</Text>
                        </HStack>

                        <HStack alignItems="center">
                            <Image src={phoneIcon} alt="Phone" boxSize="15px" />
                            <Text color={theme.colors.grey} fontSize="12">086 582 7835</Text>
                        </HStack>

                        <HStack alignItems="center">
                            <Image src={emailIcon} alt="Email" boxSize="15px" />
                            <Text color={theme.colors.grey} fontSize="12">sales@vietlongfruit.com</Text>
                        </HStack>

                        <Text mt={2} fontSize="12" fontWeight="600">SOCIAL CONNECT</Text>

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

                    {/* --- COLUMN 2: Essential Pages --- */}
                    <Stack align="flex-start" fontSize="12" mt={{ base: 4, md: 4 }} ml={{ base: 0, md: 10 }}>
                        <Text fontWeight="bold" fontSize="15px" mb={{ base: 2, md: 4 }}>Essential Pages</Text>
                        {FOOTER_LINKS.map((item) => (
                            <Link 
                                key={item.label}
                                as={RouterLink} 
                                to={item.path} 
                                color="gray" 
                                _hover={{ color: theme.colors.yellow }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Stack>

                    {/* --- COLUMN 3: Newsletter --- */}
                    <Stack align="flex-start" mt={{ base: 6, md: 4 }}>
                        <Text fontWeight="bold" fontSize="15px" mb={{ base: 2, md: 4 }}>Get Newsletter</Text>
                        <Text color="gray" fontSize="12" mb={3} lineHeight="1.6">
                            Want to be notified about our services. Just sign up and we'll send you a notification by email.
                        </Text>
                        <HStack w="full">
                            <Input
                                placeholder="Email Address"
                                bg="transparent"
                                border="1px solid"
                                borderColor="gray.600" 
                                fontSize="sm"
                                _focus={{ borderColor: theme.colors.yellow, boxShadow: "none" }}
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
                <Flex justifyContent="center" alignItems="center" mt={{ base: 8, md: 12 }} textAlign="center">
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