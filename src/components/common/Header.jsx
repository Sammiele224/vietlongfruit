import { useState, useEffect, memo, useCallback } from 'react';
import { Flex, Text, HStack, Link, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// Navigation header with sticky positioning and scroll effect
const Header = memo(() => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event to update header background
    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return(
        <Flex
            as="nav"
            position="sticky"
            top={0}
            zIndex={999}
            w="full" 
            
            // Dynamic background with blur effect on scroll
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
                />
            </Link>

            {/* Navigation Links - Hidden on mobile */}
            <HStack 
                spacing={{ md: 6, lg: 10 }} 
                display={{ base: "none", lg: "flex" }}
            >
                <Link _hover={{ color: 'yellow', textDecoration: 'none' }}>Home</Link>
                <Link _hover={{ color: 'yellow', textDecoration: 'none' }}>Product</Link>
                <Link _hover={{ color: 'yellow', textDecoration: 'none' }}>Contact</Link>

                <Link whiteSpace="nowrap" _hover={{ color: 'yellow', textDecoration: 'none' }}>About Us</Link>

                <Link _hover={{ color: 'yellow', textDecoration: 'none' }}>Certificate</Link>
                <Link _hover={{ color: 'yellow', textDecoration: 'none' }}>Tracking</Link>
            </HStack>

            {/* Search Icon */}
            <SearchIcon 
                w={5} 
                h={5} 
                cursor="pointer" 
                _hover={{ color: 'yellow' }} 
                mr={{ base: 0, lg: 4 }} 
            />

        </Flex>
    );
});

Header.displayName = 'Header';
export default Header;