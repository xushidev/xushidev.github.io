import React, { useEffect, useState } from 'react'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import ItemCard from '../components/ItemCard';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch the index file first
        fetch('/projects/projects-index.json')
            .then(res => res.json())
            .then(async (projectNames) => {
                // Fetch all project JSON files in parallel
                const projectData = await Promise.all(
                    projectNames.map(name =>
                        fetch(`/projects/${name}.json`).then(res => res.json())
                    )
                );
                setProjects(projectData);
            });
    }, []);

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
                {projects.map(project => (
                        <ItemCard key={project._id} item={project} />
                    ))}
            </SimpleGrid>

        </VStack>
    </Container>;
}

export default Projects;