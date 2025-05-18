import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import Navbar from "./components/Navbar"
import Notes from "./pages/Notes"

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/projects" element={ <Projects/> }/>
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/notes" element={ <Notes/> }/>
        {/*
          Home -> Skills, descriptions (about me) and contacts
          Projects -> Live projects and archived projects
          Blog -> Bloggings (Github repository)
          Notes -> School notes and my own notes (Github Repository)
        */} 
      </Routes>
    </Box>
  )
}

export default App