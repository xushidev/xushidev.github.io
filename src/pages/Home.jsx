import { Container, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'

const Home = () => {
    return (
        <Container maxW="container.md" mt={{ base: 4, md: 16 }} centerContent px={{ base: 0, sm: 4 }}>
            <VStack spacing={{ base: 4, md: 6 }}>
                <HStack
                    align="start"
                    w="100%"
                    ml={{ base: 0, md: "10vh" }}
                    mr={{ base: 0, md: 4 }}
                    mt={{ base: 4, md: "20vh", sm: "20vh", xl: "20vh"}}
                    flexDirection={{ base: "column", md: "row" }}
                    spacing={{ base: 4, md: 0 }}
                >
                    <Image
                        borderRadius="full"
                        boxSize={{ base: "120px", sm: "3xs", md: "3xs" }}
                        src="/assets/circle-avatar.png"
                        alt="Xushi's avatar"
                        shadow="md"
                        mx={{ base: "auto", md: 0 }}
                    />
                    <VStack 
                        align={{base: "center", md: "start", sm: "center"}} 
                        spacing={1} 
                        ml={{base: 0, md: "5vh"}}
                        mt={{ base: 2, md: 0 }} 
                        w="100%"
                    >
                        <Text
                            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                            fontWeight="bold"
                        >
                            Xushi
                        </Text>
                        <Text 
                            fontSize="md" color="gray.400"
                        >
                            Developer
                        </Text>
                        <Text
                            fontSize="md" color="gray.500"
                        >
                            Student
                        </Text>
                        <Text
                            fontSize="md" color="gray.600"
                        >
                            Creator
                        </Text>
                    </VStack>
                </HStack>
            </VStack>
        </Container>
    );
}

export default Home