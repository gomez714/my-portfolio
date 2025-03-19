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
  const [isLoading, setIsLoading] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

  const btn = useMatches({
      xs:'xs',
      sm:'sm',
      md:'md',
      lg:'lg'
  })

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const data = await InfoService.getInfo();
        setInfo(data);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    loadInfo();
  }, []);

  return (
    <>
      <div 
        data-aos="zoom-out-up" 
        data-aos-duration="800" 
        className="flex relative overflow-hidden justify-around items-center font-mono px-10 
          py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse 
          bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6 animate-fade-in" 
        id="About"
      >        
        <Particles
          className="absolute -z-20 inset-0"
          quantity={1000}
          ease={80}
          vx={.1}
          vy={.1}
          color="#64FFDA"
          refresh
        />
        <div className="bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center">
          {isLoading ? (
            <>
              <div className="h-10 w-48 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-24 w-64 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-20 w-96 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-48 w-[90%] bg-gray-700 rounded animate-pulse"></div>
              <div className="flex gap-3 xs-mx:w-[90%] xs-mx:justify-between">
                <div className="h-12 w-32 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-12 w-32 bg-gray-700 rounded animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
              <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">{info?.name}</div>
              <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
                I'm a&nbsp;<span className="text-primaryColor">
                  <Typewriter options={{ strings: info?.stack || [], autoStart: true, loop: true, }} /> 
                </span>
              </div>
              <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
                {info?.bio}
              </div>
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
                  download={info?.name} 
                  className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-[46%]" 
                  size={btn} 
                  variant="outline"
                  color="primaryColor"
                  rightSection={<IconDownload size={20} />}
                >
                  Download
                </Button>
              </div>
            </>
          )}
        </div>
        <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
          {isLoading ? (
            <div className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 rounded-full bg-gray-700 animate-pulse"></div>
          ) : (
            <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
              <img src={LG_City} alt="Luis Gomez Profile" className="w-full h-full rounded-full object-cover" />
            </NeonGradientCard>
          )}
        </div>
      </div>
      {!isLoading && info && <ResumeViewer opened={opened} close={close} name={info.name} />}
    </>
  )
}

export default About;
