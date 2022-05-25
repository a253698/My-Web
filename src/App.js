import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import ProjectBlog from "./components/ProjectBlog";
import Loader from "./components/Loader";
import PDFReader from "./components/PDFReader";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Routes,
  Route,
} from "react-router-dom";

import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";

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
      {/* 
    
       <Routes>
        <Route path="/pdfreader" component={<PDFReader />} />
      </Routes>
      
      */}
    </div>
  );
}

export default App;

/*  

     

*/
