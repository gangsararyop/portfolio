# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Maintenance rule:** Whenever a change alters anything documented here (structure, sections, data shape, conventions, commands, folder layout), update this file as part of the same task — don't wait to be asked.

## Overview

Single-page site for Gangsar Aryo that markets his web-development services to potential clients (UMKM/local businesses, startups, and individuals). It is positioned as a sales/lead-generation site — not a CV — driving visitors to hire him via WhatsApp or email. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. The entire site is one scrolling page composed of sticky-sidebar navigation and stacked content sections. Copy is in English. Tone is benefit-led ("what you get") rather than résumé-style.

## Commands

```bash
npm run dev     # Start dev server with Turbopack (http://localhost:3000)
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint (next/core-web-vitals + next/typescript)
npm run cv      # Render cv/cv.html → public/static/cv_gangsar_aryo.pdf (headless Chrome/Edge)
```

## CV / résumé

The downloadable CV is hand-written HTML in [cv/cv.html](cv/cv.html), rendered to `public/static/cv_gangsar_aryo.pdf` by [cv/build.mjs](cv/build.mjs) (`npm run cv`; set `CHROME_PATH` if Chrome/Edge isn't found). It replicates the original Canva CV: A4, **Proxima Nova** (must be installed locally — it is a licensed font and is not committed; the local bold file is matched by its scrambled internal name), 11pt/15pt body, 0.75pt rules. The CV content is **separate from the site data** in `static/index.tsx` — when experience or projects change, update both and re-run `npm run cv`, then commit the regenerated PDF. The hero links to it via `CV_URL` in `static/contact.ts` ("View CV" opens it in a new tab; downloading is left to the browser's PDF viewer).

There is no test setup in this project.

## Architecture

- **Routing**: App Router. [src/app/page.tsx](src/app/page.tsx) is a thin server component that renders the client `Homepage`. [src/app/layout.tsx](src/app/layout.tsx) sets the `Inter` font (via CSS var `--font-inter`) and global metadata.
- **Page composition**: [src/app/home/index.tsx](src/app/home/index.tsx) (`"use client"`) is the real page. It lays out a two-column grid — a sticky left column (name, value-proposition headline, WhatsApp/Email CTA buttons, scroll-spy nav) and a right column that stacks the section components in order: About, Services, Work, Experience, Contact.
- **Content as data**: All copy/data lives in [src/app/home/static/index.tsx](src/app/home/static/index.tsx) as typed arrays (`sections`, `services`, `experiences`, `clientWorks`) with their `I*` interfaces. Edit content here, not in the section components. The `sections` array drives both the nav and the scroll-spy `id`s — each section component must render a matching `id` (current ids: `about`, `services`, `work`, `experience`, `contact`).
- **Services offering**: The `services` array (`IService`) is the core sales content — five offerings: Landing Page & Company Profile, Web Apps & Custom Dashboards, E-Commerce & Online Store, Management Systems (HRIS/POS/Inventory/CRM/LMS/Booking), and Maintenance & Revamp. Rendered by [src/app/home/sections/ServicesSection.tsx](src/app/home/sections/ServicesSection.tsx) as one bordered, single-open accordion via [src/app/home/components/ServiceCard.tsx](src/app/home/components/ServiceCard.tsx): the collapsed row (an `aria-expanded` button) shows title + tagline, expanding reveals description + deliverable chips with a framer-motion height animation (`AnimatePresence`). `ServicesSection` holds `openId` state, so opening one closes the others; the first service starts open.
- **Work / proof**: [src/app/home/sections/WorkSection.tsx](src/app/home/sections/WorkSection.tsx) renders `clientWorks` (`IClientWork`, via `ProjectCard`) as client-work proof, grouped **per client**: each entry has an optional `image` (shown as a small thumbnail to the right of the client name; omitted when absent), the combined `stacks`, and a `projects` list (`IClientProject`: `title`, one-line `description`, optional `websiteURL`) rendered as a divided list. Only the first 2 projects show (`VISIBLE_PROJECTS` in `ProjectCard`); the rest sit behind a "View more (+N)" toggle that expands with a framer-motion height animation. Add a new project to its client's `projects` array rather than as a new top-level entry. (The old `personalProjects` data and `PersonalProjectSection`/`PersonalProject` were removed — they duplicated the professional projects.)
- **Experience**: [src/app/home/sections/ExperienceSection.tsx](src/app/home/sections/ExperienceSection.tsx) renders `experiences` (`IExperience`) via [src/app/home/components/ExperienceCard.tsx](src/app/home/components/ExperienceCard.tsx), grouped **per company**: each entry has the company's overall `startYear`/`endYear`, combined `stacks`, and a `roles` array (`IExperienceRole`: `role`, own `startYear`/`endYear`, `description`). A single-role company renders as "Role @ Company"; a multi-role company renders the company name over a left-bordered list of its roles. Order companies and roles by most recent end date. Dates use `MMM YYYY` (EN: `AUG`, `OCT`; ID: `AGT`, `OKT`) with `PRESENT`/`SEKARANG` for ongoing. On `xl` the date column is a fixed `w-40` (no-wrap) and the text fills the rest, so all entries align.
- **Contact config**: Email, WhatsApp, GitHub, and LinkedIn live in [src/app/home/static/contact.ts](src/app/home/static/contact.ts) (`EMAIL`, `WHATSAPP_NUMBER`, `GITHUB_URL`, `LINKEDIN_URL`, and prebuilt `WHATSAPP_URL`/`EMAIL_URL`). It also holds `CV_URL`. The hero and ContactSection both use the WhatsApp/Email/View CV CTA buttons in a 2-column grid: WhatsApp (filled) spans full width on top, Email and View CV (outlined) sit below at half width each. The hero also has GitHub/LinkedIn icon links (via Iconify `mdi:github`/`mdi:linkedin`).
- **Scroll-spy**: [src/app/home/hooks/useInViewport.tsx](src/app/home/hooks/useInViewport.tsx) listens to `window` scroll and returns the active section `id`, which `index.tsx` uses to highlight the nav. Note the codebase also imports `react-intersection-observer` (`useInView`) inside individual sections (e.g. AboutSection) — both mechanisms coexist.
- **Smooth nav**: [src/app/home/helpers/scrollTo.ts](src/app/home/helpers/scrollTo.ts) scrolls to a section by `id` on nav click.

### Folder convention under `src/app/home/`
- `sections/` — one component per page section (the big building blocks).
- `components/` — reusable pieces used inside sections (cards, chips).
- `hooks/`, `helpers/`, `static/` — logic, utilities, and content data respectively.

## Animation

Scroll reveal is powered by [framer-motion](https://www.framer.com/motion/). [src/app/home/components/Reveal.tsx](src/app/home/components/Reveal.tsx) is a `"use client"` wrapper (`motion.div` with `initial`/`whileInView`/`viewport={{ once: true }}`) that fades and slides content up as it enters the viewport; it accepts `delay` and `y` props for tuning. Every section wraps its content in `Reveal`, and list-rendering sections (Services, Work, Experience) wrap each mapped item in its own `Reveal` with an index-based `delay` (`index * 0.08`) for a staggered effect. Use `Reveal` for any new section/list content instead of hand-rolling intersection-observer animation logic.

## Icons

Icons come from [Iconify](https://iconify.design) via `@iconify/react`. Import the `Icon` component and pass an `icon` name plus Tailwind classes for sizing/color, e.g. `<Icon icon="mdi:whatsapp" className="size-5 text-[#030608]" />`. Icons inherit color via `currentColor`, so set the color with a `text-*` class. Icons currently in use: `mdi:whatsapp`, `mdi:github`, `mdi:linkedin`, `heroicons:envelope-20-solid`, `heroicons:arrow-up-right-20-solid`, `heroicons:link-20-solid`, `heroicons:chevron-down-20-solid`, `heroicons:document-text-20-solid`. (The old hand-rolled inline-SVG components under `src/app/assets/` were removed in favor of Iconify.)

## Conventions

- Path alias `@/*` maps to `./src/*` (tsconfig). TypeScript is in `strict` mode.
- Styling is Tailwind v4 utility classes inline. The brand palette is hard-coded as hex/`rgb(from ...)` values directly in `className` (e.g. `#e1ecf3`, `#98b7d4`, `#bb795a`). Custom `container` utility and `.text-gradient-1` are defined in [src/app/globals.css](src/app/globals.css); Tailwind config lives entirely in that CSS file (v4 style), not a `tailwind.config.js`.
- Components are default-exported. Any component using hooks, state, or browser APIs needs the `"use client"` directive.
