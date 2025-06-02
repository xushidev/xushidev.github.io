import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"
import Resume from "./pages/Resume"
import Aboutme from './pages/About-me'


function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/projects" element={ <Projects/> }/>
        <Route path="/about-me" element={ <Aboutme/> }/>
        <Route path="/resume" element={ <Resume/> }/>
        {/*
          Home -> Skills, descriptions (about me) and contacts
          Projects -> all projects
          About Me -> General about me page
          Resume -> Resume
        */} 
      </Routes>
    </Box>
  )
}

export default App