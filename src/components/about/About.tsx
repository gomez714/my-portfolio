import React, { useEffect, useState } from 'react';
import { InfoService } from "../../services/api";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import { Particles } from "../magicui/Particles";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import LG_City from "../../assets/LG-City.png";

interface PersonalInfo {
  name: string;
  stack: string[];
  bio: string;
}

const About = () => {
  const [info, setInfo] = useState<PersonalInfo | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const btn = useMatches({
      xs:'xs',
      sm:'sm',
      md:'md',
      lg:'lg'
  })

  useEffect(() => {
    const loadInfo = async () => {
      const data = await InfoService.getInfo();
      setInfo(data);
    };
    loadInfo();
  }, []);

  if (!info) return null;

  return (
    <>
      <div data-aos="zoom-out-up" data-aos-duration="800" className="flex overflow-hidden justify-around items-center font-mono px-16 h-[80vh]" id="bg">
        <Particles
          className="absolute -z-20 inset-0"
          quantity={1000}
          ease={80}
          vx={.1}
          vy={.1}
          color="#64FFDA"
          refresh
        />
        <div className="ml-20 w-3/5 flex flex-col">
          <div className="text-primaryColor text-3xl">Hi, I am</div>
          <div className="text-white text-[4.25rem] font-extrabold">{info.name}</div>
          <div className="text-white text-4xl flex font-semibold">I'm a&nbsp;<span className="text-primaryColor">
              <Typewriter options={{ strings: info.stack, autoStart: true, loop: true, }} /> 
            </span>
          </div>
          <div className="text-textColor text-xl my-8 text-justify font-semibold">{info.bio}</div>
          <div className="flex gap-3 xs-mx:w-[90%] xs-mx:justify-between">
            <Button 
              onClick={open} 
              color="primaryColor" 
              className="focus-visible:!outline-none !text-bgColor !w-fit xs-mx:!w-[46%]" 
              size={btn} 
              variant="filled" 
            >
              Check Resume
            </Button>
            <Button 
              component='a' 
              href="Resume.pdf" 
              download={info.name} 
              className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-[46%]" 
              size={btn} 
              variant="outline"
              color="primaryColor"
              rightSection={<IconDownload size={20} />}
            >
              Download
            </Button>
          </div>
        
        </div>
        <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
          <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
            <img src={LG_City} alt="Luis Gomez Profile" className="w-full h-full rounded-full object-cover" />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} name={info.name} />
    </>
  )
}

export default About;
