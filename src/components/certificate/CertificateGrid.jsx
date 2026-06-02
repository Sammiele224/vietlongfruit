import { useState } from 'react';
import { 
    Box, 
    Container, 
    SimpleGrid, 
    VStack, 
    Text, 
    Image, 
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    HStack,
} from '@chakra-ui/react';

import topBgImg from '../../assets/images/BG-03.jpg'; 
import worldMapImg from '../../assets/images/footer-map.png'; 

const CertificateGrid = () => {
    // 1. DATA: Replaced all image sources with `null` to force the white placeholder frames
    const certificates = [
        { id: 1, title: "Certificate of Origin", src: null },
        { id: 2, title: "Certificate of Phytosanitary", src: null },
        { id: 3, title: "Health Certificate", src: null },
        { id: 4, title: "Certificate of Free Sales", src: null }, 
        { id: 5, title: "Business Registration License", src: null },
        { id: 6, title: "Product Testing Registration", src: null },
        { id: 7, title: "Organic Certification", src: null },
        { id: 8, title: "Global GAP Certificate", src: null },
        { id: 9, title: "Export License", src: null },
    ];

    // 2. PAGINATION LOGIC
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(certificates.length / itemsPerPage);

    // Get the exactly 6 items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCerts = certificates.slice(indexOfFirstItem, indexOfLastItem);

    // 3. LIGHTBOX LOGIC (Modal)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCert, setSelectedCert] = useState(null);

    const handleOpenCert = (cert) => {
        setSelectedCert(cert);
        onOpen();
    };

    return (
        <Box w="full" position="relative" overflow="hidden">
            
            {/* --- TOP SECTION: MANGOSTEEN IMAGE --- */}
            <Box 
                w="full" 
                h={{ base: "300px", md: "500px" }} 
                backgroundImage={`url(${topBgImg})`}
                backgroundSize="cover"
                backgroundPosition="center"
            />

            {/* --- BOTTOM SECTION: THE OVERLAPPING GREEN CONTAINER --- */}
            <Flex justify="center" w="full" bg="bgLight">
                <Box 
                    bg="bgLight" 
                    w="full"
                    maxW="1000px" 
                    mt={{ base: "-100px", md: "-150px" }} 
                    pt={{ base: 12, md: 12 }} 
                    pb={{ base: 20, md: 24 }}
                    borderTopRadius={{ base: "3xl", md: "2xl" }} 
                    position="relative" 
                    zIndex={2}
                >
                    <Image 
                        src={worldMapImg} 
                        position="absolute"
                        bottom={0}
                        left="50%"
                        transform="translateX(-50%)"
                        w="full"
                        maxW="800px" 
                        opacity={1}
                        pointerEvents="none"
                        zIndex={0}
                    />

                    <Container maxW="full" px={{ base: 6, md: 12 }} position="relative" zIndex={1}>
                        
                        {/* THE 6-ITEM GRID */}
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 8, md: 10, lg: 12 }} mb={12}>
                            {currentCerts.map((cert) => (
                                <VStack 
                                    key={cert.id} 
                                    spacing={4} 
                                    cursor="pointer"
                                    onClick={() => handleOpenCert(cert)}
                                    transition="all 0.3s"
                                    _hover={{ transform: "translateY(-5px)" }} 
                                >
                                    {/* THE A4 FRAME */}
                                    <Box 
                                        w="full" 
                                        aspectRatio={1 / 1.414} 
                                        bg="white" 
                                        borderRadius="xl" 
                                        boxShadow="xl"
                                        p={3}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        overflow="hidden"
                                    >
                                        {/* If an image exists, it shows the image. 
                                            If null, it just stays as a clean white board. 
                                        */}
                                        {cert.src && (
                                            <Image src={cert.src} w="full" h="full" objectFit="contain" />
                                        )}
                                    </Box>

                                    {/* TITLE */}
                                    <Text color="darkgreen" fontWeight={700} fontSize={{ base: "sm", md: "md" }} textAlign="center">
                                        {cert.title}
                                    </Text>
                                </VStack>
                            ))}
                        </SimpleGrid>

                        {/* 2. PAGINATION REDESIGN: DOT INDICATORS */}
                        {totalPages > 1 && (
                            <Flex justify="center">
                                <HStack spacing={3}>
                                    {[...Array(totalPages)].map((_, index) => {
                                        const pageNum = index + 1;
                                        const isActive = currentPage === pageNum;

                                        return (
                                            <Box
                                                key={pageNum}
                                                onClick={() => setCurrentPage(pageNum)}
                                                w="10px"
                                                h="10px"
                                                borderRadius="full"
                                                cursor="pointer"
                                                transition="all 0.3s"
                                                bg={isActive ? "darkgreen" : "gray.300"}
                                                transform={isActive ? "scale(1.3)" : "scale(1)"}
                                            />
                                        );
                                    })}
                                </HStack>
                            </Flex>
                        )}

                    </Container>
                </Box>
            </Flex>

            {/* --- THE LIGHTBOX MODAL --- */}
            <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xl", md: "2xl", lg: "4xl" }} isCentered>
                <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />
                <ModalContent bg="transparent" boxShadow="none" my={4}>
                    <ModalCloseButton color="white" size="lg" top={{ base: "10px", md: "-40px" }} right={{ base: "10px", md: "0" }} />
                    <Flex justify="center" align="center" w="full" p={4}>
                        {selectedCert && (
                            <Box 
                                w={{ base: "100%", md: "80%", lg: "60%" }} 
                                aspectRatio={1 / 1.414} 
                                bg="white"
                                p={4}
                                borderRadius="xl"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {selectedCert.src ? (
                                    <Image src={selectedCert.src} w="full" h="full" objectFit="contain" />
                                ) : (
                                    <Text color="gray.400" fontSize="2xl" fontWeight={700} textAlign="center">
                                        [ {selectedCert.title} ]<br/>A4 Blank Frame
                                    </Text>
                                )}
                            </Box>
                        )}
                    </Flex>
                </ModalContent>
            </Modal>

        </Box>
    );
};

export default CertificateGrid;