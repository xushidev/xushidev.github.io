import { Box, Heading, HStack, IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkGemoji from 'remark-gemoji';

const ItemCard = ({item}) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const allowedElements = [
        'br', 'details', 'summary', 'a', 'img',
        'p', 'strong', 'em', 'ul', 'ol', 'li', 'code', 'pre', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
    ];
    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
        >
            <Box
                p={4}
                display="flex"
                flexDirection="column"
            >
                <Heading as='h3' size='md' mb={2} mt={2}>
                    {item.name}
                </Heading>
                
                {item.description !== "" && (
                    <Text fontWeight='normal' color={textColor} fontSize='xl' mb={4} flex="1">
                        {item.description}
                    </Text>
                )}

                <HStack spacing={1}>
                    <Link href={item.url} >
                        <IconButton icon={ <FaGithub /> } fontSize={20} colorScheme="blue"/>
                    </Link>
                    <IconButton icon={ <LuEye/> } 
                        onClick={onOpen}
                        fontSize={20} colorScheme="blue"/>
                </HStack>
            </Box>
            {/* On click: 
                    pass ReadMe.md file and parse it through react-markdown
                    https://raw.githubusercontent.com/xushidev/{repoName}/refs/heads/main/README.md
                    repoName = repos.name
            */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>{item.name} content</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody mb={4}>
                        <VStack spacing={4} alignItems={"flex-start"}>
                            {item.readme !== "" ? (
                                <Markdown
                                    children={item.readme}
                                    remarkPlugins={[remarkGfm, remarkGemoji]}
                                    rehypePlugins={[rehypeRaw]}
                                    allowedElements={allowedElements}
                                />
                            ) : (
                                <Text mb={4} color="gray.400">No README file provided.</Text>
                            )}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ItemCard;