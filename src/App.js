import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Mission from "./Pages/Mission";
import Projects from "./Pages/Projects";



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Mission/>
    </div>
  );
}

export default App;
