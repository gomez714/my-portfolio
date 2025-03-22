import React, { useEffect, useState } from 'react';
import { ProjectService } from "../../services/api";
import type { Project } from "../../types/project.types";
import ProjectCard from './ProjectCard';
import LoadingPlaceholder from '../common/LoadingPlaceholder';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await ProjectService.getAll();
        setProjects(data);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="px-16 md-mx:px-6 my-10 font-mono animate-fade-in" id="Projects">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">02.&nbsp;</span>Projects
      </h1>
      {isLoading ? (
        <LoadingPlaceholder 
          count={3}
          ariaLabel="Loading projects"
        />
      ) : (
        <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects;
