import Header from "../components/layout/Header"
import Mail from "../components/contact/Mail";
import Social from "../components/common/Social";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";
import { Loader } from "../components/common/Loader";
import { useEffect, useState } from "react";

const HomePage = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] 
      ${isLoading?"flex":""} items-center overflow-hidden justify-center`}
    >
      {isLoading ? <Loader /> : (
        <>
          <Header />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
          <Mail />
          <Social />
        </>
      )}
    </div>
  )
}

export default HomePage;