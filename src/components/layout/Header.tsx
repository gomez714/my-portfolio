import { IconHexagonLetterL } from "@tabler/icons-react";
import SideBar from "./SideBar";

const links = ["About", "Skills", "Experience", "Projects", "Contact"]

const navLinks = (col: boolean) => {
  return links.map((link) => {
    return (
      <a 
        key={link} 
        className={`${col ? 'flex flex-col items-center':''} text-textColor text-xl font-mono hover:text-primaryColor`} 
        href={`#${link}`}
      >
        <span className="text-primaryColor">0{links.indexOf(link)+1}. </span>{link}
      </a>
    )
  })
}

const Header = () => {
  return (
    <nav className="flex justify-between h-[18vh] bg-bgColor px-10 items-center">
      <IconHexagonLetterL className="z-10 text-primaryColor" size={60} stroke={1.25}/>
      <div className="bs:flex gap-8 hidden">
        {navLinks(false)}
      </div>
      <SideBar />
    </nav>

  )
}

export default Header;
export {navLinks};