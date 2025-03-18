import { Project } from '../../types/project.types';
import { ProjectInfo } from '../../data/mock/projects';

export class ProjectService {
  static async getAll(): Promise<Project[]> {
    // TODO: Replace with Firebase call
    return Promise.resolve(ProjectInfo);
  }

  static async getById(id: string): Promise<Project | null> {
    // TODO: Replace with Firebase call
    const project = ProjectInfo.find(p => p.title === id);
    return Promise.resolve(project || null);
  }
} 