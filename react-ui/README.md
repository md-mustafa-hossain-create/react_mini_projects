# React UI Project - Card Gallery

A modern, responsive React UI project showcasing a beautiful card gallery with smooth animations and 3D effects. Built as a practice project to demonstrate intermediate-level frontend development skills.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff)

## ✨ Features

- **Modern Component Architecture** - Clean, reusable React components with proper separation of concerns
- **Responsive Design** - Fully responsive layout that works on all screen sizes

- **Horizontal Scrolling** - Custom scrollable card container with hidden scrollbar
- **Dynamic Styling** - Props-based color theming for cards
- **Smooth Animations** - CSS transitions and transforms for premium UI feel
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide Icons** - Beautiful, customizable icons

## 🚀 Tech Stack

- **React 19.2.0** - Modern React with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
src/
├── components/
│   └── section1/
│       ├── Navbar.jsx
│       ├── Section1.jsx
│       ├── Page1Content.jsx
│       ├── leftContent/
│       │   ├── LeftContent.jsx
│       │   ├── HeroText.jsx
│       │   └── Arrow.jsx
│       └── rightContent/
│           ├── RightContent.jsx
│           ├── RightCard.jsx
│           └── cardData.js
├── App.jsx
└── main.jsx
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd react-ui-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm preview
   ```

## 🎨 Key Components

### RightCard

Interactive card component with:

- Dynamic background colors via props
- Hover effects with scale and translate animations
- Gradient overlays
- Smooth transitions (500ms)
- Image centering with `object-cover`

### RightContent

Horizontal scrolling container featuring:

- Hidden scrollbar (cross-browser compatible)
- Flex layout with gap spacing
- Responsive width management
- Dynamic card rendering from data

### cardData.js

Centralized data management with:

- User information
- Image URLs
- Serial numbers
- Tag labels
- Custom colors

## 💡 Skills Demonstrated

- ✅ Component-based architecture
- ✅ Props passing and destructuring
- ✅ Default prop values with fallbacks
- ✅ Array mapping with unique keys
- ✅ Conditional rendering
- ✅ Modern CSS techniques (Flexbox, Grid)
- ✅ Tailwind utility classes
- ✅ Custom CSS with arbitrary values
- ✅ Smooth animations and transitions
- ✅ Responsive design patterns
- ✅ Clean code organization

## 🎯 Learning Outcomes

This project demonstrates:

- **Intermediate React skills** - Component composition, props management
- **Modern CSS mastery** - Tailwind CSS, animations, 3D effects
- **UI/UX principles** - Hover states, visual hierarchy, smooth interactions
- **Code organization** - Logical folder structure, separation of concerns
- **Best practices** - Clean code, reusable components, maintainable structure

## 📝 Future Enhancements

Potential additions to reach advanced level:

- [ ] State management (useState, useEffect)
- [ ] User interactions (click handlers, modals)
- [ ] API integration
- [ ] Search and filter functionality
- [ ] Dark/light theme toggle
- [ ] TypeScript migration
- [ ] Unit testing
- [ ] Framer Motion animations

## 📄 License

This project is open source and available for learning purposes.

## 👨‍💻 Author

Built as a UI practice project to demonstrate frontend development skills.

---

**Note:** This is a UI-focused project created for learning and portfolio purposes. It showcases component design, layout skills, and modern CSS techniques.
