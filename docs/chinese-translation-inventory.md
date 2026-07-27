# Chinese translation inventory

This inventory covers user-visible English copy used by the homepage, including the files under `src/data/en/` and shared English source objects currently reused by both locales. The **Proposed Chinese** column is intentionally blank.

Implementation IDs, URLs, image paths, form values, and other non-visible technical strings are excluded. Proper names and numeric values are included where a translator or reviewer should explicitly decide whether to retain or localise them.

## Metadata, navigation, and global accessibility

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/ui.ts` | `english.pageTitle` | (better)labs \| Sustainable Innovation Experts | (better)labs \| 可持续设计与创新顾问 | Browser title and social title; keep concise. |
| `src/data/ui.ts` | `english.pageDescription` | Helping manufacturers, brands and businesses redesign products, services and strategies for a more sustainable future. | 帮助制造商、品牌与企业重新思考产品、服务与战略，将可持续发展转化为切实可行的创新与商业价值。 | SEO/social description. |
| `src/data/ui.ts` | `english.skipLinkLabel` | Skip to content | 跳至主要内容 | Screen-reader/keyboard skip link. |
| `src/data/ui.ts` | `english.languageSwitcherLabel` | Choose language | 选择语言 | Accessible label. |
| `src/data/ui.ts` | `english.primaryNavigationLabel` | Primary navigation | 主导航 | Accessible navigation label. |
| `src/data/ui.ts` | `english.mobileMenuOpenLabel` | Open menu | 打开菜单 | Mobile menu button. |
| `src/data/ui.ts` | `english.mobileMenuCloseLabel` | Close menu | 关闭菜单 | Mobile menu button. |
| `src/data/site.ts` | `localeLabels.en` | English | English | Language name; leave in English. |
| `src/data/hero.ts` | `english.primaryAction.label` | Start a conversation | 开启合作交流 | Primary CTA. |
| `src/data/questions.ts` | `english.eyebrow` | What we help solve | 我们帮助解决的问题 | Section eyebrow. |
| `src/data/services.ts` | `english.eyebrow` | What we do | 我们的服务 | Section eyebrow. |
| `src/data/en/projects.ts` | `projects.eyebrow` | Selected work | 精选项目 | Section eyebrow. |
| `src/data/about.ts` | `english.eyebrow` | About (better)labs | 关于 (better)labs | Section eyebrow. |

---

## Hero

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/hero.ts` | `english.eyebrow` | We are (better)labs. | 我们是 (better)labs。 | First hero headline line. |
| `src/data/hero.ts` | `english.headline[0]` | (sustainable) innovation experts. | （可持续）设计与创新顾问。 | Primary positioning statement. |
| `src/data/hero.ts` | `english.servicesLead` | We do | 我们专注于 | Lead-in text. |
| `src/data/hero.ts` | `english.headline[1]` | (sustainable) Design. | （可持续）设计。 | Hero headline. |
| `src/data/hero.ts` | `english.headline[2]` | (sustainable) Strategy. | （可持续）战略。 | Hero headline. |
| `src/data/hero.ts` | `english.headline[3]` | (sustainable) Education. | （可持续）教育。 | Hero headline. |
| `src/data/hero.ts` | `english.body` | We help manufacturers, brands and businesses redesign products, strategies and business models to reduce environmental impact while creating new value. | 我们帮助制造商、品牌与企业重新设计产品、战略与商业模式，在降低环境影响的同时创造新的商业价值。 | Hero supporting copy. |
| `src/data/hero.ts` | `english.primaryAction.label` | Start a conversation | 开启合作交流 | Primary CTA. |
| `src/data/hero.ts` | `english.secondaryAction.label` | View selected projects | 查看精选项目 | Secondary CTA. |
| `src/data/hero.ts` | `english.proof` | Circular design × strategic innovation × education | 循环设计 × 战略创新 × 教育赋能 | Expertise statement. |
| `src/data/hero.ts` | `english.location` | Shanghai · Working globally | 上海 · 服务全球 | Location statement. |

---

## Questions

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/questions.ts` | `english.eyebrow` | What we help solve | 我们帮助解决的问题 | Section eyebrow. |
| `src/data/questions.ts` | `english.title` | The questions we like to help answer: | 我们乐于帮助您回答这些问题： | Section heading. |
| `src/data/questions.ts` | `english.items[0].question` | Where do I start with sustainability? | 我的可持续发展应该从哪里开始？ | Editorial question. |
| `src/data/questions.ts` | `english.items[0].answer` | We identify the biggest opportunities and build practical sustainability roadmaps. | 我们识别最具影响力的机会，并制定切实可行的可持续发展路线图。 | Supporting answer. |
| `src/data/questions.ts` | `english.items[1].question` | How can I reduce the impact of my product or business? | 如何降低产品或企业的环境影响？ | Editorial question. |
| `src/data/questions.ts` | `english.items[1].answer` | We redesign products, services and systems using circular design principles. | 我们运用循环设计原则，重新思考产品、服务与系统。 | Supporting answer. |
| `src/data/questions.ts` | `english.items[2].question` | Can I find value in sustainability? | 可持续发展能否创造商业价值？ | Editorial question. |
| `src/data/questions.ts` | `english.items[2].answer` | We uncover new opportunities through innovation, business model thinking and market insight. | 我们通过创新、商业模式思维与市场洞察，发掘新的价值机会。 | Supporting answer. |

---

## Services

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/services.ts` | `english.eyebrow` | What we do | 我们的服务 | Section eyebrow. |
| `src/data/services.ts` | `english.title` | Three ways to move from ambition to action. | 三种方式，将可持续愿景转化为行动。 | Main heading. |
| `src/data/services.ts` | `english.introduction` | Technical enough to understand products. Strategic enough to understand systems. Practical enough to help teams make something happen. | 以技术理解产品，以战略洞察系统，以实践推动团队付诸行动。 | Positioning statement. |
| `src/data/services.ts` | `english.items[0].title` | Sustainable Design | 可持续设计 | Service title. |
| `src/data/services.ts` | `english.items[0].subtitle` | Circular products, spaces and experiences. | 打造循环的产品、空间与体验。 | Service subtitle. |
| `src/data/services.ts` | `english.items[0].capabilities[0]` | Circular product redesign | 循环产品再设计 | Capability. |
| `src/data/services.ts` | `english.items[0].capabilities[1]` | Material and manufacturing optimisation | 材料与制造优化 | Capability. |
| `src/data/services.ts` | `english.items[0].capabilities[2]` | Modular systems | 模块化系统 | Capability. |
| `src/data/services.ts` | `english.items[0].capabilities[3]` | Life cycle assessment | 生命周期评估（LCA） | Capability. |
| `src/data/services.ts` | `english.items[1].title` | Sustainable Strategy | 可持续战略 | Service title. |
| `src/data/services.ts` | `english.items[1].subtitle` | Finding opportunities beyond compliance. | 发掘超越合规要求的创新机会。 | Service subtitle. |
| `src/data/services.ts` | `english.items[1].capabilities[0]` | Circular business models | 循环商业模式 | Capability. |
| `src/data/services.ts` | `english.items[1].capabilities[1]` | Opportunity mapping | 机会图谱 | Capability. |
| `src/data/services.ts` | `english.items[1].capabilities[2]` | Sustainability roadmaps | 可持续发展路线图 | Capability. |
| `src/data/services.ts` | `english.items[1].capabilities[3]` | Innovation strategy | 创新战略 | Capability. |
| `src/data/services.ts` | `english.items[2].title` | Sustainability Education | 可持续教育 | Service title. |
| `src/data/services.ts` | `english.items[2].subtitle` | Turning sustainability into action. | 将可持续理念转化为实际行动。 | Service subtitle. |
| `src/data/services.ts` | `english.items[2].capabilities[0]` | Workshops | 工作坊 | Capability. |
| `src/data/services.ts` | `english.items[2].capabilities[1]` | Training | 培训 | Capability. |
| `src/data/services.ts` | `english.items[2].capabilities[2]` | Capability building | 能力建设 | Capability. |

---

## Selected work: section controls

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `projects.eyebrow` | Selected work | 精选项目 | Section eyebrow. |
| `src/data/en/projects.ts` | `projects.title` | Proof, not promises. | 用成果证明，而非空谈承诺。 | Main heading. |
| `src/data/en/projects.ts` | `projects.previousLabel` | Previous project | 上一个项目 | Carousel control. |
| `src/data/en/projects.ts` | `projects.nextLabel` | Next project | 下一个项目 | Carousel control. |

## Selected work: Fresco Air Purifier

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `frescoAirPurifier.title` | Fresco Air Purifier | Fresco 空气净化器 | Project/product name; retain brand. |
| `src/data/en/projects.ts` | `frescoAirPurifier.category` | Circular product design | 循环产品设计 | Category label. |
| `src/data/en/projects.ts` | `frescoAirPurifier.summary` | Circular redesign of an air purifier to reduce carbon emissions and create a modular product-service system. | 通过循环设计重新定义空气净化器，在降低碳排放的同时打造模块化产品服务系统。 | Project summary. |
| `src/data/en/projects.ts` | `frescoAirPurifier.image.alt` | Fresco modular air purifier components arranged for inspection | Fresco 模块化空气净化器部件展示 | Image alt text. |
| `src/data/en/projects.ts` | `frescoAirPurifier.tags[0]` | Circular Design | 循环设计 | Compact tag. |
| `src/data/en/projects.ts` | `frescoAirPurifier.tags[1]` | LCA | 生命周期评估（LCA） | Compact tag. |
| `src/data/en/projects.ts` | `frescoAirPurifier.tags[2]` | Business Model | 商业模式 | Compact tag. |
| `src/data/en/projects.ts` | `frescoAirPurifier.metrics[0].value` | -41% | -41% | Numeric value. |
| `src/data/en/projects.ts` | `frescoAirPurifier.metrics[0].label` | carbon emissions | 碳排放 | Impact metric label. |
| `src/data/en/projects.ts` | `frescoAirPurifier.metrics[1].value` | +63% | +63% | Numeric value. |
| `src/data/en/projects.ts` | `frescoAirPurifier.metrics[1].label` | three-year income | 三年收益 | Impact metric label. |

---

## Selected work: Eekö Table

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `eekoTable.title` | Eekö Table | Eekö 桌 | Project/product name. |
| `src/data/en/projects.ts` | `eekoTable.category` | Circular furniture | 循环家具 | Category label. |
| `src/data/en/projects.ts` | `eekoTable.summary` | A modular furniture system designed for longevity, repair and material recovery. | 一个以耐用性、可维修性与材料回收为核心的模块化家具系统。 | Project summary. |
| `src/data/en/projects.ts` | `eekoTable.image.alt` | Eekö modular timber table in a studio setting | 工作室中的 Eekö 模块化木桌 | Image alt text. |
| `src/data/en/projects.ts` | `eekoTable.tags[0]` | Furniture | 家具 | Compact tag. |
| `src/data/en/projects.ts` | `eekoTable.tags[1]` | Modularity | 模块化 | Compact tag. |
| `src/data/en/projects.ts` | `eekoTable.tags[2]` | Buy-back | 回购模式 | Compact tag. |
| `src/data/en/projects.ts` | `eekoTable.metrics[0].value` | -40% | -40% | Numeric value. |
| `src/data/en/projects.ts` | `eekoTable.metrics[0].label` | material impact | 材料影响 | Impact metric label. |
| `src/data/en/projects.ts` | `eekoTable.metrics[1].value` | +45% | +45% | Numeric value. |
| `src/data/en/projects.ts` | `eekoTable.metrics[1].label` | product lifetime | 产品寿命 | Impact metric label. |

---

## Selected work: Circular Exhibition System

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `circularExhibitionSystem.title` | Circular Exhibition System | 循环展览系统 | Project title. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.category` | Reusable systems | 可重复使用系统 | Category label. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.summary` | A reusable exhibition system designed to replace wasteful single-use builds. | 一个可重复使用的展览系统，以循环方案取代一次性展台搭建。 | Project summary. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.image.alt` | Reusable circular exhibition system assembled in an event space | 活动现场搭建的循环展览系统 | Image alt text. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.tags[0]` | Systems Design | 系统设计 | Compact tag. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.tags[1]` | LCA | 生命周期评估（LCA） | Compact tag. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.tags[2]` | Leasing | 租赁模式 | Compact tag. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.metrics[0].value` | -90% | -90% | Numeric value. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.metrics[0].label` | carbon emissions | 碳排放 | Impact metric label. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.metrics[1].value` | Lease | 租赁 | Metric value. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.metrics[1].label` | business model | 商业模式 | Impact metric label. |

---

## Selected work: Elumin8 Energy Monitoring

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.title` | Elumin8 Energy Monitoring | Elumin8 能源监测系统 | Product/project name. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.category` | Sustainable Innovation | 可持续创新 | Category label. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.summary` | A human-centred energy monitoring system that translated household electricity data into an intuitive physical display and digital experience, helping people understand and reduce their energy use. | 以人为本的能源监测系统，将家庭用电数据转化为直观的实体装置与数字体验，帮助用户理解并降低能源消耗。 | Project summary. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.image.alt` | Elumin8 household energy monitoring physical display and digital experience | Elumin8 家庭能源监测实体装置与数字体验 | Image alt text. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.tags[0]` | Human-Centred Design | 以人为本的设计 | Compact tag. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.tags[1]` | IoT Innovation | IoT 创新 | Compact tag. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.tags[2]` | Behaviour Change | 行为改变 | Compact tag. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.metrics[0].value` | 2 | 2 | Numeric value. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.metrics[0].label` | Markets explored | 目标市场 | Impact metric label. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.metrics[1].value` | 1 | 1 | Numeric value. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.metrics[1].label` | Functional MVP developed | 功能性 MVP | Impact metric label. |

---

## Selected work: Sustainable Protein Innovation

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.title` | Sustainable Protein Innovation | 可持续蛋白创新 | Project title. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.category` | Sustainable Strategy | 可持续战略 | Category label. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.summary` | Consumer research and innovation workshops helped Silver Fern Farms understand how sustainability is perceived in China and develop new product, packaging and communication opportunities aligned with local values. | 通过消费者研究与创新工作坊，帮助 Silver Fern Farms 理解中国消费者对可持续发展的认知，并探索符合本地市场的新产品、包装与品牌传播机会。 | Project summary. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.image.alt` | Sustainable protein consumer research and innovation workshop in China | 中国可持续蛋白消费者研究与创新工作坊 | Image alt text. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.tags[0]` | Consumer Research | 消费者研究 | Compact tag. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.tags[1]` | Innovation Strategy | 创新战略 | Compact tag. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.tags[2]` | Brand Positioning | 品牌定位 | Compact tag. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.metrics[0].value` | 1 | 1 | Numeric value. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.metrics[0].label` | Sustainability framework | 可持续框架 | Impact metric label. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.metrics[1].value` | 3 | 3 | Numeric value. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.metrics[1].label` | Innovation territories explored | 创新机会领域 | Impact metric label. |

---

## Selected work: Circularity Bootcamp

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.title` | Circularity Bootcamp | 循环经济训练营 | Programme title. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.category` | Sustainability Education | 可持续教育 | Category label. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.summary` | A hands-on circularity programme that helped procurement and quality teams connect regulatory drivers with sourcing decisions, identify a priority product category and define practical decarbonisation initiatives. | 一个以实践为导向的循环经济训练营，帮助采购与质量团队连接法规要求与采购决策，识别重点产品类别，并制定切实可行的脱碳行动。 | Project summary. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.image.alt` | Descours & Cabaud teams participating in a circularity bootcamp | Descours & Cabaud 团队参与循环经济训练营 | Image alt text. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.tags[0]` | Circular Economy | 循环经济 | Compact tag. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.tags[1]` | Sustainable Procurement | 可持续采购 | Compact tag. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.tags[2]` | Capability Building | 能力建设 | Compact tag. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.metrics[0].value` | 14 | 14 | Numeric value. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.metrics[0].label` | Participants | 参与人数 | Impact metric label. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.metrics[1].value` | 1 | 1 | Numeric value. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.metrics[1].label` | Priority product line identified | 确定重点产品线 | Impact metric label. |

---

## Selected work: Rural Innovation Safari

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `ruralInnovationSafari.title` | Rural Innovation Safari | 乡村创新探索营 | Programme title. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.category` | Sustainability Education | 可持续教育 | Category label. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.summary` | A four-day field-based innovation programme in rural China, where international students used design research and co-creation to develop responses to local waste, safety and cultural challenges. | 一个为期四天的中国乡村实地创新项目，国际学生通过设计研究与共同创造，为当地废弃物、安全与文化挑战提出创新解决方案。 | Project summary. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.image.alt` | International students conducting field research during the Rural Innovation Safari | 国际学生在乡村创新探索营开展实地调研 | Image alt text. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.tags[0]` | Design Thinking | 设计思维 | Compact tag. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.tags[1]` | Field Research | 实地调研 | Compact tag. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.tags[2]` | Social Innovation | 社会创新 | Compact tag. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.metrics[0].value` | 4 days | 4 天 | Metric value. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.metrics[0].label` | Immersive field programme | 沉浸式实地项目 | Impact metric label. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.metrics[1].value` | 3 | 3 | Numeric value. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.metrics[1].label` | Challenge areas explored | 探索议题 | Impact metric label. |

## Workshops

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/workshops.ts` | `workshops.eyebrow` | Workshops and capability building | 工作坊与能力建设 | Section eyebrow. |
| `src/data/en/workshops.ts` | `workshops.headline` | Projects improve products and systems. Workshops build the capability to act. | 项目优化产品与系统，工作坊则帮助团队建立行动能力。 | Main heading; two-part contrast. |
| `src/data/en/workshops.ts` | `workshops.positioning` | Focused, practical sessions that help teams understand circular opportunities, align around priorities and turn sustainability ambition into action. | 聚焦且务实的工作坊，帮助团队理解循环机会、明确共同优先事项，并将可持续愿景转化为具体行动。 | Supporting paragraph. |
| `src/data/en/workshops.ts` | `workshops.image.alt` | Participants collaborating during a (better)labs circularity workshop | 参与者在 (better)labs 循环经济工作坊中协作 | Image alt text. |
| `src/data/en/workshops.ts` | `workshops.offerings[0].title` | Circularity Bootcamp | Circularity Bootcamp（循环经济训练营） | Workshop title; retain branded English name with Chinese explanation. |
| `src/data/en/workshops.ts` | `workshops.offerings[0].description` | Build a shared foundation in circular design and business thinking. | 建立团队对循环设计与商业思维的共同基础。 | Short workshop description. |
| `src/data/en/workshops.ts` | `workshops.offerings[1].title` | Circular Reimagination Workshop | 循环再想象工作坊 | Workshop title. |
| `src/data/en/workshops.ts` | `workshops.offerings[1].description` | Reimagine an existing product, service or system through a circular lens. | 从循环视角重新构想现有产品、服务或系统。 | Short workshop description. |
| `src/data/en/workshops.ts` | `workshops.offerings[2].title` | Value Mapping Workshop | 价值图谱工作坊 | Workshop title. |
| `src/data/en/workshops.ts` | `workshops.offerings[2].description` | Reveal environmental, customer and commercial value across the system. | 识别系统中的环境价值、客户价值与商业价值。 | Short workshop description. |
| `src/data/en/workshops.ts` | `workshops.offerings[3].title` | Emotional Durability Workshop | 情感耐久性工作坊 | Workshop title. |
| `src/data/en/workshops.ts` | `workshops.offerings[3].description` | Explore how meaning, attachment and care can extend product life. | 探索如何通过意义、情感连接与关怀延长产品寿命。 | Short workshop description. |
| `src/data/en/workshops.ts` | `workshops.bespoke` | Bespoke workshops and training programmes are also available. | 亦可根据组织需求定制工作坊与培训项目。 | Closing availability note. |

## Audiences

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/audiences.ts` | `english.eyebrow` | Who we work with | 我们的合作对象 | Section eyebrow. |
| `src/data/audiences.ts` | `english.title` | Built for people who need sustainability to become practical. | 为需要将可持续发展落到实处的团队而设计。 | Main section heading. |
| `src/data/audiences.ts` | `english.items[0].title` | Product designers and manufacturers | 产品设计师与制造商 | Audience title. |
| `src/data/audiences.ts` | `english.items[0].body` | Future-proof products through circular design. | 通过循环设计打造面向未来的产品。 | Audience supporting copy. |
| `src/data/audiences.ts` | `english.items[1].title` | Brands and businesses with ESG commitments | 有 ESG 承诺的品牌与企业 | Audience title. |
| `src/data/audiences.ts` | `english.items[1].body` | Turn sustainability commitments into customer value. | 将可持续承诺转化为客户价值。 | Audience supporting copy. |
| `src/data/audiences.ts` | `english.items[2].title` | Retail, exhibition and event companies | 零售、展览与活动公司 | Audience title. |
| `src/data/audiences.ts` | `english.items[2].body` | Create low-carbon spaces, reusable systems and circular experiences. | 打造低碳空间、可重复使用的系统与循环体验。 | Audience supporting copy. |

## Clients and credibility

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/clients.ts` | `english.eyebrow` | We’ve worked with | 我们曾合作的客户 | Section label and marquee accessible name. |
| `src/data/clients.ts` | `english.items[0].name` | Candex | Candex | Proper name; retain. |
| `src/data/clients.ts` | `english.items[0].image.alt` | Candex logo | Candex 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[1].name` | Childcare | Childcare | Proper name; retain official styling. |
| `src/data/clients.ts` | `english.items[1].image.alt` | Childcare logo | Childcare 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[2].name` | CSIRO | CSIRO | Proper name/acronym; retain. |
| `src/data/clients.ts` | `english.items[2].image.alt` | CSIRO logo | CSIRO 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[3].name` | Descours & Cabaud | Descours & Cabaud | Proper name; retain. |
| `src/data/clients.ts` | `english.items[3].image.alt` | Descours & Cabaud logo | Descours & Cabaud 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[4].name` | Dove | Dove | Proper name; retain English to match logo. |
| `src/data/clients.ts` | `english.items[4].image.alt` | Dove logo | Dove 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[5].name` | Ellen MacArthur Foundation | 艾伦·麦克阿瑟基金会 | Official Chinese rendering. |
| `src/data/clients.ts` | `english.items[5].image.alt` | Ellen MacArthur Foundation logo | 艾伦·麦克阿瑟基金会标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[6].name` | Fisher & Paykel | Fisher & Paykel | Proper name; retain English to match logo. |
| `src/data/clients.ts` | `english.items[6].image.alt` | Fisher & Paykel logo | Fisher & Paykel 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[7].name` | Ganter | Ganter | Proper name; retain. |
| `src/data/clients.ts` | `english.items[7].image.alt` | Ganter logo | Ganter 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[8].name` | Hazzys | Hazzys | Proper name; retain English to match logo. |
| `src/data/clients.ts` | `english.items[8].image.alt` | Hazzys logo | Hazzys 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[9].name` | Reima | Reima | Proper name; retain. |
| `src/data/clients.ts` | `english.items[9].image.alt` | Reima logo | Reima 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[10].name` | Schick | Schick | Proper name; retain English to match logo. |
| `src/data/clients.ts` | `english.items[10].image.alt` | Schick logo | Schick 标志 | Image alt text. |
| `src/data/clients.ts` | `english.items[11].name` | Silver Fern Farms | Silver Fern Farms | Proper name; retain English to match project copy and logo. |
| `src/data/clients.ts` | `english.items[11].image.alt` | Silver Fern Farms logo | Silver Fern Farms 标志 | Image alt text. |

## About and image stories

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/about.ts` | `english.eyebrow` | About (better)labs | 关于 (better)labs | Section eyebrow/navigation label. |
| `src/data/about.ts` | `english.statement` | Engineering rigour. Design imagination. Sustainability expertise. | 工程的严谨。设计的想象力。可持续发展的专业能力。 | Main statement; preserve three-part rhythm. |
| `src/data/about.ts` | `english.body` | (better)labs combines engineering, design and sustainability expertise to help organisations move from ambition to action. | (better)labs 融合工程、设计与可持续发展专业能力，帮助组织将愿景转化为行动。 | About paragraph. |
| `src/data/about.ts` | `english.founder` | Founded by Tim Binnion, product design engineer and sustainability consultant based in Shanghai. | 由常驻上海的产品设计工程师与可持续发展顾问 Tim Binnion 创立。 | Founder biography; retain personal name. |
| `src/data/about.ts` | `english.stories[0].title` | Circularity Bootcamp | Circularity Bootcamp | Image-story title; retain branded programme name. |
| `src/data/about.ts` | `english.stories[0].category` | Strategy + Education | 战略 + 教育 | Category label. |
| `src/data/about.ts` | `english.stories[0].images[0].alt` | Circularity Bootcamp facilitation | Circularity Bootcamp 引导现场 | Image alt text. |
| `src/data/about.ts` | `english.stories[0].images[1].alt` | Circularity Bootcamp activity | Circularity Bootcamp 小组活动 | Image alt text. |
| `src/data/about.ts` | `english.stories[1].title` | Rural Innovation Safari | 乡村创新探索营 | Image-story title. |
| `src/data/about.ts` | `english.stories[1].category` | Education in action | 教育实践 | Category label. |
| `src/data/about.ts` | `english.stories[1].images[0].alt` | Rural Innovation Safari fieldwork | 乡村创新探索营实地调研 | Image alt text. |
| `src/data/about.ts` | `english.stories[1].images[1].alt` | Rural Innovation Safari facilitation | 乡村创新探索营引导现场 | Image alt text. |

## Contact CTA, WeChat, and footer

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/cta.ts` | `shared.eyebrow` | Have a sustainability challenge? | 面临可持续发展挑战？ | CTA eyebrow. |
| `src/data/cta.ts` | `shared.headline` | What can we create (better) for you? | 我们能为您创造怎样的更优方案？ | Final CTA headline; adapts brand wordplay naturally. |
| `src/data/cta.ts` | `shared.body` | Bring us a product, system or ambition. We’ll help find the practical path forward. | 无论是一款产品、一个系统，还是一项愿景，我们都能帮助您找到切实可行的前进路径。 | CTA supporting copy. |
| `src/data/cta.ts` | `shared.action.label` | Start a conversation | 开启合作交流 | Expands contact form. |
| `src/data/cta.ts` | `cta.en.wechat.title` | Prefer WeChat? | 更习惯使用微信？ | Alternative-contact heading. |
| `src/data/cta.ts` | `cta.en.wechat.caption` | Scan to connect directly. | 扫描二维码即可联系。 | QR caption. |
| `src/data/cta.ts` | `cta.en.wechat.imageAlt` | Better Labs WeChat QR code | (better)labs 微信二维码 | QR image alt text. |
| `src/data/cta.ts` | `shared.footerMeta` | Circular design and innovation · Shanghai · © 2026 | 循环设计与创新 · 上海 · © 2026 | Compact footer metadata. |

## Contact form and interaction states

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/contact.ts` | `contactForm.nameLabel` | Name | 姓名 | Required field label. |
| `src/data/en/contact.ts` | `contactForm.organisationLabel` | Organisation / Company | 组织 / 公司 | Required field label. |
| `src/data/en/contact.ts` | `contactForm.emailLabel` | Email | 电子邮箱 | Required field label. |
| `src/data/en/contact.ts` | `contactForm.projectTypeLabel` | Project type | 项目类型 | Required select label. |
| `src/data/en/contact.ts` | `contactForm.projectTypePlaceholder` | Select a project type | 请选择项目类型 | Disabled initial select option. |
| `src/data/en/contact.ts` | `contactForm.projectTypeOptions[0].label` | Circular product redesign | 循环产品再设计 | Select option. |
| `src/data/en/contact.ts` | `contactForm.projectTypeOptions[1].label` | Sustainable strategy | 可持续战略 | Select option. |
| `src/data/en/contact.ts` | `contactForm.projectTypeOptions[2].label` | Workshops and training | 工作坊与培训 | Select option. |
| `src/data/en/contact.ts` | `contactForm.projectTypeOptions[3].label` | Other | 其他 | Select option. |
| `src/data/en/contact.ts` | `contactForm.messageLabel` | Message | 留言 | Required textarea label. |
| `src/data/en/contact.ts` | `contactForm.requiredHint` | All fields are required. | 所有字段均为必填项。 | Form instruction/validation hint. |
| `src/data/en/contact.ts` | `contactForm.submitLabel` | Send enquiry | 发送咨询 | Submit button label. |
| `src/data/en/contact.ts` | `contactForm.submittingLabel` | Sending enquiry… | 正在发送… | Loading state. |
| `src/data/en/contact.ts` | `contactForm.closeLabel` | Close form | 关闭表单 | Form close control. |
| `src/data/en/contact.ts` | `contactForm.successMessage` | Thank you. Your enquiry has been sent. | 感谢您的留言。咨询已成功发送。 | Submission success status. |
| `src/data/en/contact.ts` | `contactForm.errorMessage` | Something went wrong. Please try again. | 发送失败，请稍后重试。 | Generic submission error status. |

## Contact API messages and notification email

These strings are not currently sourced from locale data. Most API errors are replaced by the generic form error in the browser, but they are included because they are human-readable contact/validation copy and may surface during integration or debugging. The notification email is internal operational copy rather than public website copy.

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/worker.ts` | `PROJECT_LABELS.circular-product-redesign` | Circular product redesign |  | Project label included in notification email. |
| `src/worker.ts` | `PROJECT_LABELS.sustainable-strategy` | Sustainable strategy |  | Project label included in notification email. |
| `src/worker.ts` | `PROJECT_LABELS.workshops-and-training` | Workshops and training |  | Project label included in notification email. |
| `src/worker.ts` | `PROJECT_LABELS.other` | Other |  | Project label included in notification email. |
| `src/worker.ts` | `handleContact.methodNotAllowed.message` | Only POST requests are accepted. |  | API-only validation response. |
| `src/worker.ts` | `handleContact.unsupportedMediaType.message` | Content-Type must be application/json. |  | API-only validation response; technical term likely retained. |
| `src/worker.ts` | `handleContact.payloadTooLarge.message` | The request payload is too large. |  | API-only validation response; occurs in two branches. |
| `src/worker.ts` | `handleContact.invalidRequest.message` | The request body could not be read. |  | API-only validation response. |
| `src/worker.ts` | `handleContact.invalidJson.message` | The request body must contain valid JSON. |  | API-only validation response; technical term likely retained. |
| `src/worker.ts` | `handleContact.validationError.message` | The submitted contact details are invalid. |  | API-only validation response. |
| `src/worker.ts` | `handleContact.serviceUnavailable.message` | The contact service is not configured. |  | API-only service response. |
| `src/worker.ts` | `handleContact.deliveryFailed.message` | The enquiry could not be delivered. |  | API-only delivery response. |
| `src/worker.ts` | `resend.subject` | New (better)labs enquiry — {projectLabel} |  | Internal notification email subject. |
| `src/worker.ts` | `resend.heading` | New website enquiry |  | Internal notification email heading. |
| `src/worker.ts` | `resend.fieldLabels.name` | Name |  | Internal notification email field label. |
| `src/worker.ts` | `resend.fieldLabels.organisation` | Organisation |  | Internal notification email field label. |
| `src/worker.ts` | `resend.fieldLabels.email` | Email |  | Internal notification email field label. |
| `src/worker.ts` | `resend.fieldLabels.projectType` | Project type |  | Internal notification email field label. |
| `src/worker.ts` | `resend.fieldLabels.locale` | Locale |  | Internal notification email field label. |
| `src/worker.ts` | `resend.fieldLabels.message` | Message |  | Internal notification email field label. |

## Translation implementation notes

- Shared modules using `untranslated(...)` currently feed the same English object to both routes. Translating only `src/data/cn/` will not cover `ui`, `hero`, `questions`, `services`, `audiences`, `clients`, or `about` until those modules receive independent Chinese objects.
- `src/data/cta.ts` has locale-specific WeChat copy and form imports, but its primary CTA and footer copy remain in the shared object.
- Project and workshop content already have independent locale files under `src/data/en/` and `src/data/cn/`.
- Preserve technical values such as IDs, image paths, form option `value` fields, and fragment links. Translate only their user-visible labels.
- Review official Chinese names for client brands and programme names before choosing transliterations.
- Recheck line wrapping at 320–430px after translation, especially hero lines, question headings, project summaries, workshop titles, audience titles, and the final CTA.
