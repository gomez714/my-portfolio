export type ProjectStatus = "complete" | "inProgress" | "archived";

export interface Project {
  title: string;
  description: string;
  image: string;
  live: boolean;
  technologies: string[];
  link: string;
  github: string;
  status: ProjectStatus;
} 