import { IconHexagonLetterL } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavbarControl } from "../../hooks/useNavbarControl";

const links = ["About", "Projects", "Skills", "Experience",  "Contact"]

const navLinks=(col:Boolean, clicked:any)=>{
  const handleClick=()=>{
      if(clicked)clicked();
  }
  return links.map((link, index)=>{
      return  <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-textColor text-lg font-mono hover:text-primaryColor`} href={`#${link}`}><span className="text-primaryColor">0{index+1}. </span>{link}</a>
  })
}

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const { show, shadow, isScrolled } = useNavbarControl();

  return (
    <>
      {isScrolled && <div className="h-28 xs-mx:h-20" />}
      <nav className={`${isScrolled ? 'fixed top-0' : ''} flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-all duration-500 ease-in-out w-full z-10 bg-bgColor h-28 xs-mx:h-20 px-10 justify-between items-center xs-mx:px-4`}>
          
          <IconHexagonLetterL className="z-10" size={isMobile?45:60} color="#64FFDA" stroke={1.25}/>
          <div className="bs:flex gap-8 hidden">
              {navLinks(false, null)}
          </div>
        <SideBar />
      </nav>
    </>
  )
}

export default Header;
export {navLinks};