# Chinese translation inventory

This inventory covers user-visible English copy used by the homepage, including the files under `src/data/en/` and shared English source objects currently reused by both locales. The **Proposed Chinese** column is intentionally blank.

Implementation IDs, URLs, image paths, form values, and other non-visible technical strings are excluded. Proper names and numeric values are included where a translator or reviewer should explicitly decide whether to retain or localise them.

## Metadata, navigation, and global accessibility

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/ui.ts` | `english.pageTitle` | (better)labs \| Sustainable Innovation Experts |  | Browser title and social title; keep concise. |
| `src/data/ui.ts` | `english.pageDescription` | Helping manufacturers, brands and businesses redesign products, services and strategies for a more sustainable future. |  | SEO/social description; approximately 126 English characters. |
| `src/data/ui.ts` | `english.skipLinkLabel` | Skip to content |  | Screen-reader/keyboard skip link. |
| `src/data/ui.ts` | `english.languageSwitcherLabel` | Choose language |  | Accessible label for language navigation. |
| `src/data/ui.ts` | `english.primaryNavigationLabel` | Primary navigation |  | Accessible navigation label. |
| `src/data/ui.ts` | `english.mobileMenuOpenLabel` | Open menu |  | Mobile menu button accessible label. |
| `src/data/ui.ts` | `english.mobileMenuCloseLabel` | Close menu |  | Mobile menu button accessible label. |
| `src/data/site.ts` | `localeLabels.en` | English |  | Language name; normally shown in English. |
| `src/data/hero.ts` | `english.primaryAction.label` | Start a conversation |  | Also used as the header CTA. |
| `src/data/questions.ts` | `english.eyebrow` | What we help solve |  | Navigation label and section eyebrow. |
| `src/data/services.ts` | `english.eyebrow` | What we do |  | Navigation label and section eyebrow. |
| `src/data/en/projects.ts` | `projects.eyebrow` | Selected work |  | Navigation label and section eyebrow. |
| `src/data/about.ts` | `english.eyebrow` | About (better)labs |  | Navigation label and section eyebrow. |

## Hero

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/hero.ts` | `english.eyebrow` | We are (better)labs. |  | First hero headline line. |
| `src/data/hero.ts` | `english.headline[0]` | (sustainable) innovation experts. |  | Primary positioning statement. |
| `src/data/hero.ts` | `english.servicesLead` | We do |  | Short lead-in above service lines. |
| `src/data/hero.ts` | `english.headline[1]` | (sustainable) Design. |  | Preserve parenthetical visual device if possible. |
| `src/data/hero.ts` | `english.headline[2]` | (sustainable) Strategy. |  | Preserve parenthetical visual device if possible. |
| `src/data/hero.ts` | `english.headline[3]` | (sustainable) Education. |  | Preserve parenthetical visual device if possible. |
| `src/data/hero.ts` | `english.body` | We help manufacturers, brands and businesses redesign products, strategies and business models to reduce environmental impact while creating new value. |  | Hero supporting copy; approximately 153 English characters. |
| `src/data/hero.ts` | `english.primaryAction.label` | Start a conversation |  | Primary CTA. |
| `src/data/hero.ts` | `english.secondaryAction.label` | View selected projects |  | Secondary CTA. |
| `src/data/hero.ts` | `english.proof` | Circular design × strategic innovation × education |  | Compact expertise statement; keep multiplication separators. |
| `src/data/hero.ts` | `english.location` | Shanghai · Working globally |  | Compact uppercase location statement. |

## Questions

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/questions.ts` | `english.eyebrow` | What we help solve |  | Section eyebrow/navigation label. |
| `src/data/questions.ts` | `english.title` | The questions we like to help answer: |  | Main section heading. |
| `src/data/questions.ts` | `english.items[0].question` | Where do I start with sustainability? |  | Editorial question heading. |
| `src/data/questions.ts` | `english.items[0].answer` | We identify the biggest opportunities and build practical sustainability roadmaps. |  | Supporting answer. |
| `src/data/questions.ts` | `english.items[1].question` | How can I reduce the impact of my product or business? |  | Long heading; test wrapping at mobile widths. |
| `src/data/questions.ts` | `english.items[1].answer` | We redesign products, services and systems using circular design principles. |  | Supporting answer. |
| `src/data/questions.ts` | `english.items[2].question` | Can I find value in sustainability? |  | Editorial question heading. |
| `src/data/questions.ts` | `english.items[2].answer` | We uncover new opportunities through innovation, business model thinking and market insight. |  | Supporting answer. |

## Services

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/services.ts` | `english.eyebrow` | What we do |  | Section eyebrow/navigation label. |
| `src/data/services.ts` | `english.title` | Three ways to move from ambition to action. |  | Main section heading. |
| `src/data/services.ts` | `english.introduction` | Technical enough to understand products. Strategic enough to understand systems. Practical enough to help teams make something happen. |  | Three-part positioning statement. |
| `src/data/services.ts` | `english.items[0].title` | Sustainable Design |  | Service card title. |
| `src/data/services.ts` | `english.items[0].subtitle` | Circular products, spaces and experiences. |  | Service card subtitle. |
| `src/data/services.ts` | `english.items[0].capabilities[0]` | Circular product redesign |  | Capability list item. |
| `src/data/services.ts` | `english.items[0].capabilities[1]` | Material and manufacturing optimisation |  | Capability list item; long. |
| `src/data/services.ts` | `english.items[0].capabilities[2]` | Modular systems |  | Capability list item. |
| `src/data/services.ts` | `english.items[0].capabilities[3]` | Life cycle assessment |  | Capability list item; use established LCA terminology. |
| `src/data/services.ts` | `english.items[1].title` | Sustainable Strategy |  | Service card title. |
| `src/data/services.ts` | `english.items[1].subtitle` | Finding opportunities beyond compliance. |  | Service card subtitle. |
| `src/data/services.ts` | `english.items[1].capabilities[0]` | Circular business models |  | Capability list item. |
| `src/data/services.ts` | `english.items[1].capabilities[1]` | Opportunity mapping |  | Capability list item. |
| `src/data/services.ts` | `english.items[1].capabilities[2]` | Sustainability roadmaps |  | Capability list item. |
| `src/data/services.ts` | `english.items[1].capabilities[3]` | Innovation strategy |  | Capability list item. |
| `src/data/services.ts` | `english.items[2].title` | Sustainability Education |  | Service card title. |
| `src/data/services.ts` | `english.items[2].subtitle` | Turning sustainability into action. |  | Service card subtitle. |
| `src/data/services.ts` | `english.items[2].capabilities[0]` | Workshops |  | Capability list item. |
| `src/data/services.ts` | `english.items[2].capabilities[1]` | Training |  | Capability list item. |
| `src/data/services.ts` | `english.items[2].capabilities[2]` | Capability building |  | Capability list item. |

## Selected work: section controls

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `projects.eyebrow` | Selected work |  | Section eyebrow/navigation label. |
| `src/data/en/projects.ts` | `projects.title` | Proof, not promises. |  | Main section heading. |
| `src/data/en/projects.ts` | `projects.previousLabel` | Previous project |  | Accessible label for carousel control. |
| `src/data/en/projects.ts` | `projects.nextLabel` | Next project |  | Accessible label for carousel control. |

## Selected work: Fresco Air Purifier

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `frescoAirPurifier.title` | Fresco Air Purifier |  | Project/product name; confirm whether to retain. |
| `src/data/en/projects.ts` | `frescoAirPurifier.category` | Circular product design |  | Category label. |
| `src/data/en/projects.ts` | `frescoAirPurifier.summary` | Circular redesign of an air purifier to reduce carbon emissions and create a modular product-service system. |  | Project summary. |
| `src/data/en/projects.ts` | `frescoAirPurifier.image.alt` | Fresco modular air purifier components arranged for inspection |  | Image alt text. |
| `src/data/en/projects.ts` | `frescoAirPurifier.tags[0]` | Circular Design |  | Compact tag. |
| `src/data/en/projects.ts` | `frescoAirPurifier.tags[1]` | LCA |  | Acronym; likely retain or pair with Chinese term. |
| `src/data/en/projects.ts` | `frescoAirPurifier.tags[2]` | Business Model |  | Compact tag. |
| `src/data/en/projects.ts` | `frescoAirPurifier.metrics[0].value` | -41% |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `frescoAirPurifier.metrics[0].label` | carbon emissions |  | Impact metric label. |
| `src/data/en/projects.ts` | `frescoAirPurifier.metrics[1].value` | +63% |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `frescoAirPurifier.metrics[1].label` | three-year income |  | Impact metric label. |

## Selected work: Eekö Table

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `eekoTable.title` | Eekö Table |  | Project/product name; confirm transliteration or retention. |
| `src/data/en/projects.ts` | `eekoTable.category` | Circular furniture |  | Category label. |
| `src/data/en/projects.ts` | `eekoTable.summary` | A modular furniture system designed for longevity, repair and material recovery. |  | Project summary. |
| `src/data/en/projects.ts` | `eekoTable.image.alt` | Eekö modular timber table in a studio setting |  | Image alt text. |
| `src/data/en/projects.ts` | `eekoTable.tags[0]` | Furniture |  | Compact tag. |
| `src/data/en/projects.ts` | `eekoTable.tags[1]` | Modularity |  | Compact tag. |
| `src/data/en/projects.ts` | `eekoTable.tags[2]` | Buy-back |  | Compact tag. |
| `src/data/en/projects.ts` | `eekoTable.metrics[0].value` | -40% |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `eekoTable.metrics[0].label` | material impact |  | Impact metric label. |
| `src/data/en/projects.ts` | `eekoTable.metrics[1].value` | +45% |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `eekoTable.metrics[1].label` | product lifetime |  | Impact metric label. |

## Selected work: Circular Exhibition System

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `circularExhibitionSystem.title` | Circular Exhibition System |  | Project title. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.category` | Reusable systems |  | Category label. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.summary` | A reusable exhibition system designed to replace wasteful single-use builds. |  | Project summary. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.image.alt` | Reusable circular exhibition system assembled in an event space |  | Image alt text. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.tags[0]` | Systems Design |  | Compact tag. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.tags[1]` | LCA |  | Acronym; likely retain or pair with Chinese term. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.tags[2]` | Leasing |  | Compact tag. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.metrics[0].value` | -90% |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.metrics[0].label` | carbon emissions |  | Impact metric label. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.metrics[1].value` | Lease |  | Metric value is a word and requires localisation. |
| `src/data/en/projects.ts` | `circularExhibitionSystem.metrics[1].label` | business model |  | Impact metric label. |

## Selected work: Elumin8 Energy Monitoring

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.title` | Elumin8 Energy Monitoring |  | Product/project name; confirm whether to retain “Elumin8”. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.category` | Sustainable Innovation |  | Category label. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.summary` | A human-centred energy monitoring system that translated household electricity data into an intuitive physical display and digital experience, helping people understand and reduce their energy use. |  | Long project summary. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.image.alt` | Elumin8 household energy monitoring physical display and digital experience |  | Image alt text. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.tags[0]` | Human-Centred Design |  | Compact tag. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.tags[1]` | IoT Innovation |  | Compact tag; likely retain “IoT”. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.tags[2]` | Behaviour Change |  | Compact tag. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.metrics[0].value` | 2 |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.metrics[0].label` | Markets explored |  | Impact metric label. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.metrics[1].value` | 1 |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `elumin8HouseholdEnergyMonitoring.metrics[1].label` | Functional MVP developed |  | Impact metric label; likely retain “MVP” or pair with Chinese. |

## Selected work: Sustainable Protein Innovation

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.title` | Sustainable Protein Innovation |  | Project title. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.category` | Sustainable Strategy |  | Category label. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.summary` | Consumer research and innovation workshops helped Silver Fern Farms understand how sustainability is perceived in China and develop new product, packaging and communication opportunities aligned with local values. |  | Long project summary; retain client name. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.image.alt` | Sustainable protein consumer research and innovation workshop in China |  | Image alt text. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.tags[0]` | Consumer Research |  | Compact tag. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.tags[1]` | Innovation Strategy |  | Compact tag. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.tags[2]` | Brand Positioning |  | Compact tag. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.metrics[0].value` | 1 |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.metrics[0].label` | Sustainability framework |  | Impact metric label. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.metrics[1].value` | 3 |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `sustainableProteinInnovationChina.metrics[1].label` | Innovation territories explored |  | Impact metric label. |

## Selected work: Circularity Bootcamp

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.title` | Circularity Bootcamp |  | Programme/project title. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.category` | Sustainability Education |  | Category label. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.summary` | A hands-on circularity programme that helped procurement and quality teams connect regulatory drivers with sourcing decisions, identify a priority product category and define practical decarbonisation initiatives. |  | Long project summary. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.image.alt` | Descours & Cabaud teams participating in a circularity bootcamp |  | Image alt text; retain client name. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.tags[0]` | Circular Economy |  | Compact tag. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.tags[1]` | Sustainable Procurement |  | Compact tag. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.tags[2]` | Capability Building |  | Compact tag. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.metrics[0].value` | 14 |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.metrics[0].label` | Participants |  | Impact metric label. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.metrics[1].value` | 1 |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `circularityBootcampDescoursCabaud.metrics[1].label` | Priority product line identified |  | Impact metric label. |

## Selected work: Rural Innovation Safari

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/projects.ts` | `ruralInnovationSafari.title` | Rural Innovation Safari |  | Programme/project title. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.category` | Sustainability Education |  | Category label. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.summary` | A four-day field-based innovation programme in rural China, where international students used design research and co-creation to develop responses to local waste, safety and cultural challenges. |  | Long project summary. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.image.alt` | International students conducting field research during the Rural Innovation Safari |  | Image alt text. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.tags[0]` | Design Thinking |  | Compact tag. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.tags[1]` | Field Research |  | Compact tag. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.tags[2]` | Social Innovation |  | Compact tag. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.metrics[0].value` | 4 days |  | Includes a translatable time unit. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.metrics[0].label` | Immersive field programme |  | Impact metric label. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.metrics[1].value` | 3 |  | Numeric value; retain. |
| `src/data/en/projects.ts` | `ruralInnovationSafari.metrics[1].label` | Challenge areas explored |  | Impact metric label. |

## Workshops

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/workshops.ts` | `workshops.eyebrow` | Workshops and capability building |  | Section eyebrow. |
| `src/data/en/workshops.ts` | `workshops.headline` | Projects improve products and systems. Workshops build the capability to act. |  | Main heading; two-part contrast. |
| `src/data/en/workshops.ts` | `workshops.positioning` | Focused, practical sessions that help teams understand circular opportunities, align around priorities and turn sustainability ambition into action. |  | Supporting paragraph. |
| `src/data/en/workshops.ts` | `workshops.image.alt` | Participants collaborating during a (better)labs circularity workshop |  | Image alt text. |
| `src/data/en/workshops.ts` | `workshops.offerings[0].title` | Circularity Bootcamp |  | Workshop title. |
| `src/data/en/workshops.ts` | `workshops.offerings[0].description` | Build a shared foundation in circular design and business thinking. |  | Short workshop description. |
| `src/data/en/workshops.ts` | `workshops.offerings[1].title` | Circular Reimagination Workshop |  | Workshop title. |
| `src/data/en/workshops.ts` | `workshops.offerings[1].description` | Reimagine an existing product, service or system through a circular lens. |  | Short workshop description. |
| `src/data/en/workshops.ts` | `workshops.offerings[2].title` | Value Mapping Workshop |  | Workshop title. |
| `src/data/en/workshops.ts` | `workshops.offerings[2].description` | Reveal environmental, customer and commercial value across the system. |  | Short workshop description. |
| `src/data/en/workshops.ts` | `workshops.offerings[3].title` | Emotional Durability Workshop |  | Workshop title. |
| `src/data/en/workshops.ts` | `workshops.offerings[3].description` | Explore how meaning, attachment and care can extend product life. |  | Short workshop description. |
| `src/data/en/workshops.ts` | `workshops.bespoke` | Bespoke workshops and training programmes are also available. |  | Closing availability note. |

## Audiences

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/audiences.ts` | `english.eyebrow` | Who we work with |  | Section eyebrow. |
| `src/data/audiences.ts` | `english.title` | Built for people who need sustainability to become practical. |  | Main section heading. |
| `src/data/audiences.ts` | `english.items[0].title` | Product designers and manufacturers |  | Audience title. |
| `src/data/audiences.ts` | `english.items[0].body` | Future-proof products through circular design. |  | Audience supporting copy. |
| `src/data/audiences.ts` | `english.items[1].title` | Brands and businesses with ESG commitments |  | Audience title; likely retain “ESG”. |
| `src/data/audiences.ts` | `english.items[1].body` | Turn sustainability commitments into customer value. |  | Audience supporting copy. |
| `src/data/audiences.ts` | `english.items[2].title` | Retail, exhibition and event companies |  | Audience title. |
| `src/data/audiences.ts` | `english.items[2].body` | Create low-carbon spaces, reusable systems and circular experiences. |  | Audience supporting copy. |

## Clients and credibility

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/clients.ts` | `english.eyebrow` | We’ve worked with |  | Section label and marquee accessible name. |
| `src/data/clients.ts` | `english.items[0].name` | Candex |  | Proper name/title attribute; normally retain. |
| `src/data/clients.ts` | `english.items[0].image.alt` | Candex logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[1].name` | Childcare |  | Proper name/title attribute; confirm official styling. |
| `src/data/clients.ts` | `english.items[1].image.alt` | Childcare logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[2].name` | CSIRO |  | Proper name/acronym; retain. |
| `src/data/clients.ts` | `english.items[2].image.alt` | CSIRO logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[3].name` | Descours & Cabaud |  | Proper name; retain. |
| `src/data/clients.ts` | `english.items[3].image.alt` | Descours & Cabaud logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[4].name` | Dove |  | Proper name; retain or use official Chinese brand name. |
| `src/data/clients.ts` | `english.items[4].image.alt` | Dove logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[5].name` | Ellen MacArthur Foundation |  | Proper name; consider official Chinese rendering. |
| `src/data/clients.ts` | `english.items[5].image.alt` | Ellen MacArthur Foundation logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[6].name` | Fisher & Paykel |  | Proper name; retain or use official Chinese brand name. |
| `src/data/clients.ts` | `english.items[6].image.alt` | Fisher & Paykel logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[7].name` | Ganter |  | Proper name; retain. |
| `src/data/clients.ts` | `english.items[7].image.alt` | Ganter logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[8].name` | Hazzys |  | Proper name; retain or use official Chinese brand name. |
| `src/data/clients.ts` | `english.items[8].image.alt` | Hazzys logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[9].name` | Reima |  | Proper name; retain. |
| `src/data/clients.ts` | `english.items[9].image.alt` | Reima logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[10].name` | Schick |  | Proper name; retain or use official Chinese brand name. |
| `src/data/clients.ts` | `english.items[10].image.alt` | Schick logo |  | Image alt text. |
| `src/data/clients.ts` | `english.items[11].name` | Silver Fern Farms |  | Proper name; retain or use official Chinese brand name. |
| `src/data/clients.ts` | `english.items[11].image.alt` | Silver Fern Farms logo |  | Image alt text. |

## About and image stories

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/about.ts` | `english.eyebrow` | About (better)labs |  | Section eyebrow/navigation label. |
| `src/data/about.ts` | `english.statement` | Engineering rigour. Design imagination. Sustainability expertise. |  | Main statement; three-part rhythm. |
| `src/data/about.ts` | `english.body` | (better)labs combines engineering, design and sustainability expertise to help organisations move from ambition to action. |  | About paragraph. |
| `src/data/about.ts` | `english.founder` | Founded by Tim Binnion, product design engineer and sustainability consultant based in Shanghai. |  | Founder biography; retain personal name. |
| `src/data/about.ts` | `english.stories[0].title` | Circularity Bootcamp |  | Image-story title. |
| `src/data/about.ts` | `english.stories[0].category` | Strategy + Education |  | Uppercase category label. |
| `src/data/about.ts` | `english.stories[0].images[0].alt` | Circularity Bootcamp facilitation |  | Image alt text. |
| `src/data/about.ts` | `english.stories[0].images[1].alt` | Circularity Bootcamp activity |  | Image alt text. |
| `src/data/about.ts` | `english.stories[1].title` | Rural Innovation Safari |  | Image-story title. |
| `src/data/about.ts` | `english.stories[1].category` | Education in action |  | Uppercase category label. |
| `src/data/about.ts` | `english.stories[1].images[0].alt` | Rural Innovation Safari fieldwork |  | Image alt text. |
| `src/data/about.ts` | `english.stories[1].images[1].alt` | Rural Innovation Safari facilitation |  | Image alt text. |

## Contact CTA, WeChat, and footer

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/cta.ts` | `shared.eyebrow` | Have a sustainability challenge? |  | CTA eyebrow; currently shared across locales. |
| `src/data/cta.ts` | `shared.headline` | What can we create (better) for you? |  | Final CTA headline. |
| `src/data/cta.ts` | `shared.body` | Bring us a product, system or ambition. We’ll help find the practical path forward. |  | CTA supporting copy. |
| `src/data/cta.ts` | `shared.action.label` | Start a conversation |  | Expands the contact form. |
| `src/data/cta.ts` | `cta.en.wechat.title` | Prefer WeChat? |  | Alternative-contact heading. |
| `src/data/cta.ts` | `cta.en.wechat.caption` | Scan to connect directly. |  | QR caption. |
| `src/data/cta.ts` | `cta.en.wechat.imageAlt` | Better Labs WeChat QR code |  | QR image alt text. |
| `src/data/cta.ts` | `shared.footerMeta` | Circular design and innovation · Shanghai · © 2026 |  | Compact footer metadata. |

## Contact form and interaction states

| Source file | Content key or object path | Current English text | Proposed Chinese | Context / length note |
|---|---|---|---|---|
| `src/data/en/contact.ts` | `contactForm.nameLabel` | Name |  | Required field label. |
| `src/data/en/contact.ts` | `contactForm.organisationLabel` | Organisation / Company |  | Required field label. |
| `src/data/en/contact.ts` | `contactForm.emailLabel` | Email |  | Required field label. |
| `src/data/en/contact.ts` | `contactForm.projectTypeLabel` | Project type |  | Required select label. |
| `src/data/en/contact.ts` | `contactForm.projectTypePlaceholder` | Select a project type |  | Disabled initial select option. |
| `src/data/en/contact.ts` | `contactForm.projectTypeOptions[0].label` | Circular product redesign |  | Select option. |
| `src/data/en/contact.ts` | `contactForm.projectTypeOptions[1].label` | Sustainable strategy |  | Select option. |
| `src/data/en/contact.ts` | `contactForm.projectTypeOptions[2].label` | Workshops and training |  | Select option. |
| `src/data/en/contact.ts` | `contactForm.projectTypeOptions[3].label` | Other |  | Select option. |
| `src/data/en/contact.ts` | `contactForm.messageLabel` | Message |  | Required textarea label. |
| `src/data/en/contact.ts` | `contactForm.requiredHint` | All fields are required. |  | Form instruction/validation hint. |
| `src/data/en/contact.ts` | `contactForm.submitLabel` | Send enquiry |  | Submit button label. |
| `src/data/en/contact.ts` | `contactForm.submittingLabel` | Sending enquiry… |  | Loading state; keep concise. |
| `src/data/en/contact.ts` | `contactForm.closeLabel` | Close form |  | Form close control. |
| `src/data/en/contact.ts` | `contactForm.successMessage` | Thank you. Your enquiry has been sent. |  | Submission success status. |
| `src/data/en/contact.ts` | `contactForm.errorMessage` | Something went wrong. Please try again. |  | Generic submission error status. |

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
