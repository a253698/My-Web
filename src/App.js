import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ProjectBlog from "./components/ProjectBlog";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <ProjectBlog />
      <Contact />
    </div>
  );
}

export default App;
