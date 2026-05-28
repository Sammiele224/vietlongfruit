import { useParams } from 'react-router-dom';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

import { products } from '../data/products'; 

import ProductHero from '../components/product/ProductHero';
import Gallery from '../components/product/Gallery';
import Information from '../components/product/Information';
import ProductTabs from '../components/product/ProductTabs';
import RelatedProducts from '../components/product/RelatedProducts';

const ProductDetail = () => {
  // Grabs the ID from the URL (e.g., /product/3 -> id is "3")
  const { id } = useParams();

  // 2. Find the exact product in your data array that matches this ID
  // Note: useParams returns a string, so we convert it to a Number to match your data
  const currentProduct = products.find((item) => item.id === Number(id));

  // 3. Fallback: If someone types a bad URL (like /product/999), show an error
  if (!currentProduct) {
    return (
      <Container centerContent py={20}>
        <Text fontSize="2xl" fontWeight="bold">Product not found!</Text>
      </Container>
    );
  }

  return (
    <Box bg="bgLight" w="full" overflowX="hidden">
       {/* The Static Hero Banner */}
       <ProductHero 
          bgImage={currentProduct.heroBanners} 
          title="Product" 
          productName={currentProduct.name} 
       />
       
       <Container maxW="container.xl" py={{ base: 10, md: 20 }}>
          
          {/* THE SPLIT LAYOUT: Stack on mobile, side-by-side on desktop */}
          <Flex direction={{ base: "column", md: "row" }} gap={{ base: 10, lg: 16 }}>
              
              {/* LEFT SIDE: The Gallery (Takes up roughly 40-50% of the screen) */}
              <Box w={{ base: "100%", md: "40%", lg: "45%" }}>
                  
                  {/* 2. Feed the data from currentProduct into the Gallery! */}
                  <Gallery 
                      mainImage={currentProduct.image} 
                      // Provide an empty array as a fallback just in case a product has no gallery yet
                      galleryImages={currentProduct.gallery || []} 
                  />

              </Box>

              {/* RIGHT SIDE: The Product Info (Title, Price, Add to Cart) */}
              <Box w={{ base: "100%", md: "60%", lg: "55%" }}>
                  <Information product={currentProduct} />
              </Box>

          </Flex>

          <ProductTabs product={currentProduct} />

          <RelatedProducts currentProduct={currentProduct} />

       </Container>
    </Box>
  )
}

export default ProductDetail;