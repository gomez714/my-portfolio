import { SocialService, InfoService } from "../../services/api";
import { useEffect, useState } from "react";
import type { SocialLink } from "../../types/social.types";
import type { PersonalInfo } from "../../types/info.types";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [info, setInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    const loadSocialLinks = async () => {
      const data = await SocialService.getAll();
      setSocialLinks(data);
    };
    loadSocialLinks();
    const loadInfo = async () => {
      const data = await InfoService.getInfo();
      setInfo(data);
    };
    loadInfo();
  }, []);

  if (!info) return null;

  const socialIcons = socialLinks.map((link) => (
    <a href={link.link} 
      key={link.link} 
      target="_blank" 
      rel="noreferrer"
      className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out"
    >
      <link.icon stroke={1.5} size={25}/>
    </a>
  ));

  return (
    <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
      <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold">{info.name}</div>
      <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
      <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">
        Copyright &copy; {new Date().getFullYear()} {info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer;
