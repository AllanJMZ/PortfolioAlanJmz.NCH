# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: technical recruiters, engineering managers, and QA Leads at companies in Mexico and LATAM evaluating candidates primarily in Spanish, with secondary support for bilingual (English) review. Their job is to assess Edgar Allan Jiménez Cruz's technical depth in QA Automation, SDET engineering, and test architecture, verify formal credentials, and initiate contact.

## Product Purpose

Personal engineering portfolio (`PortfolioAlanJmz.NCH`) for Edgar Allan Jiménez Cruz (Allan Jiménez), built to showcase QA Automation frameworks (Playwright, Appium, REST API/Karate, Selenium, and E-Commerce QA) alongside verified academic and technical credentials. Success means a technical reviewer or recruiter quickly inspects the automation frameworks and stack, validates official credentials, and reaches out via email, GitHub, or LinkedIn.

## Positioning

Combines formal university credentials (B.S. in Computer Science / IT from UNAM with a registered SEP professional license), internationally recognized certifications (ISTQB CTFL, Lite Thinking Test Automation Diploma, IBM credentials), and multi-platform test automation experience (Web E2E, Mobile Android/iOS, REST APIs & SQL) with an authentic, approachable developer identity.

## Operating Context

Static single-page web application (React 19, TypeScript, Vite 8) hosted on GitHub Pages (`https://allanjmz.github.io/PortfolioAlanJmz.NCH/`) via GitHub Actions on push to `main`. Supports Spanish (`es`, default) and English (`en`) UI switching persisted in `localStorage`, dark (default) and light visual themes, and real-time search/category filtering across projects.

## Capabilities and Constraints

- Preserve existing sections and interactive capabilities: digital profile card (`Hero`), searchable and category-filterable project catalog (`ProjectsSection`), categorized technical stack (`SkillsSection`), academic degree and credentials (`CertificationsSection`), personal interests including the feline QA supervisor (`InterestsSection`), and direct contact links (`ContactSection`).
- Maintain bilingual ES/EN parity while keeping Mexican/LATAM Spanish copy natural and clear for the primary audience.
- Keep static deployment compatibility for GitHub Pages (`vite.config.ts` `base: './'`).
- Undecided/open content states: individual project `demoUrl` and `githubUrl` entries in `src/data/translations.ts` currently reference general portfolio/GitHub URLs pending dedicated repositories; the English B2 certification is marked `Pendiente` without a credential URL, and Scrum SFPC lacks a credential URL. These must be handled transparently without fabricating project metrics, links, or credentials.

## Brand Commitments

- Identity: Edgar Allan Jiménez Cruz / Allan Jiménez — QA Automation Engineer, QA Lead Jr & SDET; UNAM Computer Science graduate with registered professional license.
- Voice: dedicated, persistent, technically rigorous, and approachable.
- Binding content & personal assets to preserve: `public/credencial.jpg` (profile photo), `public/logo.png` (brand emblem), `public/meme-cat.png` ("Michi Elegante (QA & Chief Officer)"), personal interests (cinema, Super Smash Bros & gaming, Pokémon TCG, "Can-Do" / "Cómo Sí" mindset), and direct contact channels (`eallan.jcruz@gmail.com`, `github.com/AllanJMZ`, LinkedIn).

## Evidence on Hand

- Visual and identity assets in `public/`: `credencial.jpg`, `logo.png`, `meme-cat.png`, `avatar.png`, `favicon.svg`.
- Verified certifications with live links: Lite Thinking Test Automation Diploma, ISTQB CTFL (Credly), IBM Enterprise Data Science (Credly), IBM Journey to Cloud (Google Drive).
- Academic record: UNAM Licenciatura en Informática / Computación (Titulado con Cédula Profesional).
- Legacy non-i18n duplicate arrays still exist in `src/data/projects.ts` (`PROJECTS_DATA`, `CERTIFICATIONS_DATA`, `SKILLS_LIST`, `INTERESTS_DATA`, `EDUCATION_DATA`) alongside the active `PERSONAL_INFO` export; active UI data comes from `src/data/translations.ts`.
- Absent evidence (must not be invented): standalone repository URLs or live test reports for the 5 showcase projects, uploaded English B2 certificate link, and Scrum SFPC verification link.

## Product Principles

1. **Technical framework review first**: make QA automation architectures, tools, and engineering depth easy to scan and evaluate.
2. **Honest evidence and transparency**: distinguish verified credentials and live links clearly from pending uploads or repository links in progress.
3. **LATAM Spanish clarity with bilingual parity**: optimize Spanish copy for regional recruiters while keeping English translations accurate and complete.
4. **Authentic human signal**: retain personal interests and the Michi QA motif as a genuine differentiator alongside serious engineering rigor.

## Accessibility & Inclusion

Maintain clear legibility and contrast across both dark and light themes, keep `<html lang>` synchronized with the active language toggle (`es` / `en`), and preserve keyboard/screen-reader friendly navigation across all sections.

