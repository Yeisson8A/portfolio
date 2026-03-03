import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import { Box } from "@mui/material";
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <SkillsSection />
      <ContactSection />
    </Box>
  )
}

export default App
