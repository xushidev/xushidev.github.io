import { Button, Container, Flex, HStack, Text, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaUser } from 'react-icons/fa';
import { GrProjects} from 'react-icons/gr';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { MdOutlineContactPage } from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';
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
                bgGradient={"linear(to-r, #b4befe, #99d1db)"}
                bgClip={"text"}
            >
                <Tooltip label='home' hasArrow closeDelay={100}>
                <Link to={"/"}>Home</Link>
                </Tooltip>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/projects"}>
                    <Tooltip label='projects' hasArrow closeDelay={100}>
                    <Button>
                        <GrProjects fontSize={20}/>
                    </Button>
                    </Tooltip>
                </Link>
                <Link to={"/about-me"}>
                    <Tooltip label='about me' hasArrow closeDelay={100}>
                    <Button>
                        <FaUser fontSize={20}/>
                    </Button>
                    </Tooltip>
                </Link>
                <Link to={"/resume"}>
                    <Tooltip label='resume' hasArrow closeDelay={100}>
                    <Button>
                        <HiOutlineNewspaper fontSize={20}/>
                    </Button>
                    </Tooltip>
                </Link>
                <Tooltip label='Switch dark/light mode' hasArrow closeDelay={100}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon/> : <LuSun fontSize={20}/>}
                    </Button>
                </Tooltip>
            </HStack>
        </Flex>
    </Container>;
}

export default Navbar;