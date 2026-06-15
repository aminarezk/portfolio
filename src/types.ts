/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  technicalChallenge: string;
  solution: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface SkillItem {
  name: string;
  level: number; // percentage (e.g., 90)
  description: string;
}

export interface SkillGroup {
  category: string;
  iconName: string; // lucide-react icon identifier
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: 'Internship' | 'Freelance' | 'Training' | 'Personal Project';
  period: string;
  description: string[];
  skillsGained: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl?: string;
}

export interface GithubLanguage {
  name: string;
  percent: number;
  color: string;
}

export interface GithubStats {
  profileUrl: string;
  username: string;
  contributionsCount: number;
  pullRequestsCount: number;
  repositoriesCount: number;
  issuesClosed: number;
  topLanguages: GithubLanguage[];
}
