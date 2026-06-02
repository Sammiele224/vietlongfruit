import { 
    Box, 
    Container, 
    Flex, 
    Heading, 
    Text, 
    Image 
} from '@chakra-ui/react';

import trophyImg from '../../assets/images/award.png'; 
import bgSketchImg from '../../assets/images/project-bg.png'; 

const CertificateIntro = () => {
    return (
        <Box 
            w="full" 
            bg="white" 
            py={{ base: 12, md: 24 }} 
            position="relative"
            overflow="hidden"
        >
            
            {/* THE SKETCH BACKGROUND */}
            <Image 
                src={bgSketchImg} 
                alt="Farm Sketch" 
                position="absolute"
                left={0}
                top="50%" // Centers it vertically
                transform="translateY(-50%)"
                w={{ base: "100%", md: "70%" }} // Spans most of the width but fades out
                opacity={1} // Keeps it faint and subtle
                pointerEvents="none" // Ensures users can't accidentally click or drag the background
                userSelect="none"
                zIndex={0}
            />

            <Container maxW="container.xl" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
                
                <Flex 
                    direction={{ base: "column", md: "row" }} 
                    gap={{ base: 12, md: 16 }}
                    align="center"
                    justify="center"
                >
                    
                    {/* LEFT SIDE: The Trophy */}
                    <Box 
                        w={{ base: "80%", sm: "60%", md: "40%" }} 
                        display="flex"
                        justifyContent={{ base: "center", md: "flex-end" }} 
                    >
                        <Image 
                            src={trophyImg} 
                            alt="Golden Trophy" 
                            w="full" 
                            maxW={{ md: "400px" }} 
                            h="auto" 
                            objectFit="contain"
                            filter="drop-shadow(0px 20px 20px rgba(0,0,0,0.15))" 
                        />
                    </Box>

                    {/* RIGHT SIDE: The Text Content */}
                    <Box w={{ base: "100%", md: "55%" }}>
                        <Heading 
                            color="darkgreen" 
                            fontSize={{ base: "2xl", md: "3xl" }} 
                            fontWeight={600} 
                            lineHeight="1.2"
                            mb={6}
                        >
                            We have obtained the necessary documents as required by the importer.
                        </Heading>
                        
                        <Text color="gray.500" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8">
                            Our commitment to quality extends beyond the harvest. We strictly adhere to international trade regulations, 
                            ensuring all phytosanitary certificates, origin documents, and safety compliance records are meticulously prepared. 
                            This dedication to transparency guarantees a smooth, delay-free import process for our partners worldwide, reflecting 
                            our award-winning operational excellence.
                        </Text>
                    </Box>

                </Flex>
            </Container>
        </Box>
    );
};

export default CertificateIntro;