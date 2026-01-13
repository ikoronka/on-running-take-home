# On running Shoe Finder

live demo available at <a href="https://on.ikoronka.com/" target="_blank">on.ikoronka.com</a>

A responsive, interactive React application that provides a "shoe finder" quiz focused on On Running shoes.

---
# Getting Started
To run this project locally:
1. Clone the repository
```sh
  git clone git@github.com:ikoronka/on-running-take-home.git
```
2. Install dependencies
```sh
  pnpm install
```
3. Run the development server
 ```sh
  pnpm dev
```

# Project Overview
**Key Features**
- *Quiz flow* - smooth transitions, animations and state retention.
- *Scoring Logic* - calculates matches based on attributed weighting through the provided `data.json`, accounting for draws.
- *Responsive Design* - mobile-first using scss modules and flexbox.

## Tech Stack
- *Core:* - React (Hooks, Context API), TypeScript, Vite
- *Styling:* - SCSS Modules, CSS Variables, BEM naming convention
- *Routing:* - React Router DOM
- *State Management* - Custom Hooks (`useShoeFinder`), React Context
- *Package Manager* pnpm (Fast, disk space efficient)
- *Deployment:* - Netlify (CI/CD)

## Architecture
- **Separation of concerns**
    - The logic is decoupled from the UI. The `useShoeFinder` hook optimally calculates scores, sorting, filtering and picking subsequent winners while components focus only on presentation.
- **Scalable component library**
    - UI elements are built as reusable components following the atomic design pattern (Button, ShoeCard, Loader, ColorPicker) with typed props ensuring type safety.
 
## Project Management & Planning
- [**Issue board**](https://github.com/users/ikoronka/projects/2)
    - Simple board where I typed all the main issues and their description in the beggining to better map out workflow and priorities
- [**PRs**](https://github.com/ikoronka/on-running-take-home/pulls?q=is%3Apr+is%3Aclosed)
    - Each issue was worked on its own feature branch and to merge it back to main a PR had to be opened
- **Code Review**
    - To ensure code quality in a solo environment, I used Github Copilot to simulate peer review. I critically evaluated its feedback for refactoring opportunities before merging.
