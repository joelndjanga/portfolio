# Joël NDJANGA - Professional Portfolio

A modern, professional, and fully responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion.

## 🎯 Features

- **Modern Design**: Clean, minimalist, and professional corporate design
- **Fully Responsive**: Optimized for all devices (PC-first approach)
- **Smooth Animations**: Subtle animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Professional Sections**:
  - Hero section with CTA buttons
  - About Me
  - Education
  - Professional Experience (timeline layout)
  - Skills & Expertise (with progress bars)
  - Languages
  - Certifications
  - Interests & Hobbies
  - Contact form with validation
  - Professional footer

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📦 Deployment to GitHub Pages

### Option 1: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Create a new repository on GitHub (e.g., `portfolio`)

3. Initialize git in your project (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

4. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

5. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

6. Add these scripts to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

7. Update `vite.config.js` to include the base path:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your repo name
})
```

8. Deploy to GitHub Pages:
```bash
npm run deploy
```

9. Go to your repository settings on GitHub → Pages → Select `gh-pages` branch

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

### Option 2: Using GitHub Actions (Automated)

1. Create `.github/workflows/deploy.yml` in your project:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to GitHub, and the site will automatically deploy on every push to main branch

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 🎨 Color Palette

- Primary Blue: `#1e3a8a` to `#1e40af`
- White: `#ffffff`
- Gray shades: `#f9fafb` to `#111827`

## 📝 Customization

### Update Personal Information

Edit the content in each component file located in `src/components/`:
- `Hero.jsx` - Name, title, tagline
- `About.jsx` - Professional summary
- `Education.jsx` - Educational background
- `Experience.jsx` - Work experience
- `Skills.jsx` - Skills and competencies
- `Contact.jsx` - Contact information

### Update CV

Replace `public/cv.pdf` with your own CV file.

### Change Colors

Edit `tailwind.config.js` to customize the color palette.

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Joël NDJANGA**
- Email: ndjangaeldad@gmail.com
- Phone: +33 7 46 28 23 10
- LinkedIn: [linkedin.com/in/joël-ndjanga](https://linkedin.com/in/joël-ndjanga)

---

Built with ❤️ using React, Vite, TailwindCSS & Framer Motion
