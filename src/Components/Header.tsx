import { IconHexagonLetterL } from "@tabler/icons-react";

const Header = () => {
  return (
    <nav className="flex justify-between h-[15vh] bg-bgColor font-mono px-10 items-center">
      <IconHexagonLetterL className="text-primaryColor" size={60} stroke={1.25}/>
      <div className="bs:flex gap-8 hidden">
        <a className="text-textColor hover:text-primaryColor" href="#about">About Me</a>
        <a className="text-textColor hover:text-primaryColor" href="#experience">Experience</a>
        <a className="text-textColor hover:text-primaryColor" href="#work">Work</a>
        <a className="text-textColor hover:text-primaryColor" href="#contact">Contact</a>

      </div>
    </nav>
  )
}

export default Header;