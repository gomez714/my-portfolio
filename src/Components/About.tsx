import { Button } from "@mantine/core";
import { Info } from "../User";
import Typewriter from 'typewriter-effect';
import LG_City from "../assets/LG-City.png";

const About = () => {
  return (
    <div className="flex overflow-hidden justify-around items-center font-mono px-16 h-[80vh]" id="bg">
      <div className="ml-20 w-3/5 flex flex-col">
        <div className="text-primaryColor text-3xl">Hi, I am</div>
        <div className="text-white text-[4.25rem] font-extrabold">{Info.name}</div>
        <div className="text-white text-4xl flex font-semibold">I'm a&nbsp;<span className="text-primaryColor">
            <Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /> 
          </span>
        </div>
        <div className="text-textColor text-xl my-8 text-justify font-semibold">{Info.bio}</div>
        <Button component='a' href="https://github.com/gomez714" target="_blank" size="lg" variant="filled" color="primaryColor" className="!text-bgColor !w-fit">Check Resume</Button>
      </div>
      <div className="h-[45vh] w-[25vw] overflow-hidden rounded-full mr-14 bg-primaryColor" id="photo">
        <img src={LG_City} alt="Luis Gomez Profile" className="w-full h-full rounded-full object-cover" />
      </div>
    </div>
  )
}

export default About;
