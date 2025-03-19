import { Experience } from '../../types/experience.types';
import { ExperienceInfo } from '../../data/mock/experiences';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/Firebase';

export class ExperienceService {
  private static parseDate(dateString: string): Date {
    const startDate = dateString.split(' - ')[0];
    return new Date(startDate);
  }

  static async getAll(): Promise<Experience[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "work-experience"));
      const experiences: Experience[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        experiences.push({
          role: data.role,
          company: data.company,
          date: data.date,
          imgUrl: data.imgUrl,
          description: data.description,
          skills: data.skills
        });
      });

      return experiences.sort((a, b) => {
        const dateA = this.parseDate(a.date);
        const dateB = this.parseDate(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    } catch (error) {
      console.error("Error fetching experiences:", error);
      // Fallback to mock data in case of error
      return ExperienceInfo;
    }
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