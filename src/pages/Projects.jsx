import React from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { base } from 'framer-motion/client';

const Projects = () => {
    // Add fetch projects here


    return <Container maxW='container.xl' py={12}>
        <VStack spacing={8}>
            <Text
                fontSize={30}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Projects
            </Text>

            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    lg: 3
                }}
                spacing={10}
                w={'full'}
            >
                    {/*
                    Add mapping for each repository
                    gotten from 'https://api.github.com/users/xushidev/repos'
                    */}
            </SimpleGrid>

        </VStack>
    </Container>;
}

export default Projects