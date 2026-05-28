import { 
    Box, 
    Text, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel, 
    Flex, 
    Image, 
    VStack, 
} from '@chakra-ui/react';

const ProductTabs = ({ product }) => {
    if (!product) return null;

    const details = product.tabDetails || {};

    // --- THE FOLDER TAB EFFECT STYLING ---
    const tabStyles = {
        color: "gray.500",
        fontWeight: 500,
        fontSize: { base: "sm", md: "md" },
        py: { base: 3, md: 4 }, 
        px: { base: 6, md: 10 }, 
        bg: "transparent", 
        whiteSpace: "nowrap",
        transition: "all 0.3s",
        _selected: {
            color: "darkgreen",
            fontWeight: 700,
            bg: "white", 
        },
        _hover: {
            color: "darkgreen",
        },
    };

    return (
        <Box w="full" mt={{ base: 12, md: 24 }}>
            
            {/* TABS COMPONENT */}
            <Tabs variant="unstyled" align="center">
                
                {/* TAB HEADERS - Z-index ensures they stay ON TOP of the white background */}
                <TabList gap={{ base: 2, md: 4 }} justifyContent="center" position="relative" zIndex={2}>
                    <Tab {...tabStyles}>Description</Tab>
                    <Tab {...tabStyles}>Additional information</Tab>
                    <Tab {...tabStyles}>Reviews (0)</Tab>
                </TabList>

                {/* FULL BLEED BACKGROUND (TRÀN VIỀN) */}
                <Box 
                    bg="white" 
                    w="100vw" 
                    position="relative" 
                    left="50%" 
                    transform="translateX(-50%)"
                    py={{ base: 10, md: 16 }} // Breathing room top and bottom
                    zIndex={1}
                >
                    {/* INNER CONTAINER */}
                    <Box maxW="900px" mx="auto" px={{ base: 4, md: 8 }}>
                        
                        <TabPanels textAlign="left">
                            
                            {/* 1. DESCRIPTION TAB */}
                            <TabPanel p={0}>
                                <VStack spacing={8} align="flex-start" w="full">
                                    
                                    {/* DYNAMIC DATA: Map through paragraphs */}
                                    <Box w="full">
                                        {details.paragraphs ? (
                                            details.paragraphs.map((para, index) => (
                                                <Text key={index} color="gray.500" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8" mb={4}>
                                                    {para}
                                                </Text>
                                            ))
                                        ) : (
                                            <Text color="gray.500">More details coming soon.</Text>
                                        )}
                                    </Box>

                                    {/* DYNAMIC DATA: Render images only if the array exists and is not empty */}
                                    {details.images && details.images.length > 0 && (
                                        <Flex direction="column" gap={3} w="full">
                                            
                                            {details.images[0] && (
                                                <Image 
                                                    src={details.images[0]} 
                                                    alt="Description 1" 
                                                    w="full" 
                                                    h={{ base: "280px", md: "450px" }} 
                                                    objectFit="cover" 
                                                />
                                            )}

                                            <Flex direction={{ base: "column", md: "row" }} gap={3} w="full">
                                                {details.images[1] && (
                                                    <Image 
                                                        src={details.images[1]} 
                                                        alt="Description 2" 
                                                        w={{ base: "full", md: "60%" }} 
                                                        h={{ base: "300px", md: "300px" }} 
                                                        objectFit="cover" 
                                                    />
                                                )}
                                                {details.images[2] && (
                                                    <Image 
                                                        src={details.images[2]} 
                                                        alt="Description 3" 
                                                        w={{ base: "full", md: "50%" }} 
                                                        h={{ base: "500px", md: "300px" }} 
                                                        objectFit="cover" 
                                                    />
                                                )}
                                            </Flex>

                                        </Flex>
                                    )}
                                </VStack>
                            </TabPanel>

                            {/* 2. ADDITIONAL INFORMATION TAB */}
                            <TabPanel p={0}>
                                <Text color="gray.500" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8">
                                    Weight: {details.weight || "N/A"} <br/>
                                    Dimensions: {details.dimensions || "N/A"} <br/>
                                    Storage Instructions: {details.storage || "N/A"}
                                </Text>
                            </TabPanel>

                            {/* 3. REVIEWS TAB */}
                            <TabPanel p={0}>
                                <Text color="gray.500" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8">
                                    There are no reviews yet. Be the first to review "{product.name}"!
                                </Text>
                            </TabPanel>

                        </TabPanels>
                    </Box>
                </Box>
            </Tabs>
        </Box>
    );
};

export default ProductTabs;