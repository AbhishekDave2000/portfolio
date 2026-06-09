# Abhishek Dave — Personal Portfolio

A personal portfolio website built with React.js and Tailwind CSS, featuring a dynamic color theme switcher, smooth scroll navigation, and a contact form that saves submissions to Google Sheets.

🌐 **Live:** [abhishek-dave-portfolio.vercel.app](https://abhishek-dave-portfolio.vercel.app)

---

## Tech Stack

- **React.js** — UI and component architecture
- **Tailwind CSS v4** — utility-first styling
- **Vite** — build tool and dev server
- **React Icons** — icon library
- **Vercel** — deployment and hosting

---

## Features

- Dynamic **color theme switcher** (Amber, Emerald, Red, Cyan, Purple) — changes the entire site accent color in one click
- Smooth **scroll navigation** with active section highlighting
- **Contact form** that saves submissions directly to Google Sheets via Apps Script
- **Scroll to top** button that appears on scroll
- Animated section headings with gradient underlines
- Responsive stat cards in the About section
- Timeline-style Experience section
- Skills grouped by category with pill badges
- Education cards with GPA
- Social links — LinkedIn, GitHub, Instagram, Resume

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ThemeSwitcher.jsx
│   ├── ScrollToTop.jsx
│   ├── SectionHeading.jsx
│   ├── StateCard.jsx
│   ├── ExperienceCard.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsRow.jsx
│   ├── SkillsTag.jsx
│   ├── EducationCard.jsx
|   ├── ContactInfo.jsx
│   └── ContactForm.jsx
├── context/
│   └── ThemeContext.jsx
├── pages/
│   └── HomePage.jsx
├── data/
│   ├── experience.js
|   ├── education.js
|   └── skills.js
├── App.jsx
└── main.jsx
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/AbhishekDave2000/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Theme System

The site uses a React Context-based theme system. The active color is stored globally and exposed via a custom hook:

```jsx
import { useColor } from './context/ThemeContext';

const { c, color, setColor } = useColor();

// c(400) returns "amber-400", "emerald-400" etc. based on active theme
<p className={`text-${c(400)}`}>Hello</p>
```

All dynamic classes are safelisted in `index.css` using Tailwind v4's `@source inline()` syntax.

---

## Contact Form — Google Sheets Setup

1. Create a Google Sheet with headers: `Name | Email | Subject | Message | Date`
2. Go to **Extensions → Apps Script** and paste the script from `src/data/googleScript.js`
3. Deploy as a **Web App** — Execute as: Me, Access: Anyone
4. Copy the deployment URL into `ContactForm.jsx`

---

## Deployment

Deployed on Vercel. To redeploy manually:

```bash
npm run build
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deploys on every push.

---

## Author

**Abhishek Dave**
Full Stack Software Developer — Toronto, Canada

[LinkedIn](https://www.linkedin.com/in/abhishek-dave-15b3711a4/) · [GitHub](https://github.com/AbhishekDave2000) · [Portfolio](https://abhishek-dave-portfolio.vercel.app)
