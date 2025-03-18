import { SocialLink } from '../../types/social.types';
import { socialLinks } from '../../data/mock/social';

export class SocialService {
  static async getAll(): Promise<SocialLink[]> {
    // TODO: Replace with Firebase call
    return Promise.resolve(socialLinks);
  }

  static async getByPlatform(platform: string): Promise<SocialLink | null> {
    // TODO: Replace with Firebase call
    const link = socialLinks.find(s => 
      s.link.toLowerCase().includes(platform.toLowerCase())
    );
    return Promise.resolve(link || null);
  }
} 