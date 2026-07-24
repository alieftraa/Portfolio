import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Education /> */}
        <Achievements />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;