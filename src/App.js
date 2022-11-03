import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import RouteChangeTracker from "./components/RouteChangeTracker";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <RouteChangeTracker />
    </div>
  );
}

export default App;
