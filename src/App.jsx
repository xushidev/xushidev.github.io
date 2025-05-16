import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import Garden from "./pages/Garden"
import Navbar from "./components/Navbar"

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/projects" element={ <Projects/> }/>
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/garden" element={ <Garden/> } />
        {/*
          Home -> Skills, descriptions (about me) and contacts
          Projects -> Live projects and archived projects
          Blog -> Bloggings (Github repository)
          Garden -> School notes and my own notes (Github Repository)
        */} 
      </Routes>
    </Box>
  )
}

export default App