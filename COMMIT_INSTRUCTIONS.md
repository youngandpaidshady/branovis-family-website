# Git Commit Instructions

To commit this project to Git, follow these steps:

## 1. Install Git (if not already installed)
Download and install Git from: https://git-scm.com/download/win

## 2. Initialize Git Repository
```bash
cd famtree
git init
```

## 3. Create and Switch to Branch
```bash
git checkout -b branovis-family-website
```

## 4. Add All Files
```bash
git add .
```

## 5. Create Initial Commit
```bash
git commit -m "Initial commit: Modern Next.js 14 family website with TypeScript, Tailwind CSS, and Framer Motion

- Complete Next.js 14 setup with App Router
- Modern design system with glassmorphism effects
- Responsive navigation with mobile hamburger menu
- Hero section with animations
- Interactive family tree with pan/zoom functionality
- Image gallery with lightbox
- Blog, Recipes, About, and Contact sections
- SEO optimization with metadata, sitemap, and robots.txt
- Mobile-first responsive design
- Error boundaries and 404 page"
```

## 6. (Optional) Add Remote Repository
If you have a remote repository:
```bash
git remote add origin <your-repository-url>
git push -u origin branovis-family-website
```

## Quick One-Liner Commands
```bash
cd famtree
git init
git checkout -b branovis-family-website
git add .
git commit -m "Initial commit: Modern Next.js 14 family website"
```

