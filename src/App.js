import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
      <h1 className="text-5xl">Hello</h1>
    </div>
  );
}

export default App;
