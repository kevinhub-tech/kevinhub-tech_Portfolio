import "./App.css";
import "./util.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Herobanner from "./components/Herobanner/Herobanner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import WE from "./components/Work_Experience/WE";
import EC from "./components/Extra_curriculum/EC";
import Contactme from "./components/Contact_me/Contactme";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Herobanner />
      <About />
      <Skills />
      <Projects />
      <WE />
      <EC />
      <Contactme />
      <Footer />
    </>
  );
}

export default App;
