# React User List

A modern, responsive web application built with React and Vite that displays a grid of professional user profiles. Each card presents key information about a user, including their availability, role, skills, and pricing.

## 🚀 Features

- **Responsive Grid Layout**: Adapts seamlessly to different screen sizes.
- **Detailed User Cards**: Displays comprehensive user information:
  - Profile Image
  - Name, Role, and Company
  - Availability Status (with visual indicator)
  - Hourly Rate
  - Skill Tags
  - Short Bio/Description
- **Modern UI**: Styled with Tailwind CSS for a clean and professional look.
- **Interactive Elements**: "View Profile" button on each card.

## 🛠️ Tech Stack

- **[React](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for fast development and building.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **ESLint**: For code linting and maintaining code quality.

## 📂 Project Structure

```
React User-List/
├── src/
│   ├── components/
│   │   └── Card.jsx       # Component for displaying individual user profile
│   ├── data/
│   │   └── users.js       # Mock data for users
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles (Tailwind imports)
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd "React User-List"
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally previews the production build.

## 🔮 Future Improvements

- **API Integration**: Connect to a live API to fetch dynamic user data (currently using mock data).
- **Search and Filter**: Add functionality to filter users by role, skills, or availability.
- **Dark Mode**: Implement a dark theme toggle.
