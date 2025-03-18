import { Experience } from '../../types/experience.types';
import { ExperienceInfo } from '../../data/mock/experiences';

export class ExperienceService {
  static async getAll(): Promise<Experience[]> {
    // TODO: Replace with Firebase call
    return Promise.resolve(ExperienceInfo);
  }

  static async getByCompany(company: string): Promise<Experience | null> {
    // TODO: Replace with Firebase call
    const experience = ExperienceInfo.find(e => e.company === company);
    return Promise.resolve(experience || null);
  }

  static async getByRole(role: string): Promise<Experience[]> {
    // TODO: Replace with Firebase call
    const experiences = ExperienceInfo.filter(e => e.role.includes(role));
    return Promise.resolve(experiences);
  }
} 