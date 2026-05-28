import { useState } from 'react';
import { Box, Container, Heading, Flex, Button, SimpleGrid, Tabs, TabList, Tab, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; 

import ProductCard from '../common/ProductCard';
import leafIcon from '../../assets/icons/Icon-17.svg';
import footerMap from '../../assets/images/footer-map.png';
import customArrowIcon from '../../assets/icons/Icon-42.svg';

const products = [
  { id: 1, name: "Passion Fruit", category: "Seasonal", image: "/src/assets/images/Layer-58.jpg" },
  { id: 2, name: "Pomelo",        category: "Featured", image: "/src/assets/images/Layer-40.jpg" },
  { id: 3, name: "Rambutan",      category: "Seasonal", image: "/src/assets/images/Layer-92.jpg" },
  { id: 4, name: "Dragon Fruit",  category: "Featured", image: "/src/assets/images/Layer-56.svg" },
  { id: 5, name: "Durian",        category: "Seasonal", image: "/src/assets/images/Layer-75.jpg" },
  { id: 6, name: "Bell Fruit",    category: "Featured", image: "/src/assets/images/Layer-73.jpg" },
  { id: 7, name: "Mangosteen",    category: "Seasonal", image: "/src/assets/images/Layer-72.svg" },
  { id: 8, name: "Milk Fruit",    category: "Featured", image: "/src/assets/images/Layer-74.jpg" },
];

// Defined categories for the filter tabs
const categories = ["All", "Featured", "Seasonal"];

const ProductSection = () => {
  // State to track the currently selected filter tab
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamically filter products based on the active tab selection
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  return (
    <Box bg="bgLight" py={{ base: 20, md: 40 }} overflow="hidden" position="relative">
        
        {/* BACKGROUND MAP IMAGE */}
        <Box
            as="img"
            src={footerMap}
            alt="Map background"
            aria-hidden="true"
            position="absolute"
            top={{ base: "auto", md: "80%" }} 
            bottom={{ base: 0, md: "auto" }}  
            left="50%" 
            transform={{ base: "translateX(-50%)", md: "translate(-50%, -50%)" }}
            w={{ base: "100%", md: "auto" }} 
            h={{ base: "auto", md: "full" }} 
            maxW="100%" 
            maxH="100%" 
            objectFit="contain" 
            opacity={1} 
            pointerEvents="none"
            userSelect="none"
            display="block"
            zIndex={0}
        />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <VStack>
            {/* SECTION HEADER */}
            <Flex justify="space-between" align="center" gap={-1}>
                <Heading color="darkgreen" fontWeight={700} textAlign="center" fontSize={{ base: "3xl", md: "4xl" }}>
                    Our Products
                </Heading>

                <Box
                    as="img"
                    src={leafIcon}
                    h={{ base: "20px", md: "30px" }}
                    w="auto"
                    display="block"
                    transform={{ base: "translate(-10px, -15px)", lg: "translate(-15px, -20px)" }}
                />
            </Flex>

            {/* CATEGORY FILTER MENU */}
            <Tabs variant="unstyled" mb={10}>
                <TabList gap={{ base: 2, md: 4 }}>
                    {categories.map((cat) => (
                    <Tab 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        px={{ base: 4, md: 8 }}
                        fontSize={{ base: "sm", md: "md" }}
                        transition="all 0.2s"
                        _hover={{ color: "darkgreen" }} 
                        _selected={{ 
                            color: "darkgreen",        
                            fontWeight: "bold",        
                            borderBottom: "2px solid", 
                            borderColor: "darkgreen"
                        }} 
                    >
                        {cat}
                    </Tab>
                    ))}
                </TabList>
            </Tabs>
        </VStack>

        {/* PRODUCT GRID CONTAINER */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {/* Renders only the products that match the active category state */}
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </SimpleGrid>

        {/* "SHOW ALL" ACTION BUTTON */}
        <Flex justify="center" mt={{ base: 12, md: 20 }}>
          <Button 
            as={RouterLink}
            to="/product"
            rightIcon={
              <Box 
                as="img" 
                src={customArrowIcon} 
                w={{ base: "10px", md: "12px" }}
                h="auto" 
              />
            }
            variant="solid" 
            bg="buttonGreen"
            color="white" 
            fontWeight={600} 
            fontSize={{ base: "14px", md: "16px" }} 
            h={{ base: "48px", md: "56px" }} 
            px={{ base: 8, md: 10 }} 
            w={{ base: "80%", sm: "auto" }}
            borderRadius="full" 
            transition="all 0.2s"
            _hover={{ bg: "buttonGreenHover" }}
            _active={{ bg: "buttonGreenActive" }}
          >
            Show All 
          </Button>
        </Flex>

      </Container>
    </Box>
  );
};

export default ProductSection;