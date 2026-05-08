import { useState, useEffect, memo, useCallback } from 'react';
import { 
    Flex, 
    HStack, 
    Link, 
    Image, 
    IconButton, 
    useDisclosure, 
    Drawer, 
    DrawerBody, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    VStack, 
    Box, 
    Divider,
    Input,
    InputGroup,
    InputRightElement,
    Heading,
    Center,
    useTheme
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import projectBg from '../../assets/images/project-bg.png';

const Header = memo(() => {
    const theme = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    
    // Rename the hooks to handle both the Menu and the Search overlay separately
    const { 
        isOpen: isMenuOpen, 
        onOpen: onMenuOpen, 
        onClose: onMenuClose 
    } = useDisclosure();
    
    const { 
        isOpen: isSearchOpen, 
        onOpen: onSearchOpen, 
        onClose: onSearchClose 
    } = useDisclosure();

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const navItems = ['Home', 'Product', 'Contact', 'About Us', 'Certificate', 'Tracking'];

    // Placeholder function for when the user actually hits Enter
    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            const searchQuery = e.target.value;
            console.log("Searching for:", searchQuery);
            // Add your actual search logic/routing here
            
            // Optionally close the drawer after searching
            onSearchClose(); 
        }
    };

    return(
        <>
            <Flex
                as="nav"
                position="sticky"
                top={0}
                zIndex={999}
                w="full" 
                h={{ base: "50px", md: "70px" }}
                bg={isScrolled ? "rgba(0, 0, 0, 0.3)" : "black"}
                backdropFilter={isScrolled ? "blur(15px)" : "none"}
                transition="all 0.3s ease-in-out"
                color="white"
                py={3}
                px={{ base: 4, md: 8 }}
                justifyContent="space-between"
                alignItems="center"
            >
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/Logo-white.svg"
                        alt="vietlongfruit logo"
                        w={{ base: "160px", md: "220px" }}
                        objectFit="contain"
                        mt={{ base: 0, md: -1, lg: -2 }}
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <HStack 
                    spacing={{ md: 4, lg: 8 }} 
                    display={{ base: "none", lg: "flex" }}
                    fontSize={{ lg: "10px", xl: "14px" }}
                    position="absolute"
                    left="50%"
                    transform="translateX(-50%)"
                >
                    {navItems.map((item) => (
                        <Link key={item} whiteSpace="nowrap" _hover={{ color: theme.colors.yellow, textDecoration: 'none' }}>
                            {item}
                        </Link>
                    ))}
                </HStack>

                {/* Right Side Icons */}
                <HStack spacing={4}>
                    {/* Search Icon - Now triggers onSearchOpen */}
                    <SearchIcon 
                        w={5} 
                        h={5} 
                        cursor="pointer" 
                        _hover={{ color: theme.colors.yellow }} 
                        mr={{ base: 0, lg: 4 }} 
                        onClick={onSearchOpen}
                    />

                    {/* Hamburger Menu Icon */}
                    <IconButton
                        display={{ base: "flex", lg: "none" }}
                        icon={<HamburgerIcon w={6} h={6} />}
                        variant="unstyled"
                        onClick={onMenuOpen}
                        aria-label="Open Menu"
                        _hover={{ color: theme.colors.yellow }}
                        minW="auto"
                        height="auto"
                    />
                </HStack>
            </Flex>

            {/* 1. SEARCH OVERLAY DRAWER */}
            <Drawer placement="top" onClose={onSearchClose} isOpen={isSearchOpen} size="md">
                <DrawerOverlay bg="blackAlpha.600" />
                <DrawerContent bg="white" color="black" py={12} borderBottomRadius="md">
                    <DrawerCloseButton size="lg" mt={4} mr={4} color="gray.400" />
                    
                    <DrawerBody>
                        <Center flexDirection="column" h="full" maxW="600px" mx="auto" mt={8}>
                            <Heading as="h2" size="lg" mb={10} fontWeight="bold">
                                Start typing and hit Enter
                            </Heading>
                            
                            <InputGroup size="lg">
                                <Input 
                                    variant="flushed" 
                                    placeholder="Search anything" 
                                    fontSize="md"
                                    borderColor="gray.300"
                                    focusBorderColor="black"
                                    autoFocus
                                    onKeyDown={handleSearchSubmit}
                                />
                                <InputRightElement>
                                    <SearchIcon color="black" w={5} h={5} />
                                </InputRightElement>
                            </InputGroup>
                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* 2. MOBILE MENU DRAWER (From previous step) */}
            <Drawer placement="right" onClose={onMenuClose} isOpen={isMenuOpen} size="xs">
                <DrawerOverlay />
                <DrawerContent 
                    bg="white" 
                    color="black"
                    backgroundImage={`url(${projectBg})`}
                    backgroundPosition="bottom center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                >
                    <DrawerCloseButton size="lg" mt={2} mr={2} color="gray.400" />
                    
                    <DrawerBody pt={16} px={0}>
                        <VStack align="start" spacing={0} w="full">
                            {navItems.map((item) => (
                                <Box key={item} w="full">
                                    <Link
                                        display="block"
                                        py={4}
                                        px={8}
                                        fontSize="md"
                                        fontWeight="normal"
                                        _hover={{ color: theme.colors.darkgreen, textDecoration: 'none', bg: 'gray.50' }}
                                    >
                                        {item}
                                    </Link>
                                    <Divider borderColor="gray.100" />
                                </Box>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
});

Header.displayName = 'Header';
export default Header;