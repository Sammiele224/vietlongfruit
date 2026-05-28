import { useRef } from 'react'; // Import thêm useRef của React
import { Box, Flex, Heading, Image, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { products } from '../../data/products';
import ProductCard from '../common/ProductCard';

import leafIcon from '../../assets/icons/Icon-17.svg';
import customArrowIcon from '../../assets/icons/Icon-42.svg';

const RelatedProducts = ({ currentProduct }) => {
    // TẠO REF: Dùng để "nắm thóp" cái khung chứa thẻ sản phẩm
    const scrollRef = useRef(null);

    if (!currentProduct) return null;

    let related = products
        .filter(item => item.id !== currentProduct.id && item.category === currentProduct.category)
        .slice(0, 5);

    if (related.length < 5) {
        const fillers = products
            .filter(item => item.id !== currentProduct.id && !related.includes(item))
            .slice(0, 5 - related.length);
        related = [...related, ...fillers];
    }

    // HÀM XỬ LÝ CUỘN VẬT LÝ
    const scroll = (direction) => {
        if (scrollRef.current) {
            // Chiều rộng 1 card khoảng 300px + gap 32px = cuộn khoảng 332px mỗi lần bấm
            const scrollAmount = direction === 'left' ? -332 : 332; 
            scrollRef.current.scrollBy({ 
                left: scrollAmount, 
                behavior: 'smooth' // Cuộn êm ái
            });
        }
    };

    return (
        <Box w="full" pt={{ base: 12, md: 20 }} overflow="hidden">
            
            {/* --- SECTION HEADER --- */}
            <Flex direction="column" align="center" mb={10}>
                <Flex align="center" gap={2}>
                    <Heading color="darkgreen" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={700}>
                        Related Products
                    </Heading>
                    {leafIcon && (
                        <Image src={leafIcon} h={{ base: "15px", md: "20px" }} w="auto" transform={{ base: "translate(-13px, -13px)", lg: "translate(-15px, -15px)" }} />
                    )}
                </Flex>
            </Flex>

            {/* --- CAROUSEL KHU VỰC CHỨA SẢN PHẨM & NÚT BẤM --- */}
            <Box position="relative" w="full" maxW="container.xl" mx="auto" mb={12}>
                
                {/* NÚT LÙI (BÊN TRÁI) */}
                <Button
                    position="absolute"
                    left={{ base: "0px", md: "20px" }} // Tràn ra lề 1 chút trên desktop
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    onClick={() => scroll('left')}
                    bg="white"
                    boxShadow="lg"
                    borderRadius="full"
                    w="45px"
                    h="45px"
                    minW="0" // Bắt buộc cho nút hình tròn trong Chakra
                    color="darkgreen"
                    fontSize="xl"
                    _hover={{ bg: "gray.100" }}
                >
                    {/* Ký tự mũi tên trái thuần HTML, khỏi lo lỗi font/icon */}
                    &#10094; 
                </Button>

                {/* VÙNG CUỘN CHỨA SẢN PHẨM */}
                <Box
                    ref={scrollRef} // Gắn ref vào đây để JavaScript biết cuộn cái nào
                    w="full"
                    overflowX="auto"
                    px={{ base: 6, md: 10 }}
                    py={4}
                    // ĐOẠN CSS NÀY ĐỂ ẨN THANH CUỘN (SCROLLBAR) Ở DƯỚI CHO ĐẸP
                    sx={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none'
                    }}
                >
                    <Flex gap={8} w="max-content">
                        {related.map((item) => (
                            <Box key={item.id} w={{ base: "250px", md: "250px" }} flexShrink={0}>
                                <ProductCard {...item} />
                            </Box>
                        ))}
                    </Flex>
                </Box>

                {/* NÚT TIẾN (BÊN PHẢI) */}
                <Button
                    position="absolute"
                    right={{ base: "0px", md: "20px" }}
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    onClick={() => scroll('right')}
                    bg="white"
                    boxShadow="lg"
                    borderRadius="full"
                    w="45px"
                    h="45px"
                    minW="0"
                    color="darkgreen"
                    fontSize="xl"
                    _hover={{ bg: "gray.100" }}
                >
                     &#10095;
                </Button>
            </Box>

            {/* --- "SHOW ALL" BUTTON --- */}
            <Flex justify="center" mt={{ base: 12, md: 20 }}>
                <Button 
                as={RouterLink}   // <-- ADD THIS
                    to="/product#product-grid"   // <-- Add '#product-grid' to the end of the path
                rightIcon={
                    <Box 
                    as="img" 
                    src={customArrowIcon} 
                    w={{ base: "10px", md: "12px" }} // Scaled down for mobile devices
                    h="auto" 
                    />
                }
                variant="solid" 
                bg="buttonGreen"
                color="white" 
                fontWeight={600} 
                fontSize={{ base: "14px", md: "16px" }} // Increased for mobile readability
                h={{ base: "48px", md: "56px" }} // Explicit heights for better button proportions
                px={{ base: 8, md: 10 }} 
                w={{ base: "80%", sm: "auto" }} // Wide on mobile, auto-width on tablet/desktop
                borderRadius="full" 
                transition="all 0.2s"
                _hover={{ bg: "buttonGreenHover" }}
                _active={{ bg: "buttonGreenActive" }}
                >
                Show All 
                </Button>
            </Flex>

        </Box>
    );
};

export default RelatedProducts;