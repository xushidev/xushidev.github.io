import React, { useEffect, useState } from 'react'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import ItemCard from '../components/ItemCard';



const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch the index file first
        fetch('/blogs/blog-index.json')
            .then(res => res.json())
            .then(async (blogNames) => {
                // Fetch all project JSON files in parallel
                const blogData = await Promise.all(
                    blogNames.map(name =>
                        fetch(`/blogs/${name}.json`).then(res => res.json())
                    )
                );
                setBlogs(blogData);
            });
    }, []);

    return <Container maxW='container.xl' py={12}>
        <VStack spacing={8}>
            <Text
                fontSize={30}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Blogs
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
                {blogs.map(blog => (
                        <ItemCard key={blog._id} item={blog} />
                    ))}
            </SimpleGrid>
        </VStack>
    </Container>;
}

export default Blog