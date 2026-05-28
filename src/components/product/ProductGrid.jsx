import { useState } from 'react';
import { 
    Box, 
    Flex, 
    Text, 
    Select, 
    SimpleGrid, 
    HStack, 
    Button, 
    Icon,
    Divider,
    Image 
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { products } from '../../data/products';
import ProductCard from '../common/ProductCard';

import footerMap from '../../assets/images/footer-map.png';

const ProductGrid = () => {
    // 1. States for Pagination and Sorting
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState('default'); // Tracks the dropdown selection
    
    const itemsPerPage = 9; 
    
    // 2. SORTING LOGIC: Sort a copy of the array BEFORE slicing
    let sortedProducts = [...products];
    
    if (sortOrder === 'price-low') {
        // Sorts lowest price to highest (Assumes your data has a 'price' field)
        sortedProducts.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortOrder === 'price-high') {
        // Sorts highest price to lowest
        sortedProducts.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortOrder === 'latest') {
        // Sorts by ID descending (newest items first)
        sortedProducts.sort((a, b) => b.id - a.id);
    } else if (sortOrder === 'popularity' || sortOrder === 'rating') {
        // Sorts by rating (Assumes your data has a 'rating' field)
        sortedProducts.sort((a, b) => (b.rating || 5) - (a.rating || 5));
    }

    // 3. PAGINATION LOGIC: Now we slice the sorted array, not the raw one!
    const totalItems = sortedProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

    // Whenever sorting changes, reset to page 1 so the user doesn't get lost
    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        setCurrentPage(1); 
    };

    return (
        <Box w="full" position="relative" bg="bgLight" py={{ base: 10, md: 20 }} px={{ base: 4, md: 8 }}>
            {/* WATERMARK IMAGE FIX */}
            <Image
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
            
            {/* TOP CONTROLS: Results Count & Sorting */}
            <Box position="relative" zIndex={1} maxW="container.xl" mx="auto">
                
                {/* TOP CONTROLS */}
                <Flex 
                    justify="space-between" 
                    align="center" 
                    mb={4} 
                    maxW="800px" 
                    mx="auto"
                    direction={{ base: "row", sm: "row" }} 
                    wrap="wrap"
                    gap={4}
                >
                    <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }} fontWeight={500}>
                        Showing {Math.min(endIndex, totalItems)} of {totalItems} results
                    </Text>

                    {/* FILTER FIX: Hooked up the onChange event and value */}
                    <Select 
                        value={sortOrder}
                        onChange={handleSortChange}
                        w="fit-content" 
                        variant="unstyled" 
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.500"
                        fontWeight={500}
                        cursor="pointer"
                        _hover={{ color: "darkgreen" }}
                    >
                        <option value="default">Default sorting</option>
                        <option value="latest">Sort by latest</option>
                        <option value="price-low">Sort by price: low to high</option>
                        <option value="price-high">Sort by price: high to low</option>
                    </Select>
                </Flex>

                <Divider borderColor="gray.300" mb={8} maxW="800px" mx="auto" />

                {/* THE PRODUCT GRID */}
                <SimpleGrid 
                    columns={{ base: 2, md: 3 }} 
                    spacing={{ base: 4, md: 5 }} 
                    mb={12}
                    maxW="750px"
                    mx="auto"    
                >
                    {currentProducts.map((fruit) => (
                        <ProductCard key={fruit.id} {...fruit} />
                    ))}
                </SimpleGrid>

                {/* PAGINATION BUTTONS */}
                {totalPages > 1 && (
                    <Flex justify="center">
                        <HStack spacing={{ base: 2, md: 3 }}>
                            {[...Array(totalPages)].map((_, index) => {
                                const pageNum = index + 1;
                                const isActive = currentPage === pageNum;

                                return (
                                    <Button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        w={{ base: "32px", md: "40px" }}
                                        h={{ base: "32px", md: "40px" }}
                                        minW="unset"
                                        borderRadius="full"
                                        fontSize={{ base: "sm", md: "md" }}
                                        fontWeight={600}
                                        bg={isActive ? "buttonGreen" : "white"}
                                        color={isActive ? "white" : "gray.600"}
                                        boxShadow={isActive ? "none" : "sm"} 
                                        _hover={{ bg: isActive ? "buttonGreenHover" : "gray.50" }}
                                    >
                                        {pageNum}
                                    </Button>
                                );
                            })}

                            <Button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                w={{ base: "32px", md: "40px" }}
                                h={{ base: "32px", md: "40px" }}
                                minW="unset"
                                borderRadius="full"
                                bg="white"
                                color="gray.600"
                                boxShadow="sm"
                                _hover={{ bg: "gray.50" }}
                                isDisabled={currentPage === totalPages}
                            >
                                <Icon as={ChevronRightIcon} w={5} h={5} />
                            </Button>
                        </HStack>
                    </Flex>
                )}
            </Box>
        </Box>
    );
};

export default ProductGrid;