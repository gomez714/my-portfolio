import Header from "../Components/Header"
import Mail from "../Components/Mail";
import Social from "../Components/Social";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";
import Contact from "../Components/Contact";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Mail />
      <Social />
    </>
  )
}

export default HomePage;