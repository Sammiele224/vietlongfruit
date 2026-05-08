import { Box, Image, Text, Flex, Icon, HStack, Link, VStack, useTheme } from '@chakra-ui/react';

const ProductCard = ({ image, name, category, id }) => {
  const theme = useTheme();
  
  return (
    <Link 
      href={`/product/${id}`} // Route to the product detail page
      _hover={{ textDecoration: 'none' }}
    >
      <Box 
        bg="white" 
        borderRadius="xl" 
        overflow="hidden" 
        p={10}
        transition="all 0.3s"
        _hover={{ 
          transform: 'translateY(-10px)', 
          boxShadow: 'xl' 
        }}
        role="group" // Enables nested hover states for child elements like the image
      >
        {/* Product Image */}
        <Box overflow="hidden" borderRadius="xl" mb={4}>
          <Image 
            src={image} 
            alt={name}
            w="full"
            h="140px"
            objectFit="cover"
            transition="transform 0.5s"
            _groupHover={{ transform: 'scale(1.1)' }} // Scales the image up when the parent card is hovered
          />
        </Box>

        <VStack align="flex-start" spacing={1} mt={6} alignItems="center">
          {/* Rating Stars */}
          <HStack spacing={0.5}>
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                viewBox="0 0 24 24" 
                fill="none"
                stroke={theme.colors.yellow}
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                w={3.5} 
                h={3.5}
              >
                {/* SVG polygon coordinates for the star shape */}
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </Icon>
            ))}
          </HStack>

          <Text fontSize="sm" fontWeight={500} color={theme.colors.darkgreen} mt={3}>
            {name}
          </Text>
          
        </VStack>
      </Box>
    </Link>
  );
};

export default ProductCard;