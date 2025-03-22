import { Project, ProjectStatus } from '../../types/project.types';
import { ProjectInfo } from '../../data/mock/projects';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/Firebase';

export class ProjectService {
  private static readonly STATUS_ORDER: Record<ProjectStatus, number> = {
    complete: 0,
    inProgress: 1,
    archived: 2
  };

  static async getAll(): Promise<Project[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projects: Project[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        projects.push({
          title: data.title,
          description: data.description,
          image: data.imgUrl,
          live: data.live,
          technologies: data.technologies,
          link: data.link,
          github: data.github,
          status: data.status,
        });
      });

      return projects.sort((a, b) => 
        this.STATUS_ORDER[a.status] - this.STATUS_ORDER[b.status]
      );
    } catch (error) {
      console.error("Error fetching experiences:", error);
      return [...ProjectInfo].sort((a, b) => 
        this.STATUS_ORDER[a.status] - this.STATUS_ORDER[b.status]
      );
    }
  }

  static async getById(id: string): Promise<Project | null> {
    // TODO: Replace with Firebase call
    const project = ProjectInfo.find(p => p.title === id);
    return Promise.resolve(project || null);
  }
} 