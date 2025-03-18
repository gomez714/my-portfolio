import { SkillCategory } from '../../types/skill.types';
import { SkillInfo } from '../../data/mock/skills';

export class SkillService {
  static async getAll(): Promise<SkillCategory[]> {
    // TODO: Replace with Firebase call
    return Promise.resolve(SkillInfo);
  }

  static async getByCategory(category: string): Promise<SkillCategory | null> {
    // TODO: Replace with Firebase call
    const skillCategory = SkillInfo.find(s => s.title === category);
    return Promise.resolve(skillCategory || null);
  }

  static async searchSkills(query: string): Promise<SkillCategory[]> {
    // TODO: Replace with Firebase call
    const categories = SkillInfo.filter(category => 
      category.skills.some(skill => 
        skill.toLowerCase().includes(query.toLowerCase())
      )
    );
    return Promise.resolve(categories);
  }
} 