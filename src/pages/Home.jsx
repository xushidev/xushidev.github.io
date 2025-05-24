import { Box, Button, Container, HStack, Image, Link, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {

    const handleDownload = () => {
        const pdfUrl = '/assets/test-file.txt'; // Replace with the actual PDF URL
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'TEST-file.txt'; // Optional: Specify a custom file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Container maxW="container.md" mt={{ base: 4, md: 16 }} centerContent px={{ base: 0, sm: 4 }}>
            <VStack spacing={{ base: 4, md: 6 }}>
                <HStack
                    align="start"
                    w="100%"
                    ml={{ base: 0, md: "10vh" }}
                    mr={{ base: 0, md: 4 }}
                    mt={{ base: 4, md: "20vh" }}
                    flexDirection={{ base: "column", md: "row" }}
                    spacing={{ base: 4, md: 0 }}
                >
                    <Image
                        borderRadius="full"
                        boxSize={{ base: "80px", sm: "100px", md: "3xs" }}
                        src="/assets/circle-avatar.png"
                        alt="Xushi's avatar"
                        shadow="md"
                        mx={{ base: "auto", md: 0 }}
                    />
                    <VStack 
                        align={{base: "center", md: "start", sm: "center"}} 
                        spacing={1} ml={{ base: 0, md: 2 }} 
                        mt={{ base: 2, md: 0 }} 
                        w="100%"
                    >
                        <Text
                            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                            fontWeight="bold"
                        >
                            Xushi
                        </Text>
                        <Text fontSize="md" color="gray.400">
                            Developer
                            •
                            Student
                            •
                            Creator
                        </Text>
                        <HStack spacing={2} mt={1} color={"gray.600"} flexWrap="wrap">
                            <ScrollLink to='about' smooth={true} duration={500} offset={-10}>
                                <Text cursor="pointer" _hover={{ textDecoration: "underline"}}>
                                    About me
                                </Text>
                            </ScrollLink>
                            <Text display={"inline"}>•</Text>
                            <ScrollLink to='skills' smooth={true} duration={500} offset={-10}>
                                <Text cursor="pointer" _hover={{ textDecoration: "underline"}}>
                                    Skills
                                </Text>
                            </ScrollLink>
                            <Text display={"inline"}>•</Text>
                            <ScrollLink to='resume' smooth={true} duration={500} offset={-100}>
                                <Text cursor="pointer" _hover={{ textDecoration: "underline"}}>
                                    Resume
                                </Text>
                            </ScrollLink>
                        </HStack>
                    </VStack>
                </HStack>
                <Box
                    id='about'
                    px={{ base: 2, sm: 6, md: 12 }}
                    mt={{ base: 4, md: "70vh"}}
                    rounded="2xl"
                    shadow="xl"
                    transition='all 0.3s'
                    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                >
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                        mb={4}
                        bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                        bgClip={"text"}
                        letterSpacing="tight"
                    >
                        About me 
                    </Text>
                    <VStack 
                        align="start" 
                        spacing={4}
                    >
                        <Text>
                            Hi there! I am a solo developer and a highschool <br/>
                            student passionate about various things,
                            mainly computer science and programming, 
                            with an interest in writing, art, eastern culture and video games.
                        </Text>
                        <Text>
                            I also have self taught myself many things about how to actually write code, 
                            alike the website you are reading this right now, or a few of my other projects.
                        </Text>
                        <Text>
                            I have taken an interest in this subject since a long time ago, 
                            with my first ever interaction with actual coding on my third year of highschool, 
                            where i was taught C#, 
                            while before that i have never actually seen a single line of code, 
                            but since then, i felt like i have found a new world for myself, 
                            one for me to improve and one i am appasionate about. 
                        </Text>
                        <Text>
                            I am currently focusing on finishing highschool to go to university, where i can improve even more, 
                            but i am also focusing on becoming a proper full stack developer, learning frameworks like NodeJs, 
                            Flutter and ReactJs.
                        </Text>
                        <Text>
                            My goal is to create and build apps and tools to improve people's life and to contribuite in the 
                            programming community.
                        </Text>
                        <Text>
                            Thanks for reading until here, feel free to check out this website to find my posts, notes and projects, 
                            also feel free to contact me at any time!
                        </Text>
                    </VStack>
                </Box>
                <Box
                    mt={{ base: 8, md: "15vh" }}
                    id='skills'
                    w="100%"
                    px={{ base: 2, sm: 6, md: 12 }}
                    py={{ base: 4, md: 10 }}
                    rounded="2xl"
                    shadow="xl"
                    transition='all 0.3s'
                    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                >
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                        mb={4}
                        bgGradient='linear(to-r, pink.100, yellow.300, gray.200)'
                        bgClip={"text"}
                        letterSpacing="tight"
                    >
                        Skills
                    </Text>
                    <VStack align={"start"} spacing={4}>
                        <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "2xl" }}>
                            Tech stack:
                        </Text>
                        <Box pl={4}>
                            <Text><strong>Languages:</strong> JavaScript, Python, C#, Dart</Text>
                            <Text><strong>Frontend:</strong> Chakra, HTML, CSS, Flutter</Text>
                            <Text><strong>Backend:</strong> Node.js</Text>
                            <Text><strong>Database:</strong> SQL (learning) </Text>
                            <Text><strong>Tools & Others:</strong> Git, GitHub, VS Code</Text>
                        </Box>
                        <Text fontWeight={"bold"} fontSize={{ base: "lg", md: "2xl" }}>
                            Languages:
                        </Text>
                        <Box pl={4}>
                            <UnorderedList spacing={3}>
                                <ListItem>English - Fluent</ListItem>
                                <ListItem>Italian - Fluent</ListItem>
                                <ListItem>Chinese - Basic (spoken only)</ListItem>
                            </UnorderedList>
                        </Box>
                        <Text fontWeight="bold" fontSize={{ base: "lg", md: "2xl" }} mt={6}>Soft Skills:</Text>
                        <Box pl={4}>
                            <UnorderedList spacing={3}>
                                <ListItem>Problem Solving</ListItem>
                                <ListItem>Adaptativity</ListItem>
                                <ListItem>Creativity</ListItem>
                            </UnorderedList>
                        </Box>
                        <Text fontWeight="bold" fontSize={{ base: "lg", md: "2xl" }} mt={6}>Other Interests:</Text>
                        <Box pl={4}>
                            <UnorderedList spacing={3}>
                                <ListItem>Drawing sketches</ListItem>
                                <ListItem>Exploring video games</ListItem>
                            </UnorderedList>
                        </Box>
                    </VStack>
                </Box>
                <Box
                    mt={{ base: 8, md: "15vh" }}
                    id='resume'
                    px={{ base: 2, sm: 6, md: 12 }}
                    py={{ base: 4, md: 10 }}
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
                        >
                            <Text whiteSpace="normal" wordBreak="break-word">
                                Download my full resume (PDF) (NOT AVAILABLE YET)
                            </Text>
                        </Button>
                    </VStack>
                </Box>
            </VStack>
            <Box
                roundedTop={50}
                mt={{ base: 8, md: "15vh" }}
                h={{ base: "auto", md: "10vh" }}
                bg={"blackAlpha.300"}
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

export default Home