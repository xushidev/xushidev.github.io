import { Box, Button, Container, HStack, Image, Link, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import React from 'react'
const Resume = () => {

    const handleDownload = () => {
        const pdfUrl = '/assets/Xushi_resume.pdf'; 
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'xushi-resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Container 
            maxW="container.md" mt={{ base: 4, md: 16 }} centerContent px={{ base: 0, sm: 4 }}
            maxH="100vh"
        >
            <VStack spacing={{ base: 4, md: 6 }}>
                <Box
                    id='resume'
                    px={{ base: 2, sm: 6, md: 12 }}
                    py={{ base: 6, md: 10 }}
                    rounded="2xl"
                    shadow="xl"
                    transition='all 0.3s'
                    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                >
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                        mb={4}
                        bgGradient='linear(to-r, teal.200, blue.300, purple.200)'
                        bgClip={"text"}
                        letterSpacing="tight"
                    >
                        Resume
                    </Text>
                    <VStack align={"start"} spacing={4}>
                        <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "2xl" }}>
                            Education
                        </Text>
                        <Box pl={4}>
                            <Text>High School Student</Text>
                            <Text fontSize="sm" color="gray.500">Expected Graduation: [June, 2026]</Text>
                            <Text><strong>Relevant Courses</strong>: System administration, Computer science, Information Technology and Systems Design, Telecomunication</Text>
                        </Box>
                        <Text fontWeight="bold" fontSize={{ base: "lg", md: "2xl" }}>
                            Certifications
                        </Text>
                        <Box pl={4}>
                            <UnorderedList spacing={3}>
                                <ListItem>Introduction to Cybersecurity - Cisco Networking Academy</ListItem>
                                <ListItem>Get Connected - Cisco Network Academy</ListItem>
                                <ListItem>Introduction to IoT - Cisco Network Academy</ListItem>
                            </UnorderedList>
                        </Box>
                        <Button 
                            _hover={{ bg: "cyan.700" }}
                            wordBreak="break-word"
                            whiteSpace="normal"
                            size={{base: "md", sm: "sm"}}
                            onClick={handleDownload}
                        >
                            <Text whiteSpace="normal" wordBreak="break-word">
                                Download my full resume (PDF)
                            </Text>
                        </Button>
                    </VStack>
                </Box>
            </VStack>
            <Box
                mt="20vh"
                pb="5"
                bg={"blackAlpha.300"}
                w={"100vw"}
            >
                <VStack py={8} px={8}>
                    <HStack flexWrap="wrap" justify="center">
                        <Text fontSize="sm" color={"gray.600"}>
                            © 2025 Xushi.
                        </Text>
                        <Link href="mailto:xushi.official@gmail.com" target='_blank'>
                            <Text fontSize={"sm"} color={"gray.600"}>
                                Email: xushi.official@gmail.com
                            </Text>
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Container>
    );
}

export default Resume
