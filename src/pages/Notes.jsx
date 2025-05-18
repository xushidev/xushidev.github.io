import React, { useEffect, useState } from 'react'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import ItemCard from '../components/ItemCard';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Fetch the index file first
        fetch('/notes/note-index.json')
            .then(res => res.json())
            .then(async (noteNames) => {
                // Fetch all project JSON files in parallel
                const noteData = await Promise.all(
                    noteNames.map(name =>
                        fetch(`/blogs/${name}.json`).then(res => res.json())
                    )
                );
                setNotes(noteData);
            });
    }, []);

    return <Container maxW='container.xl' py={12}>
        <VStack spacing={8}>
            <Text
                fontSize={30}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Notes
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
                {notes.map(note => (
                        <ItemCard key={note._id} item={note} />
                    ))}
            </SimpleGrid>

        </VStack>
    </Container>;
};

export default Notes;