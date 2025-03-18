import Header from "../components/layout/Header"
import Mail from "../components/contact/Mail";
import Social from "../components/common/Social";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Contact from "../components/contact/Contact";

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