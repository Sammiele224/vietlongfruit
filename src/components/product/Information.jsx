import { useState } from 'react';
import { 
    Box, 
    VStack, 
    Heading, 
    Text, 
    HStack, 
    Icon, 
    Button, 
    Divider, 
    Flex, 
    Link,
    Image 
} from '@chakra-ui/react';

// Assuming these are your local icons
import boatIcon from '../../assets/icons/Icon-04.svg';
import boxIcon from '../../assets/icons/Icon-08.svg';
import fbIcon from '../../assets/icons/Icon-37b.svg';
import twitterIcon from '../../assets/icons/Icon-39b.svg';
import ytIcon from '../../assets/icons/Icon-41b.svg';
import customArrowIcon from '../../assets/icons/Icon-42.svg';

const Information = ({ product }) => {
    // 1. STATE: Track selections for Season and Box options independently
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [selectedBox, setSelectedBox] = useState(null);

    // 2. LOGIC: Check if both options are selected to enable the button
    const isReadyToQuote = selectedSeason && selectedBox;

    if (!product) return null;

    return (
        <VStack align="flex-start" spacing={6} w="full">
            
            {/* --- TITLE & RATING --- */}
            <Box w="full">
                <Heading as="h1" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} color="darkgreen" mb={3}>
                    {product.name}
                </Heading>
                
                <HStack spacing={1}>
                    {[...Array(5)].map((_, i) => (
                        <Icon 
                            key={i} 
                            viewBox="0 0 24 24" 
                            stroke="#ECC94B" 
                            w={4} 
                            h={4}
                            fill="none"
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </Icon>
                    ))}
                </HStack>
            </Box>

            {/* --- SHORT DESCRIPTION --- */}
            <Text color="gray.500" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8" w="full" textAlign="left">
                {product.description || "The Anti Slip Studio Socks offer comfort and reliability in the studio. A silicone grip sole and internal silicone grip offer full support during your entire studio workou."}
            </Text>

            {/* --- PACKING DETAILS (Interactive Options) --- */}
            <Flex 
                direction="row" 
                gap={{ base: 4, md: 8 }} 
                w="full"
                align={{ base: "flex-start", md: "flex-start" }}
                mt={2}
            >
                <Text color="lightgreen" fontWeight={700} fontSize="xl" whiteSpace={{ base: "normal", md: "nowrap" }}>
                    Packing:
                </Text>

                <Flex direction={{ base: "column", md: "row" }} gap={{ base: 6, md: 10 }}>
                    
                    {/* SEASON COLUMN */}
                    <VStack 
                        align="flex-start" 
                        spacing={2} 
                        pr={{ base: 6, md: 10 }} 
                        borderRight={{ base: "none", md: "0.1px solid" }} 
                        borderColor="gray.300"
                    >
                        <Text fontWeight={700} color="darkgreen" fontSize="sm" whiteSpace="nowrap">Season</Text>
                        
                        {/* Interactive Option */}
                        <Text 
                            color={selectedSeason === 'Whole year' ? "darkgreen" : "gray.400"} 
                            fontWeight={selectedSeason === 'Whole year' ? 500 : 400}
                            fontSize="sm"
                            cursor="pointer"
                            whiteSpace={{ base: "normal", md: "nowrap" }} 
                            transition="all 0.2s"
                            onClick={() => setSelectedSeason('Whole year')}
                            _hover={{ color: "darkgreen" }}
                        >
                            Whole year
                        </Text>
                    </VStack>

                    {/* BOX COLUMN */}
                    <VStack align="flex-start" spacing={2}>
                        <Text fontWeight={700} color="darkgreen" fontSize="sm" >Box 2kg</Text>
                        
                        {/* Map through interactive options */}
                        {['Loosed', 'Tray 500gr x 4', 'Tray 1000gr x 2'].map((opt) => (
                            <Text 
                                key={opt}
                                color={selectedBox === opt ? "darkgreen" : "gray.400"} 
                                fontWeight={selectedBox === opt ? 500 : 400}
                                fontSize="sm"
                                cursor="pointer"
                                whiteSpace={{ base: "normal", md: "nowrap" }} 
                                transition="all 0.2s"
                                onClick={() => setSelectedBox(opt)}
                                _hover={{ color: "darkgreen" }}
                            >
                                {opt}
                            </Text>
                        ))}
                    </VStack>
                </Flex>
            </Flex>

            {/* --- CALL TO ACTION BUTTON --- */}
            <Button 
                isDisabled={!isReadyToQuote} // Disabled until BOTH options are selected
                rightIcon={
                    <Box as="img" src={customArrowIcon} w={{ base: "10px", md: "12px" }} h="auto" />
                }
                variant="solid" 
                bg={isReadyToQuote ? "lightgreen" : "gray.300"}
                color={isReadyToQuote ? "white" : "gray.500"} 
                fontWeight={600} 
                fontSize={{ base: "14px", md: "16px" }}
                h={{ base: "45px", md: "50px" }} 
                px={{ base: 8, md: 10 }} 
                w={{ base: "full", sm: "fit-content" }} 
                borderRadius="full" 
                cursor={isReadyToQuote ? "pointer" : "not-allowed"}
                transition="all 0.3s ease"
                _hover={{ bg: isReadyToQuote ? "lightgreen" : "gray.300" }}
                mt={2}
            >
                Price Quote
            </Button>

            <Divider borderColor="gray.300" my={1} />

            {/* --- SHIPPING GUARANTEES --- */}
            <VStack align="flex-start" spacing={4} w="full" fontWeight={400}>
                <HStack spacing={4} align="flex-start">
                    <Image src={boatIcon} alt="boatIcon" boxSize="6" mb={1.5} /> 
                    <Text color="gray.500" fontSize="sm" lineHeight="1.6" whiteSpace={{ base: "normal", md: "nowrap" }} >
                        Free worldwide shipping on all orders over $100
                    </Text>
                </HStack>
                <HStack spacing={4} align="flex-start">
                    <Image src={boxIcon} alt="boxIcon" boxSize="6" mb={1} />
                    <Text color="gray.500" fontSize="sm" lineHeight="2" whiteSpace={{ base: "normal", md: "nowrap" }} >
                        Delivers in: 3-7 Working Days Shipping & Return
                    </Text>
                </HStack>
            </VStack>

            <Divider borderColor="gray.300" my={1} />

            {/* --- PRODUCT METADATA --- */}
            <VStack align="flex-start" spacing={2} w="full" fontSize="sm">
                <Text color="gray.500">
                    <Text as="span" fontWeight={400} mr={2}>SKU:</Text> 
                    {product.sku || "U2022"}
                </Text>
                <Text color="gray.500">
                    <Text as="span" fontWeight={400} mr={2}>Categories:</Text> 
                    <Text as="span" fontWeight={400} color="lightgreen" whiteSpace={{ base: "normal", md: "nowrap" }}>
                        {product.categories ? product.categories.join(', ') : "Eco Garden, Fresh Fruits"}
                    </Text>
                </Text>
                <Text color="gray.500">
                    <Text as="span" fontWeight={400} mr={2}>Tags:</Text> 
                    <Text as="span" fontWeight={400} color="lightgreen" whiteSpace={{ base: "normal", md: "nowrap" }}>
                        {product.tags ? product.tags.join(', ') : "Life Style, Trend"}
                    </Text>
                </Text>
                
                {/* SOCIAL SHARE */}
                <HStack spacing={4} pt={2}>
                    <Text color="gray.500" fontWeight={400}>Share :</Text>
                    <Link href="#" _hover={{ transform: 'scale(1.2)' }} transition="0.2s">
                        <Image src={fbIcon} alt="Facebook" boxSize="4" />
                    </Link>

                    <Link href="#" _hover={{ transform: 'scale(1.2)' }} transition="0.2s">
                        <Image src={twitterIcon} alt="Twitter" boxSize="4" />
                    </Link>

                    <Link href="#" _hover={{ transform: 'scale(1.2)' }} transition="0.2s">
                        <Image src={ytIcon} alt="Youtube" boxSize="4" />
                    </Link>
                </HStack>
            </VStack>

        </VStack>
    );
};

export default Information;