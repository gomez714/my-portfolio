import React, { useEffect, useState } from 'react';
import { SocialService } from '../../services/api';
import type { SocialLink } from '../../types/social.types';

const Social = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const loadSocialLinks = async () => {
      const data = await SocialService.getAll();
      setSocialLinks(data);
    };
    loadSocialLinks();
  }, []);

  const SocialIcons = socialLinks.map((socialLink) => {
    return (
      <a 
        href={socialLink.link} 
        key={socialLink.link} 
        target="_blank" 
        rel="noreferrer"
        className="font-mono text-lg hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out"
      >
        <div data-aos="fade-up-left" data-aos-duration="800">
          <socialLink.icon stroke={1.5} className="-rotate-90" size={25} />
        </div>
      </a>
    )
  });

  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-8 fixed bottom-32 -left-40 rotate-90">
      {SocialIcons}
      <hr className="border w-40 rounded-full bg-textColor border-textColor"/>
    </div>
  )
}

export default Social;
