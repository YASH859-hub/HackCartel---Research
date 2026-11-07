# HackCartel Research

The applied AI research and fellowship initiative of HackCartel. This site introduces the research directions, programme structure, and principles behind the HackCartel Applied AI Research Fellowship.

## What’s here

- **Home** — an overview of the initiative and its approach to applied AI research.
- **Research** — five proposed directions, with research questions, prototype ideas, evaluation metrics, and expected learning.
- **Fellowship** — the curriculum, timeline, expected outputs, selection process, and FAQs.
- **About** — the initiative’s background and research principles.

The fellowship is planned as a 16-week core programme with an optional four-week extension for a cohort of approximately 20–25 students. Cohort details are still to be announced.

## Research directions

- Reliable AI Agents
- Grounded Knowledge Systems
- Efficient AI
- AI Security and Evaluation
- AI for Indian Workflows

## Tech stack

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- Lucide React and Motion

## Run locally

**Prerequisites:** Node.js 20.19+ (or 22.12+) and npm.

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

   Open the local URL printed by Vite (by default, `http://localhost:3000`).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run the TypeScript compiler without emitting files. |
| `npx tsx --test src/data/content.test.ts` | Run the content requirements tests. |

When deploying, configure the hosting provider to serve `index.html` for the application routes so direct navigation and refreshes work.
