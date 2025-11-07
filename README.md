# 🌟 Neon Portfolio - Sci-Fi Themed Portfolio Website

A stunning, futuristic portfolio website built with React, featuring neon lighting effects, sci-fi aesthetics, and smooth animations.

## ✨ Features

- **Neon Lighting Theme**: Eye-catching cyan, purple, and pink neon effects throughout
- **Sci-Fi Design**: Futuristic UI with animated particles, orbiting circles, and glitch effects
- **Fully Responsive**: Optimized for all screen sizes
- **Modern Tech Stack**: Built with React 19, Vite, and React Router
- **Smooth Animations**: Fade-in, slide-in, pulse, and custom animations
- **Interactive Components**: Hover effects, animated backgrounds, and particle systems

## 📑 Pages

### 🏠 Home
- Hero section with glitch text effect
- Experience stats with neon cards
- Tech stack showcase with icons
- Areas of interest section
- Resume download button
- Animated orbiting circles visualization

### 💼 Experience
- Timeline layout with neon effects
- Detailed work experience (2+ years)
- Technologies used with color-coded badges
- Key responsibilities for each role
- Experience summary section

### 👨‍💻 About
- Personal introduction with animated profile
- Educational background with achievements
- Technical skills categorized by domain
- Certifications and awards
- Professional highlights

### 🚀 Projects
- Featured projects with large cards
- Project screenshots with hover overlays
- Technology badges for each project
- GitHub and live demo links
- Neon border animations

### 📧 Contact
- Interactive contact form (Name, Email, Message)
- Real-time form validation
- Success/error status messages
- Contact information cards
- Social media links
- Response time indicators

## 🎨 Design Features

- **Color Scheme**: 
  - Dark backgrounds (#0a0a0f, #050508)
  - Neon colors (Cyan, Purple, Pink, Green)
  - Sci-fi fonts (Orbitron, Rajdhani)

- **Animations**:
  - Particle background with connected dots
  - Grid background with perspective effect
  - Neon glow and flicker effects
  - Glitch text animations
  - Pulse and fade transitions

- **Components**:
  - Navbar with active route highlighting
  - Footer with social links
  - Reusable neon cards
  - Custom buttons with hover effects
  - Animated particle background

## 🛠️ Technologies Used

- **Frontend**: React 19.1.1, React Router DOM 7.9.5
- **Build Tool**: Vite 7.1.7
- **Package Manager**: Bun
- **Icons**: React Icons 5.5.0
- **Styling**: CSS3 with custom animations
- **Fonts**: Google Fonts (Orbitron, Rajdhani)

## 🚀 Getting Started

### Prerequisites
- Node.js or Bun installed
- Git (optional)

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
bun install
# or
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
bun run dev
# or
npm run dev
\`\`\`

4. Open your browser and navigate to:
\`\`\`
http://localhost:5173
\`\`\`

### Building for Production

\`\`\`bash
bun run build
# or
npm run build
\`\`\`

The build files will be in the `dist` folder.

### Preview Production Build

\`\`\`bash
bun run preview
# or
npm run preview
\`\`\`

## 📂 Project Structure

\`\`\`
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ParticleBackground.jsx
│   │   └── ParticleBackground.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## 🎯 Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`):
   - Update name, title, and experience stats
   - Modify skills and interests arrays
   - Add your resume link

2. **Experience Page** (`src/pages/Experience.jsx`):
   - Update work experiences array with your actual positions
   - Modify responsibilities and technologies

3. **About Page** (`src/pages/About.jsx`):
   - Update education details
   - Add your certifications
   - Modify skills categories

4. **Projects Page** (`src/pages/Projects.jsx`):
   - Replace placeholder images with actual screenshots
   - Update project details, links, and technologies

5. **Contact Page** (`src/pages/Contact.jsx`):
   - Update contact information
   - Configure form submission endpoint
   - Update social media links

### Change Color Theme

Edit `src/index.css` and modify the CSS variables:

\`\`\`css
:root {
  --neon-cyan: #00ffff;
  --neon-pink: #ff00ff;
  --neon-purple: #9d00ff;
  /* Add more colors */
}
\`\`\`

## 🌐 Deployment

### Vercel
\`\`\`bash
bun run build
# Deploy the dist folder to Vercel
\`\`\`

### Netlify
\`\`\`bash
bun run build
# Deploy the dist folder to Netlify
\`\`\`

### GitHub Pages
1. Update `vite.config.js` with base path
2. Build and deploy to gh-pages branch

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Harshit Singh**
- Full Stack Developer
- 2+ years of experience in Angular, Java, Spring Boot, Jenkins, Azure, AI/LLM, Docker

## 🙏 Acknowledgments

- Design inspired by cyberpunk and sci-fi aesthetics
- Neon effects and animations created with pure CSS
- Icons from React Icons library
- Fonts from Google Fonts

---

⭐ Star this repo if you like it!

Made with ❤️ and React
