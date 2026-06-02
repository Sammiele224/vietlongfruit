import { Box, Flex, Heading, Text, VStack} from '@chakra-ui/react';
import bgImage from '../../assets/images/BG-07.jpg'; 
import leafIcon from '../../assets/icons/Icon-17b.svg';          
import yellowShape from '../../assets/icons/Icon-43.png';   

import icon1 from '../../assets/icons/Icon-19.svg';
import icon2 from '../../assets/icons/Icon-31.svg';
import icon3 from '../../assets/icons/Icon-21.svg';
import icon4 from '../../assets/icons/Icon-18.svg';
import icon5 from '../../assets/icons/Icon-36.svg';
import icon6 from '../../assets/icons/Icon-44.png';

const processData = [
  { id: 1, title: "Hygienic Washing & Sorting", desc: "Freshly harvested produce is thoroughly washed and sorted, ensuring only the highest quality items progress.", icon: icon1, top: "32%", left: "24%", customTextPos: true, textTop: "-105px", textLeft: "-100px"},
  { id: 2, title: "Sustainable Cultivation", desc: "Using responsible farming methods to nurture healthy, nutritious crops with minimal environmental footprint.", icon: icon2, top: "24%", left: "39%", customTextPos: true, textTop: "-120px", textLeft: "30px"},
  { id: 3, title: "Direct Farm Logistics", desc: "Coordinating the efficient movement of products across the distribution channels.", icon: icon3, top: "34%", left: "55%" },
  { id: 4, title: "Secure Packaging & Fulfillment", desc: "Products are carefully packaged using eco-friendly materials and orders are prepared with attention to detail.", icon: icon4, top: "55%", left: "60%" },
  { id: 5, title: "Final Delivery", desc: "Completing the delivery cycle by ensuring the final product safely reaches the end consumer.", icon: icon5, top: "78%", left: "54%" },
];

const FarmtoClient = () => {
  return (
    <Box 
      position="relative" 
      w="full" 
      minH={{ base: "auto", lg: "830px" }} 
      py={{ base: 10, lg: 0 }} 
      bgImage={`url('${bgImage}')`} 
      bgSize="cover" 
      bgPosition="center"
      overflow="hidden"
    >
      <Flex 
        position={{ base: "relative", lg: "absolute" }} 
        top={{ base: "auto", lg: 0 }}
        left={{ base: "auto", lg: "50%" }}
        transform={{ base: "none", lg: "translateX(-50%)" }}
        w={{ base: "100%", lg: "1200px" }} 
        h={{ base: "auto", lg: "800px" }} 
        mx="auto"
        direction="column" 
        px={{ base: 6, lg: 0 }} 
      >

        {/* 1. "FROM FARM TO CLIENT" HEADING SECTION */}
        <Box 
          position={{ base: "relative", lg: "absolute" }} 
          top={{ base: "auto", lg: "59%" }} 
          left={{ base: "auto", lg: "19%" }} 
          mb={{ base: 12, lg: 0 }} 
          alignSelf={{ base: "center", lg: "unset" }} 
          zIndex={3}
        >
            <VStack align={{ base: "center", lg: "flex-end" }} spacing={0}>
                <Flex align="center" gap={2} mb={2}>
                    <Box 
                      as="img" 
                      src={leafIcon} 
                      w="30px" 
                      transform={{ base: "none", lg: "translate(20px, -30px)" }}
                    />
                    <Heading color="white" fontSize={{ base: "3xl", lg: "4xl" }}>From Farm</Heading>
                </Flex>
                <Heading color="white" fontSize={{ base: "3xl", lg: "4xl" }}>to Client</Heading>
            </VStack>
        </Box>

        {/* 2. MAP THROUGH AND POSITION THE 5 PROCESS STEPS */}
        {processData.map((item) => {
          
          const IconCircle = (
            <Flex
              w={{ base: "70px", lg: "80px" }}
              h={{ base: "70px", lg: "80px" }}
              bgImage={`url('${icon6}')`}
              bgSize="contain"
              bgRepeat="no-repeat"
              bgPosition="center"
              justify="center" 
              align="center"
              flexShrink={0} 
            >
              <Box as="img" src={item.icon} w="45%" h="45%" objectFit="contain" />
            </Flex>
          );

          const TextContent = (
            <VStack align="flex-start" spacing={1} w={{ base: "100%", lg: "270px" }}>
                <Text color="white" fontWeight="bold">{item.title}</Text>
                <Text color="white" fontSize={{ base: "sm", lg: "sm" }} opacity={0.8}>{item.desc}</Text>
            </VStack>
          );

          return (
            <Box 
              key={item.id}
              position={{ base: "relative", lg: "absolute" }} 
              top={{ base: "auto", lg: item.top }} 
              left={{ base: "auto", lg: item.left }}
              mb={{ base: 8, lg: 0 }} 
              zIndex={2}
            >
              {/* MOBILE LAYOUT: Stacked vertically for smaller screens */}
              <VStack display={{ base: "flex", lg: "none" }} align="flex-start" spacing={3}>
                {IconCircle}
                {TextContent}
              </VStack>

              {/* DESKTOP LAYOUT: Absolute positioning based on data coordinates */}
              <Box display={{ base: "none", lg: "block" }}>
                {item.customTextPos ? (
                  <Box position="relative">
                    {IconCircle}
                    <Box position="absolute" top={item.textTop} left={item.textLeft}>
                      {TextContent}
                    </Box>
                  </Box>
                ) : (
                  <Flex align="flex-start" gap={4}>
                    {IconCircle}
                    {TextContent}
                  </Flex>
                )}
              </Box>
            </Box>
          );
        })}

        {/* 3. LARGE YELLOW BACKGROUND SHAPE */}
        <Box 
          as="img" 
          src={yellowShape} 
          position={{ base: "relative", lg: "absolute" }}
          top={{ base: "auto", lg: "35%" }} 
          left={{ base: "auto", lg: "30%" }} 
          w={{ base: "220px", lg: "350px" }} 
          mx={{ base: "auto", lg: "unset" }} 
          mt={{ base: 10, lg: 0 }} 
          zIndex={1}
        />

      </Flex>
    </Box>
  );
};

export default FarmtoClient;