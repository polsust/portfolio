import { Project } from './../interfaces/project.interface';

export const PROJECTS: Project[] = [
  {
    name: 'Wordpress Theme Enfant',
    description: 'Un theme enfant personnalisable',
    gif: 'teamCherryWP.gif',
    githubRepo: 'https://github.com/PolSust/talon-child',
    RelevantTechnologies: ['PHP', 'WordPress', 'Css', 'WooCommerce'],
    frontEndPercentage: 30,
    backEndPercentage: 70,
    demoLink: 'https://cefii-developpements.fr/pol1149/wpIntegrationProject/',
  },
  {
    name: 'App mobile Basket',
    description: 'Une application mobile pour organiser un équipe des basket',
    gif: 'basket.gif',
    githubRepo: 'https://github.com/PolSust/BasketballTeam',
    RelevantTechnologies: ['Ionic', 'Angular', 'Sass', 'WooCommerce'],
    frontEndPercentage: 100,
    backEndPercentage: 0,
    demoLink: 'https://cefii-developpements.fr/pol1149/wpIntegrationProject/',
  },
];
