import { Box, Flex, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useCarousel } from '../../hooks/useCarousel';

const ProductHero = ({ title = "Product", bgImage, productName, pageName = "Product" }) => {
    const isCarousel = Array.isArray(bgImage);
    const currentSlide = useCarousel(isCarousel ? bgImage.length : 1, isCarousel);

    return (
        <Box 
            position="relative" 
            w="full" 
            h={{ base: "40vh", md: "50vh" }}
            overflow="hidden"
        >
            {/* BACKGROUND LAYER */}
            {isCarousel ? (
                // If Array: Map through images and fade them in/out
                bgImage.map((img, index) => (
                    <Box
                        key={index}
                        position="absolute"
                        inset={0} 
                        backgroundImage={`url(${img})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        opacity={currentSlide === index ? 1 : 0}
                        transition="opacity 1s ease-in-out" 
                        zIndex={0}
                    />
                ))
            ) : (
                <Box
                    position="absolute"
                    inset={0}
                    backgroundImage={`url(${bgImage})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    zIndex={0}
                />
            )}

            <Box position="absolute" inset={0} bg="blackAlpha.300" zIndex={1} />

            {/* CONTENT LAYER */}
            <Flex
                position="relative"
                zIndex={2}
                w="full"
                h="full"
                alignItems="center"
                px={{ base: 8, md: 24, lg: 40 }}
            >
                <Box color="white">
                    <Heading
                        as="h1"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight={600}
                        mb={4}
                        letterSpacing="wide"
                    >
                        {title}
                    </Heading>

                    <Breadcrumb separator=">" fontSize={{ base: "sm", md: "md" }} fontWeight={500}>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={RouterLink} to="/" _hover={{ opacity: 0.8 }}>
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage={!productName}>
                            <BreadcrumbLink 
                                as={productName ? RouterLink : "span"} 
                                to={productName ? "/product" : undefined}
                                color={!productName ? "yellow" : "white"}
                                _hover={productName ? { opacity: 0.8 } : { textDecoration: "none", cursor: "default" }}
                            >
                                {pageName}
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        {productName && (
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink 
                                    color="yellow" 
                                    _hover={{ textDecoration: "none", cursor: "default" }}
                                >
                                    {productName}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                    </Breadcrumb>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProductHero;