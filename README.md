# VIKAS VERMA | Personal Portfolio Website

A sleek, ultra-modern, and high-performance developer portfolio built from scratch to showcase technical expertise, projects, and achievements. This portfolio features a highly streamlined minimalist design, responsive glassmorphic layouts, global state dark/light mode triggers, and polished interface interactions.

---

## ✨ Features

*   **Linear Skills Tracker:** A clean 2-column expertise matrix swapping heavy circular charts for sleek, high-visibility linear indicator tracking bars.
*   **Dynamic Theme Toggle:** Full-system light and dark mode synchronization using custom state variables (`isDarkMode`) coupled with Tailwind CSS dark variants.
*   **Custom Glassmorphic Navigation:** A sticky backdrop-filter header with a persistent, custom-bordered navigation baseline rule (`border-b-2`).
*   **Animated Branding Canvas:** An organic, responsive vertical typography sidebar watermark (`Vikas-Verma-Portfolio`) leveraging smart blend modes (`mix-blend-difference`) and ambient breathing pulse animations.
*   **Responsive Multi-Device Layout:** Fully optimized mobile experience utilizing layout state toggles, interactive drawer toggles (`FaBars`/`FaTimes`), and cascading micro-stagger entry transitions.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend Library:** React.js (Functional Components, Hooks)
*   **Routing Architecture:** React Router DOM (`Link`, `useLocation`)
*   **Styling Engine:** Tailwind CSS v3 (JIT Engine, Custom Gradients, Backdrop Filters)
*   **Icon Library:** React Icons (`fa`, `si`, `gi` design packs)
*   **Bundler/Build Tool:** Vite (or Create React App)

---

## 🚀 Getting Started (Local Development)

Follow these steps to set up, configure, and execute this project locally on your machine.

### Prerequisites

Ensure you have the following software installed locally:
*   [Node.js](https://nodejs.org/) (v16.x or higher recommended)
*   [npm](https://www.npmjs.com/) (installed automatically alongside Node) or [Yarn](https://yarnpkg.com/)

---

📂 Project Directory Structure

├── public/                 # Static assets (images, icons, favicons)
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation Bar with Watermark Sidebar & Dark Toggle
│   │   └── Skills.jsx      # 2-Column Minimalist Linear Progress Bar Grid
│   ├── pages/              # Routed entry view pages (Home, About, etc.)
│   ├── App.jsx             # Top-Level Root Application Wrapper & Layout Setup
│   ├── index.css           # Tailwind Directives Imports Configuration
│   └── main.jsx            # React Document Object Model Engine Bootstrap
├── package.json            # Scripts, Manifest Data, and Version Dependencies
└── tailwind.config.js      # Utility Classes & Extended Custom Themes File

### Installation Steps

#### 1. Clone the Repository
Open your terminal or command prompt, navigate to your desired directory, and clone this repository using Git:
```bash
git clone [https://github.com/Vikas84214/my-portfolio.git](https://github.com/Vikas84214/my-portfolio.git)

2. Navigate into the Project Root

cd my-portfolio

3. Install Package Dependencies

Bash
# Using npm
npm install

# Or if you prefer Yarn
yarn install

Building for Production

# Using npm
npm run build

# Or using Yarn
yarn build