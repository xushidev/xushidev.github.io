import { Container, Text, VStack } from '@chakra-ui/react';
import React from 'react'

const Home = () => {

    return (
    <Container maxW='container.xl' py={12}>
        <VStack spacing={8}>
            <Text
                fontSize={30}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Home
            </Text>
            
        </VStack>
    </Container>
    );
}

export default Home