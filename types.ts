
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  overview: string;
  problem: string;
  responsibilities: string[];
  process: string[];
  results: string;
  tools: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'Design' | 'Development' | 'Database' | 'Soft Skills';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
