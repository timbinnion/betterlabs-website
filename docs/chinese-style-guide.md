# Simplified Chinese style guide

This guide keeps future Chinese updates consistent with the approved website localisation. The translation inventory remains the source of truth for current page copy.

## Core terminology

| English term | Approved Simplified Chinese |
|---|---|
| (better)labs | (better)labs |
| Sustainable Design | 可持续设计 |
| Circular Design | 循环设计 |
| Sustainable Strategy | 可持续战略 |
| Sustainability Education | 可持续教育 |
| Workshop | 工作坊 |
| Circularity Bootcamp | Circularity Bootcamp（循环经济训练营） |
| Capability Building | 能力建设 |
| Life Cycle Assessment / LCA | 生命周期评估（LCA） |
| Business Model | 商业模式 |
| Sustainable Procurement | 可持续采购 |
| Human-Centred Design | 以人为本的设计 |
| Innovation Strategy | 创新战略 |
| Design Thinking | 设计思维 |
| Field Research | 实地调研 |
| Product-Service System | 产品服务系统 |

## Language conventions

- Use Simplified Chinese and full-width Chinese punctuation in Chinese sentences, including `，`、`。`、`？`、`：` and Chinese parentheses `（ ）`.
- Do not insert artificial spaces between Chinese characters. Spaces may separate Chinese from retained Latin brand names or acronyms where this improves readability.
- Keep `(better)labs` unchanged. Retain approved brand, organisation and personal names in their official Latin form.
- Retain approved acronyms such as ESG, IoT, LCA and MVP. Introduce a Chinese expansion where the inventory specifies one, for example `生命周期评估（LCA）`.
- Preserve programme-name treatment exactly. In particular, use `Circularity Bootcamp（循环经济训练营）` for the workshop offering and retain `Circularity Bootcamp` where the inventory specifies the branded story title.

## Typography

- Chinese pages use Inter for supported Latin characters, followed by `"Noto Sans SC"`, `"PingFang SC"`, `"Hiragino Sans GB"` and `"Microsoft YaHei"`.
- Do not use `local("Inter")`; the site’s bundled Inter variable WOFF2 remains authoritative.
- Use zero letter-spacing for Chinese text.
- Use approximately `1.55–1.75` line-height for Chinese body copy and `1.1–1.25` for large headings.
- Keep `font-synthesis: none` and use the existing weight hierarchy.

## Adding a bilingual project

1. Add a project object with the same ID, image path, featured state and visibility state to both `src/data/en/projects.ts` and `src/data/cn/projects.ts`.
2. Translate the Chinese title, category, summary, image alt text, tags and metric labels. Preserve technical IDs, paths and numeric values.
3. Insert the object in the same position in both locale `items` arrays.
4. Add the local image under `public/images/projects/`.
5. Run `npm run check` and `npm run build`, then review `/` and `/cn/` at desktop and mobile widths.
