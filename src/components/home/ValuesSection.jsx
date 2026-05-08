import { useState } from 'react';
import { Box, Container, Flex, Heading, Text, IconButton, useTheme } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'; // ADDED IMPORTS
import projectBg from '../../assets/images/project-bg.png';
import leafIcon from '../../assets/icons/Icon-17.svg';

const timelineData = [
  { year: "2021", title: "Established",     active: false },
  { year: "2022", title: "Economic growth", active: false },
  { year: "2023", title: "Economic growth", active: false },
  { year: "2024", title: "Economic growth", active: true  },
];

const LINE_TOP    = "61px";

const ValuesSection = () => {
  const theme = useTheme();
  const DOT_BG = theme.colors.dotInactive;
  const DOT_ACTIVE = theme.colors.dotActive;
  
  const [mobileIndex, setMobileIndex] = useState(timelineData.length - 1);

  // Helper functions for the arrow buttons
  const handlePrev = () => setMobileIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setMobileIndex((prev) => Math.min(timelineData.length - 1, prev + 1));

  return (
    <Box position="relative" bg="white" py={{ base: 12, md: 24 }} overflow="hidden">

      <Box
        as="img"
        src={projectBg}
        alt=""
        aria-hidden="true"
        position="absolute"
        bottom={0}
        right={0}
        w={{ base: "75%", md: "42%" }}
        maxW="600px"
        opacity={1}         
        pointerEvents="none"
        userSelect="none"
        display="block"
      />

      <Container maxW="container.xl" px={{ base: 5, md: 10 }} position="relative" zIndex={1}>

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          mb={{ base: 14, md: 20 }}
          gap={8}
        >
          <Box w={{ base: "full", md: "35%" }}>
            <Flex align="center" gap="6px" mb="6px">
              <Text
                fontSize="13px"
                fontWeight={700}
                color={theme.colors.yellow}
                textTransform="uppercase"
                lineHeight={1}
              >
                Our Process
              </Text>
              <Box
                as="img"
                src={leafIcon}
                h="20px"
                w="auto"
                display="inline-block"
              />
            </Flex>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              color={theme.colors.darkgreen}
              fontWeight={700}
              lineHeight={1.1}
            >
              Our Values
            </Heading>
          </Box>

          <Box w={{ base: "full", md: "55%" }}>
            <Text color="gray.500" fontSize="md" lineHeight="tall" fontWeight={400}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit.
            </Text>
          </Box>
        </Flex>

        {/* --- DESKTOP TIMELINE --- */}
        <Box display={{ base: "none", md: "block" }} position="relative" overflow="visible">
          <Box
            position="absolute"
            top={LINE_TOP}
            left="12.5%"
            right="-24px"           
            h="2px"
            bg={DOT_BG}
            zIndex={1}
            transform="translateY(-50%)"
          >
            <Box
              position="absolute"
              right="-1px"
              top="50%"
              transform="translateY(-50%)"
              w={0}
              h={0}
              borderStyle="solid"
              borderTopWidth="5px"
              borderBottomWidth="5px"
              borderLeftWidth="9px"
              borderTopColor="transparent"
              borderBottomColor="transparent"
              borderLeftColor={DOT_BG}
            />
          </Box>

          <Flex>
            {timelineData.map((item, index) => (
              <Flex
                key={index}
                direction="column"
                align="center"
                flex={1}
                position="relative"
                zIndex={2}
                cursor="default"
                role="group"
              >
                <Text
                  fontSize="4xl"
                  fontWeight={700}
                  color={item.active ? DOT_ACTIVE : DOT_BG}
                  lineHeight={1.2}
                  mb="10px"
                >
                  {item.year}
                </Text>

                {item.active ? (
                  <Box
                    w="14px"
                    h="14px"
                    borderRadius="full"
                    bg="white"
                    border={`2px solid ${DOT_ACTIVE}`}
                    mb="14px"
                    flexShrink={0}
                  />
                ) : (
                  <Box
                    w="10px"
                    h="10px"
                    borderRadius="full"
                    bg={DOT_BG}
                    border="2.5px solid white"
                    boxShadow={`0 0 0 2px ${DOT_BG}`} 
                    mb="16px"
                    flexShrink={0}
                  />
                )}

                <Text
                  color={item.active ? DOT_ACTIVE : "gray.500"}
                  fontWeight={item.active ? 600 : 400}
                  fontSize="sm"
                  textAlign="center"
                  whiteSpace="nowrap"
                >
                  {item.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        {/* --- MOBILE CAROUSEL --- */}
        <Box display={{ base: "block", md: "none" }}>
          <Flex direction="column" align="center" minH="160px">

            {/* NEW: Flex container for Left Arrow, Year Text, and Right Arrow */}
            <Flex align="center" justify="center" w="full" mb={5}>
              <IconButton
                icon={<ChevronLeftIcon boxSize={10} />}
                variant="unstyled"
                aria-label="Previous Year"
                opacity={0.2} // Makes it faint/light
                _hover={{ opacity: 0.5 }}
                onClick={handlePrev}
                isDisabled={mobileIndex === 0}
                visibility={mobileIndex === 0 ? "hidden" : "visible"} // Keeps layout from shifting when hidden
              />

              <Text
                fontSize="6xl" // Scaled down slightly to fit arrows comfortably
                fontWeight={700}
                color={timelineData[mobileIndex].active ? DOT_ACTIVE : DOT_BG}
                lineHeight={1}
                mx={2}
                minW="120px" // Prevents arrows from jumping when number changes
                textAlign="center"
              >
                {timelineData[mobileIndex].year}
              </Text>

              <IconButton
                icon={<ChevronRightIcon boxSize={10} />}
                variant="unstyled"
                aria-label="Next Year"
                opacity={0.2} 
                _hover={{ opacity: 0.5 }}
                onClick={handleNext}
                isDisabled={mobileIndex === timelineData.length - 1}
                visibility={mobileIndex === timelineData.length - 1 ? "hidden" : "visible"}
              />
            </Flex>

            {/* NEW: Relative container to hold the horizontal line and the dot */}
            <Box position="relative" w="80%" display="flex" justifyContent="center" mb={6}>
              {/* The Line & Arrow */}
              <Box
                position="absolute"
                top="50%"
                left="0"
                right="0"
                h="5px"
                bg={DOT_BG}
                zIndex={1}
                transform="translateY(-50%)"
              >
                {/* Arrowhead */}
                <Box
                  position="absolute"
                  right="-2px"
                  top="50%"
                  transform="translateY(-50%)"
                  w={0}
                  h={0}
                  borderStyle="solid"
                  borderTopWidth="9px"
                  borderBottomWidth="9px"
                  borderLeftWidth="10px"
                  borderTopColor="transparent"
                  borderBottomColor="transparent"
                  borderLeftColor={DOT_BG}
                />
              </Box>

              {/* The Dot (layered on top with zIndex) */}
              <Box position="relative" zIndex={2} bg="white" borderRadius="full">
                {timelineData[mobileIndex].active ? (
                  <Box
                    w="16px"
                    h="16px"
                    borderRadius="full"
                    bg="white"
                    border={`2px solid ${DOT_ACTIVE}`}
                  />
                ) : (
                  <Box
                    w="12px"
                    h="12px"
                    borderRadius="full"
                    bg={DOT_BG}
                    border="2px solid white"
                    boxShadow={`0 0 0 2px ${DOT_BG}`}
                  />
                )}
              </Box>
            </Box>

            {/* Label */}
            <Text
              color={timelineData[mobileIndex].active ? DOT_ACTIVE : "gray.500"}
              fontWeight={500}
              fontSize="lg"
              mb={8}
            >
              {timelineData[mobileIndex].title}
            </Text>

            {/* Pagination dots */}
            <Flex gap="8px" align="center">
              {timelineData.map((_, i) => (
                <Box
                  key={i}
                  as="button"
                  aria-label={`Go to ${timelineData[i].year}`}
                  onClick={() => setMobileIndex(i)}
                  w={mobileIndex === i ? "10px" : "8px"}
                  h={mobileIndex === i ? "10px" : "8px"}
                  borderRadius="full"
                  bg={mobileIndex === i ? DOT_ACTIVE : "gray.300"}
                  border="none"
                  cursor="pointer"
                  transition="all 0.2s ease"
                  p={0}
                  _focus={{ outline: "none" }}
                />
              ))}
            </Flex>
          </Flex>
        </Box>

      </Container>
    </Box>
  );
};

export default ValuesSection;