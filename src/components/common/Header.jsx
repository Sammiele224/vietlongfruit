import { memo } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { 
    Flex, HStack, Link, Image, IconButton, useDisclosure, Drawer, 
    DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, 
    VStack, Box, Input, InputGroup, InputRightElement, useTheme,
    Heading, Center, Divider
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useScrollListener } from '../../hooks/useScrollListener';
import { NAV_ITEMS } from '../../constants/navigation';

const Header = memo(() => {
    const theme = useTheme();
    const navigate = useNavigate(); 
    const isScrolled = useScrollListener();
    
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

    // 3. MODIFIED: Updated the search logic to navigate to the product page with the query
    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            // Get the value, remove extra spaces, and convert to lowercase for case-insensitive search
            const searchQuery = e.target.value.trim().toLowerCase();
            
            if (searchQuery) {
                // Navigate to the Product page and append the search keyword as a URL parameter
                navigate(`/product?search=${encodeURIComponent(searchQuery)}`);
                onSearchClose(); 
            }
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
                minH={{ base: "60px", md: "65px" }} 
                mb="-1px"
                bg={isScrolled ? "rgba(0, 0, 0, 0.3)" : "black"}
                backdropFilter={isScrolled ? "blur(15px)" : "none"}
                transition="all 0.3s ease-in-out"
                color="white"
                py={2}
                px={{ base: 4, md: 8 }}
                justifyContent="space-between"
                alignItems="center"
            >
                {/* Logo */}
                <Link href="/" display="flex" alignItems="center">
                    <Image
                        src="/Logo-white.svg"
                        alt="vietlongfruit logo"
                        w={{ base: "160px", md: "220px" }}
                        maxH={{ base: "30px", md: "30px" }} 
                        objectFit="contain"
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
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.label} href={item.path} whiteSpace="nowrap" _hover={{ color: theme.colors.yellow, textDecoration: 'none' }}>
                            {item.label}
                        </Link>
                    ))}
                </HStack>

                {/* Right Side Icons */}
                <HStack spacing={4}>
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

            {/* SEARCH OVERLAY DRAWER */}
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
                                    onKeyDown={handleSearchSubmit} // Trigger search on Enter
                                />
                                <InputRightElement>
                                    <SearchIcon color="black" w={5} h={5} />
                                </InputRightElement>
                            </InputGroup>
                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* MOBILE MENU DRAWER */}
            <Drawer placement="right" onClose={onMenuClose} isOpen={isMenuOpen} size="xs">
                <DrawerOverlay />
                <DrawerContent bg="white" color="black">
                    <DrawerCloseButton size="lg" mt={2} mr={2} color="gray.400" />
                    
                    <DrawerBody pt={16} px={0}>
                        <VStack align="start" spacing={0} w="full">
                            {NAV_ITEMS.map((item) => (
                                <Box key={item.label} w="full">
                                    <Link
                                        href={item.path}
                                        display="block"
                                        py={4}
                                        px={8}
                                        fontSize="md"
                                        fontWeight="normal"
                                        _hover={{ color: theme.colors.darkgreen, textDecoration: 'none', bg: 'gray.50' }}
                                    >
                                        {item.label}
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