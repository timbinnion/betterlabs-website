import type { WorkshopsContent } from '../types';

export const workshops: WorkshopsContent = {
  eyebrow: '工作坊与能力建设',
  headline: '我们的工作坊：帮助团队建立行动能力。',
  positioning:
    '聚焦且务实的工作坊，帮助团队理解循环机会、明确共同优先事项，并将可持续愿景转化为具体行动。',
  image: {
    src: '/images/about/bootcamp-activity.jpg',
    alt: '参与者在 (better)labs 循环经济工作坊中协作',
  },
  offerings: [
    {
      id: 'circularity-bootcamp',
      title: 'Circularity Bootcamp（循环经济训练营）',
      description: '建立团队对循环设计与商业思维的共同基础。',
    },
    {
      id: 'circular-reimagination',
      title: '循环再想象工作坊',
      description: '从循环视角重新构想现有产品、服务或系统。',
    },
    {
      id: 'value-mapping',
      title: '价值图谱工作坊',
      description: '识别系统中的环境价值、客户价值与商业价值。',
    },
    {
      id: 'emotional-durability',
      title: '情感耐久性工作坊',
      description: '探索如何通过意义、情感连接与关怀延长产品寿命。',
    },
  ],
  bespoke: '亦可根据组织需求定制工作坊与培训项目。',
};
