import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "../User";

const Projects = () => {
  return (
    <div className="px-16 mx-20 my-20 font-mono">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white">
        <span className="text-primaryColor">02.&nbsp;</span>Projects
      </h1>
      <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
        {ProjectInfo.map((project: any) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects;
