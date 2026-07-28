import type { ProjectContent, ProjectsContent } from '../types';

const frescoAirPurifier: ProjectContent = {
  id: 'fresco-air-purifier',
  title: 'Fresco 空气净化器',
  category: '循环产品设计',
  summary: '通过循环设计重新定义空气净化器，在降低碳排放的同时打造模块化产品服务系统。',
  image: {
    src: '/images/projects/fresco-web.jpg',
    alt: 'Fresco 模块化空气净化器部件展示',
  },
  tags: ['循环设计', '生命周期评估（LCA）', '商业模式'],
  metrics: [
    { value: '-41%', label: '碳排放' },
    { value: '+63%', label: '三年收益' },
  ],
  featured: true,
};

const eekoTable: ProjectContent = {
  id: 'eeko-table',
  title: 'Eekö 桌',
  category: '循环家具',
  summary: '一个以耐用性、可维修性与材料回收为核心的模块化家具系统。',
  image: {
    src: '/images/projects/eeko-table-web.jpg',
    alt: '工作室中的 Eekö 模块化木桌',
  },
  tags: ['家具', '模块化', '回购模式'],
  metrics: [
    { value: '-40%', label: '材料影响' },
    { value: '+45%', label: '产品寿命' },
  ],
};

const circularExhibitionSystem: ProjectContent = {
  id: 'circular-exhibition-system',
  title: '循环展览系统',
  category: '可重复使用系统',
  summary: '一个可重复使用的展览系统，以循环方案取代一次性展台搭建。',
  image: {
    src: '/images/projects/candex-web.jpg',
    alt: '活动现场搭建的循环展览系统',
  },
  tags: ['系统设计', '生命周期评估（LCA）', '租赁模式'],
  metrics: [
    { value: '-90%', label: '碳排放' },
    { value: '租赁', label: '商业模式' },
  ],
  visible: true,
};

const elumin8HouseholdEnergyMonitoring: ProjectContent = {
  id: 'elumin8-household-energy-monitoring',
  title: 'Elumin8 能源监测系统',
  category: '可持续创新',
  summary:
    '以人为本的能源监测系统，将家庭用电数据转化为直观的实体装置与数字体验，帮助用户理解并降低能源消耗。',
  image: {
    src: '/images/projects/elumin8-web.jpg',
    alt: 'Elumin8 家庭能源监测实体装置与数字体验',
  },
  tags: ['以人为本的设计', 'IoT 创新', '行为改变'],
  metrics: [
    { value: '2', label: '目标市场' },
    { value: '1', label: '功能性 MVP' },
  ],
  featured: false,
  visible: true,
};

const sustainableProteinInnovationChina: ProjectContent = {
  id: 'sustainable-protein-innovation-china',
  title: '可持续蛋白创新',
  category: '可持续战略',
  summary:
    '通过消费者研究与创新工作坊，帮助 Silver Fern Farms 理解中国消费者对可持续发展的认知，并探索符合本地市场的新产品、包装与品牌传播机会。',
  image: {
    src: '/images/projects/sff-web.jpg',
    alt: '中国可持续蛋白消费者研究与创新工作坊',
  },
  tags: ['消费者研究', '创新战略', '品牌定位'],
  metrics: [
    { value: '1', label: '可持续框架' },
    { value: '3', label: '创新机会领域' },
  ],
  featured: false,
  visible: true,
};

const circularityBootcampDescoursCabaud: ProjectContent = {
  id: 'circularity-bootcamp-descours-cabaud',
  title: '循环经济训练营',
  category: '可持续教育',
  summary:
    '一个以实践为导向的循环经济训练营，帮助采购与质量团队连接法规要求与采购决策，识别重点产品类别，并制定切实可行的脱碳行动。',
  image: {
    src: '/images/projects/circular-bootcamp-web.jpg',
    alt: 'Descours & Cabaud 团队参与循环经济训练营',
  },
  tags: ['循环经济', '可持续采购', '能力建设'],
  metrics: [
    { value: '14', label: '参与人数' },
    { value: '1', label: '确定重点产品线' },
  ],
  featured: false,
  visible: true,
};

const ruralInnovationSafari: ProjectContent = {
  id: 'rural-innovation-safari',
  title: '乡村创新探索营',
  category: '可持续教育',
  summary:
    '一个为期四天的中国乡村实地创新项目，国际学生通过设计研究与共同创造，为当地废弃物、安全与文化挑战提出创新解决方案。',
  image: {
    src: '/images/projects/rural-innovation-web.jpg',
    alt: '国际学生在乡村创新探索营开展实地调研',
  },
  tags: ['设计思维', '实地调研', '社会创新'],
  metrics: [
    { value: '4 天', label: '沉浸式实地项目' },
    { value: '3', label: '探索议题' },
  ],
  featured: false,
  visible: true,
};

export const projects: ProjectsContent = {
  eyebrow: '过往项目',
  title: '我们的项目：以成果说话，不止于承诺。',
  previousLabel: '上一个项目',
  nextLabel: '下一个项目',
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
