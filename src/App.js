import Footer from "./components/Footer";
import GoogleFormEmbed from "./components/GoogleFormEmbed";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import About from "./Pages/About";
import Mission from "./Pages/Mission";
import Projects from "./Pages/Projects";



function App() {
  return (
    <div className="font-Lato">
      <Navbar/>
      <section id="hero">
      <Hero/>
      </section>

      <section id="about">
      <About/>
      </section>
      
      <section id="projects">
        <Projects/>
      </section>

      <section id="mission">
      <Mission/>
      </section>

      <section id="googleformembed">
      <GoogleFormEmbed/>
      </section>
      
      
      
      <Footer/>
    </div>
  );
}

export default App;
