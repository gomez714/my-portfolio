import React, { useEffect, useState } from 'react';
import { SkillService } from "../../services/api";
import type { SkillCategory } from "../../types/skill.types";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [skills, setSkills] = useState<SkillCategory[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      const data = await SkillService.getAll();
      setSkills(data);
    };
    loadSkills();
  }, []);

  return (
    <div className="px-16 md-mx:px-6 my-10 font-mono" id="Skills">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">03.&nbsp;</span>Skills
      </h1>
      <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills;
