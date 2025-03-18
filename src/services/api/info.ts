import { Info } from '../../data/mock/info';

interface PersonalInfo {
  name: string;
  stack: string[];
  bio: string;
}

export class InfoService {
  static async getInfo(): Promise<PersonalInfo> {
    // TODO: Replace with Firebase call
    return Promise.resolve(Info);
  }

  static async updateInfo(info: Partial<PersonalInfo>): Promise<PersonalInfo> {
    // TODO: Replace with Firebase call
    // This is just a mock implementation
    const updatedInfo = { ...Info, ...info };
    return Promise.resolve(updatedInfo);
  }
} 