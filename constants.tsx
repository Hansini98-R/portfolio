
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'restaurant-system',
    title: 'Restaurant Management System',
    category: 'Full-stack Development / UI Design',
    image: 'https://picsum.photos/seed/restaurant/800/600',
    overview: 'A web application developed for Rockvin Cafe to streamline order management and kitchen operations.',
    problem: 'The cafe was struggling with manual order tracking, leading to delays and errors in food service.',
    responsibilities: [
      'Frontend development using React.js',
      'Backend logic implementation with Node.js',
      'Database schema design in MySQL',
      'UI/UX Design focused on fast-paced environment'
    ],
    process: [
      'Conducted on-site observations at Rockvin Cafe',
      'Created wireframes for the order dashboard',
      'Developed a responsive React interface',
      'Implemented real-time updates via backend integration'
    ],
    results: 'Reduced order processing time by 25% and significantly decreased human errors in bill generation.',
    tools: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    github: '#'
  },
  {
    id: 'brand-violence',
    title: 'Marketing Brand Violence Analysis',
    category: 'Research / Machine Learning',
    image: 'https://picsum.photos/seed/ml/800/600',
    overview: 'A research project analyzing brand violence in social media posts specifically within AIESEC Sri Lanka contexts.',
    problem: 'Identifying inconsistent or damaging brand usage across massive volumes of community-generated content manually was impossible.',
    responsibilities: [
      'Machine Learning model training',
      'Data collection and branding analysis',
      'Presentation of findings'
    ],
    process: [
      'Scraped AIESEC social media posts',
      'Labelled dataset for brand compliance',
      'Used Python and ML libraries to identify patterns',
      'Designed a dashboard for visualization'
    ],
    results: 'Achieved a high accuracy in detecting brand inconsistencies, helping AIESEC maintain professional identity.',
    tools: ['Python', 'ML Libraries', 'Brand Analysis', 'Research'],
  },
  {
    id: 'aiesec-portal',
    title: 'AIESEC Partner Portal',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/portal/800/600',
    overview: 'A centralized portal for managing corporate and non-corporate partners within AIESEC Sri Lanka.',
    problem: 'Partner details were scattered across spreadsheets, making collaboration between different departments difficult.',
    responsibilities: [
      'UI Design for the partner management dashboard',
      'User flow optimization for lead generation',
      'Collaboration with development team'
    ],
    process: [
      'Interviewed VPs of Business Development',
      'Designed high-fidelity mockups in Figma',
      'Created a design system for the portal',
      'Conducted usability testing with current members'
    ],
    results: 'Streamlined the partner onboarding process and provided a single source of truth for stakeholder management.',
    tools: ['Figma', 'UI Design', 'User Flows', 'Design System'],
  },
  {
    id: 'rmi-chat',
    title: 'RMI Chat Application',
    category: 'Software Development',
    image: 'https://picsum.photos/seed/chat/800/600',
    overview: 'A Java-based chat application using Remote Method Invocation for multi-user group communication.',
    problem: 'Need for a secure, internal group communication tool during university projects.',
    responsibilities: [
      'Developed Java RMI server and client',
      'Designed the Swing UI',
      'Implemented Hibernate for message persistence'
    ],
    process: [
      'Defined system architecture (RMI)',
      'Built persistent storage using Hibernate ORM',
      'Created a multi-threaded server to handle concurrent users'
    ],
    results: 'Enabled stable real-time messaging for local network groups with full message history.',
    tools: ['Java', 'RMI', 'Hibernate', 'MySQL', 'Java Swing'],
  }
];

export const SKILLS: Skill[] = [
  { name: 'Figma', category: 'Design' },
  { name: 'Wireframing', category: 'Design' },
  { name: 'Prototyping', category: 'Design' },
  { name: 'Design Systems', category: 'Design' },
  { name: 'User Research', category: 'Design' },
  { name: 'React.js', category: 'Development' },
  { name: 'Node.js', category: 'Development' },
  { name: 'HTML/CSS', category: 'Development' },
  { name: 'JavaScript', category: 'Development' },
  { name: 'Flutter', category: 'Development' },
  { name: 'Python', category: 'Development' },
  { name: 'PHP', category: 'Development' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Microsoft SQL Server', category: 'Database' },
  { name: 'Leadership', category: 'Soft Skills' },
  { name: 'Teamwork', category: 'Soft Skills' },
  { name: 'Communication', category: 'Soft Skills' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Associate UI/UX Engineer',
    company: 'Botcalm Private Limited',
    period: 'Feb 2025 - Present',
    description: [
      'Designing user-centered solutions for complex digital products.',
      'Developing innovative UI components and ensuring aesthetic consistency.'
    ]
  },
  {
    role: 'Marketing Coordinator',
    company: 'AIESEC in Georgia',
    period: 'Jan 2024 - Jun 2024',
    description: [
      'Marketing Leader at Youth Speak Forum, the largest event organized by AIESEC in Georgia.',
      'Managed cross-border marketing campaigns and stakeholder communications.'
    ]
  },
  {
    role: 'Dev Team Member',
    company: 'AIESEC Sri Lanka',
    period: 'Jun 2023 - Jan 2024',
    description: [
      'Worked as a backend developer and UX/UI designer.',
      'Contributed to internal tools and portal development for the national team.'
    ]
  }
];
