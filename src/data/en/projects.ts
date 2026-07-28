import type { ProjectContent, ProjectsContent } from '../types';

const frescoAirPurifier: ProjectContent = {
  id: 'fresco-air-purifier',
  title: 'Fresco Air Purifier',
  category: 'Circular product design',
  summary:
    'Circular redesign of an air purifier to reduce carbon emissions and create a modular product-service system.',
  image: {
    src: '/images/projects/fresco-web.jpg',
    alt: 'Fresco modular air purifier components arranged for inspection',
  },
  tags: ['Circular Design', 'LCA', 'Business Model'],
  metrics: [
    { value: '-41%', label: 'carbon emissions' },
    { value: '+63%', label: 'three-year income' },
  ],
  featured: false,
  visible: true,
};

const eekoTable: ProjectContent = {
  id: 'eeko-table',
  title: 'Eekö Table',
  category: 'Circular furniture',
  summary:
    'A modular furniture system designed for longevity, repair and material recovery.',
  image: {
    src: '/images/projects/eeko-table-web.jpg',
    alt: 'Eekö modular timber table in a studio setting',
  },
  tags: ['Furniture', 'Modularity', 'Buy-back'],
  metrics: [
    { value: '-40%', label: 'material impact' },
    { value: '+45%', label: 'product lifetime' },
  ],
};

const circularExhibitionSystem: ProjectContent = {
  id: 'circular-exhibition-system',
  title: 'Circular Exhibition System',
  category: 'Reusable systems',
  summary:
    'A reusable exhibition system designed to replace wasteful single-use builds.',
  image: {
    src: '/images/projects/candex-web.jpg',
    alt: 'Reusable circular exhibition system assembled in an event space',
  },
  tags: ['Systems Design', 'LCA', 'Leasing'],
  metrics: [
    { value: '-90%', label: 'carbon emissions' },
    { value: 'Lease', label: 'business model' },
  ],
  featured: false,
  visible: true,
};

const elumin8HouseholdEnergyMonitoring: ProjectContent = {
  id: 'elumin8-household-energy-monitoring',
  title: 'Elumin8 Energy Monitoring',
  category: 'Sustainable Innovation',
  summary:
    'A human-centred energy monitoring system that translated household electricity data into an intuitive physical display and digital experience, helping people understand and reduce their energy use.',
  image: {
    src: '/images/projects/elumin8-web.jpg',
    alt: 'Elumin8 household energy monitoring physical display and digital experience',
  },
  tags: ['Human-Centred Design', 'IoT Innovation', 'Behaviour Change'],
  metrics: [
    { value: '2', label: 'Markets explored' },
    { value: '1', label: 'Functional MVP developed' },
  ],
  featured: false,
  visible: true,
};

const sustainableProteinInnovationChina: ProjectContent = {
  id: 'sustainable-protein-innovation-china',
  title: 'Sustainable Protein Innovation',
  category: 'Sustainable Strategy',
  summary:
    'Consumer research and innovation workshops helped Silver Fern Farms understand how sustainability is perceived in China and develop new product, packaging and communication opportunities aligned with local values.',
  image: {
    src: '/images/projects/sff-web.jpg',
    alt: 'Sustainable protein consumer research and innovation workshop in China',
  },
  tags: ['Consumer Research', 'Innovation Strategy', 'Brand Positioning'],
  metrics: [
    { value: '1', label: 'Sustainability framework' },
    { value: '3', label: 'Innovation territories explored' },
  ],
  featured: false,
  visible: true,
};

const circularityBootcampDescoursCabaud: ProjectContent = {
  id: 'circularity-bootcamp-descours-cabaud',
  title: 'Circularity Bootcamp',
  category: 'Sustainability Education',
  summary:
    'A hands-on circularity programme that helped procurement and quality teams connect regulatory drivers with sourcing decisions, identify a priority product category and define practical decarbonisation initiatives.',
  image: {
    src: '/images/projects/circular-bootcamp-web.jpg',
    alt: 'Descours & Cabaud teams participating in a circularity bootcamp',
  },
  tags: ['Circular Economy', 'Sustainable Procurement', 'Capability Building'],
  metrics: [
    { value: '14', label: 'Participants' },
    { value: '1', label: 'Priority product line identified' },
  ],
  featured: true,
  visible: true,
};

const ruralInnovationSafari: ProjectContent = {
  id: 'rural-innovation-safari',
  title: 'Rural Innovation Safari',
  category: 'Sustainability Education',
  summary:
    'A four-day field-based innovation programme in rural China, where international students used design research and co-creation to develop responses to local waste, safety and cultural challenges.',
  image: {
    src: '/images/projects/rural-innovation-web.jpg',
    alt: 'International students conducting field research during the Rural Innovation Safari',
  },
  tags: ['Design Thinking', 'Field Research', 'Social Innovation'],
  metrics: [
    { value: '4 days', label: 'Immersive field programme' },
    { value: '3', label: 'Challenge areas explored' },
  ],
  featured: false,
  visible: true,
};

export const projects: ProjectsContent = {
  eyebrow: 'Past Projects',
  title: 'Our Work: Proof, not promises.',
  previousLabel: 'Previous project',
  nextLabel: 'Next project',
  // Add a project by copying one typed object above, adding its local image,
  // then placing the object in this array. Array order controls carousel order.
  items: [
    frescoAirPurifier,
    eekoTable,
    circularExhibitionSystem,
    elumin8HouseholdEnergyMonitoring,
    sustainableProteinInnovationChina,
    circularityBootcampDescoursCabaud,
    ruralInnovationSafari,
  ],
};
