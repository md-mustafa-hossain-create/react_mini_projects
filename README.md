# React User-List

A small, responsive React UI that displays a list of user cards (profiles) using local data. Built with Vite, React and TailwindCSS. The app demonstrates simple component structure, static data handling, and responsive layout using modern tooling.

## Features

- Responsive grid of user cards
- Card displays: avatar, name, role, company, hourly price, availability badge, skills, and short bio
- Uses a simple local data store (src/data/users.js) but includes commented code to switch to a remote API
- TailwindCSS for styling and utility-first development
- Minimal Vite + React setup for fast development

## Tech stack

- React
- Vite
- TailwindCSS
- PostCSS
- ESLint (basic configuration)

## Quick start

Requirements: Node.js (recommended 18+) and npm

1. Clone the repository

   git clone https://github.com/md-mustafa-hossain-create/react_side_projects.git
   cd "React User-List"

2. Install dependencies

   npm install

3. Run the dev server

   npm run dev

4. Open http://localhost:5173 (or the port Vite reports) in your browser

## Scripts

- npm run dev — start Vite dev server
- npm run build — build for production
- npm run preview — serve built production files
- npm run lint — run ESLint

## Project structure

- src/
  - main.jsx — app entry
  - index.css — Tailwind import
  - App.jsx — root component that maps user data to cards
  - components/
    - Card.jsx — user profile card component
  - data/
    - users.js — local user dataset used by App
- index.html — Vite HTML entry
- postcss.config.js — PostCSS + Tailwind config
- vite.config.js — Vite configuration

## Data & switching to remote API

By default the project imports local user data from `src/data/users.js` and renders it in `App.jsx`.

If you'd rather fetch remote data, `App.jsx` contains commented example code that demonstrates how to fetch data using `fetch`, including an `AbortController` for cleanup and basic error handling. To use it:

1. Uncomment the `useState` and `useEffect` imports and the fetch code in `App.jsx`.
2. Update the fetch URL to your API endpoint and adapt the response parsing as needed.

## Styling

The project uses TailwindCSS. The `src/index.css` file imports Tailwind. PostCSS is configured in `postcss.config.js` to enable the Tailwind PostCSS plugin and autoprefixer.

If you change Tailwind configuration (e.g. add custom colors or breakpoints), add a `tailwind.config.js` to the project root.

## Accessibility & Semantics

- The card component uses semantic HTML elements and meaningful alt text for images (e.g. `alt={\`Profile photo of ${user.name}\`}`).
- Consider improving accessibility by:
  - Adding keyboard focus states to interactive elements
  - Using ARIA attributes for dynamic content

## Customization

- To add or update users, edit `src/data/users.js`.
- Images for avatars come from `randomuser.me` URLs in the dataset — replace them with your own image URLs if required.
- The availability badge is controlled by the `available` boolean on each user object.

## Contributing

Contributions, bug reports and feature requests are welcome. Please open an issue or submit a pull request against the `React User-List` folder in this repository.

## License

This project does not include a LICENSE file. If you want to add one, consider the MIT license or another permissive license.

## Author

md-mustafa-hossain-create — based on the code in the `React User-List` folder.

---

Notes for maintainers:
- ESLint configuration lives in `eslint.config.js`. It currently enforces a small rule set and ignores unused variables that follow an uppercase/underscore pattern.
- package.json contains modern dev dependencies (Vite, Tailwind v4 postcss plugin) — check compatibility when upgrading Tailwind/PostCSS in the future.