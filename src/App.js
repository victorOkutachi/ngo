import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Mission from "./Pages/Mission";
import Projects from "./Pages/Projects";



function App() {
  return (
    <div className="font-Lato">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Mission/>
      <Footer/>
    </div>
  );
}

export default App;
