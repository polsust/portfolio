export interface Project {
  name: string;
  description: string[];
  characteristics: string[];
  relevantTechnologies: string[];
  frontEndPercentage: number;
  backEndPercentage: number;
  gif: string;
  githubRepo?: string;
  demoLink: string;
  verticalGif: boolean;
}
