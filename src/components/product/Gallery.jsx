import { useState } from 'react';
import { Box, Image, HStack, Flex } from '@chakra-ui/react';

const Gallery = ({ mainImage, galleryImages = [] }) => {
    
    // Combine the main image and any extra images into one single array
    const allImages = [mainImage, ...galleryImages].filter(Boolean);
    
    // STATE: Track the currently displayed large image. Defaults to the first image.
    const [activeImg, setActiveImg] = useState(allImages[0]);

    return (
        <Flex direction="column" gap={4} w="full" align="center">
            
            {/* 1. BIG MAIN IMAGE CONTAINER */}
            <Box
                w="full" 
                maxW={{ base: "350px", md: "400px" }}
                h={{ base: "350px", md: "400px" }} 
                bg="white"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="sm"
                p={{ base: 4, md: 8 }} 
                mx="auto" 
            >
                <Image
                    src={activeImg}
                    alt="Product Main"
                    w="full"
                    h="full"
                    objectFit="contain" 
                    transition="all 0.3s ease-in-out"
                />
            </Box>

            {/* 2. THUMBNAILS ROW */}
            {allImages.length > 1 && (
                <HStack spacing={{ base: 3, md: 4 }} overflowX="auto" py={2} justify="center" w="full">
                    
                    {allImages.map((img, idx) => {
                        const isActive = activeImg === img;
                        
                        return (
                            <Box
                                key={idx}
                                onClick={() => setActiveImg(img)}
                                cursor="pointer"
                                borderRadius="xl"
                                overflow="hidden"
                                border="1px solid"
                                borderColor={isActive ? "darkgreen" : "transparent"} 
                                bg="white"
                                boxSize={{ base: "60px", md: "70px" }} 
                                p={{ base: 1, md: 2 }} 
                                transition="all 0.2s"
                                _hover={{ borderColor: "darkgreen" }}
                                flexShrink={0}
                            >
                                <Image 
                                    src={img} 
                                    w="full" 
                                    h="full" 
                                    objectFit="contain" 
                                />
                            </Box>
                        );
                    })}
                </HStack>
            )}
        </Flex>
    );
};

export default Gallery;