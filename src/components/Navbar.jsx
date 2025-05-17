import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaRss } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { TbNote } from 'react-icons/tb';
import { Link } from 'react-router';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justify={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
                fontSize={{ base: "22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
            >
                <Link to={"/"}>Xushi</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/projects"}>
                    <Button>
                        <GrProjects fontSize={20}/>
                    </Button>
                </Link>
                <Link to={"/blog"}>
                    <Button>
                        <FaRss fontSize={20}/>
                    </Button>
                </Link>
                {/* Button for dark mode */}
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon/> : <LuSun fontSize={20}/>}
                </Button>
            </HStack>
        </Flex>
    </Container>;
}

export default Navbar;