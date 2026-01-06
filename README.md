# Branislav Family Website

A modern, responsive family website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This website showcases family stories, photos, recipes, and an interactive family tree.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Mobile-First Design**: Fully responsive with touch-optimized interactions
- **Smooth Animations**: Framer Motion for beautiful transitions and interactions
- **Interactive Family Tree**: Pan and zoom functionality for mobile devices
- **Image Gallery**: Embla Carousel with lightbox functionality
- **SEO Optimized**: Complete metadata, sitemap, robots.txt, and structured data
- **Glassmorphism UI**: Modern design with glass effects and gradients
- **Performance**: Optimized images with Next.js Image component

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Carousel**: Embla Carousel React
- **Fonts**: Inter (sans-serif), Cormorant Garamond (serif)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
famtree/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and design system
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt generation
├── components/
│   ├── Navbar.tsx          # Navigation with glassmorphism
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section with stats
│   ├── Blog.tsx            # Blog posts grid
│   ├── Gallery.tsx         # Image gallery with lightbox
│   ├── Recipes.tsx         # Family recipes
│   ├── FamilyTree.tsx      # Interactive family tree
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   └── ScrollToTop.tsx     # Scroll to top button
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Design System

The design system uses CSS variables for theming:

- **Primary Colors**: Vibrant cyan/teal (`--primary`)
- **Secondary Colors**: Soft mint/green (`--secondary`)
- **Accent Colors**: Warm coral/red (`--accent`)
- **Gradients**: Multiple gradient utilities
- **Glassmorphism**: Backdrop blur effects
- **Shadows**: Layered shadow system

## 📱 Mobile Features

- **Touch-Optimized**: All interactive elements meet 44px minimum touch target
- **Pan & Zoom**: Family tree supports pinch-to-zoom and drag-to-pan on mobile
- **Responsive Navigation**: Hamburger menu with smooth slide-in animation
- **Swipe Gestures**: Gallery supports swipe navigation on mobile

## 🔍 SEO Features

- Semantic HTML structure
- Dynamic metadata with OpenGraph and Twitter cards
- JSON-LD structured data for Organization
- Sitemap generation
- Robots.txt configuration
- Optimized images with proper alt text

## 🎯 Key Components

### Navbar
- Sticky navigation with glassmorphism effect
- Shrinks on scroll
- Mobile hamburger menu with slide-in animation
- Active section highlighting

### Hero
- Full-screen hero with background image
- Animated headline and CTA buttons
- Gradient text effects
- Scroll indicator

### Family Tree
- Recursive tree rendering
- Pan and zoom functionality
- Touch-friendly controls
- Responsive layout

### Gallery
- Filterable image grid
- Lightbox with navigation
- Embla Carousel integration
- Mobile swipe support

## 🚀 Deployment

This project can be deployed on:

- **Vercel** (recommended): Connect your GitHub repository
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Any Node.js hosting**: Run `npm run build` and `npm start`

## 📝 Customization

1. **Update Family Data**: Edit `components/FamilyTree.tsx`
2. **Change Colors**: Modify CSS variables in `app/globals.css`
3. **Update Content**: Edit individual component files
4. **Add Images**: Replace Unsplash URLs with your own images
5. **Update Metadata**: Edit `app/layout.tsx` for SEO

## 📄 License

This project is private and for personal/family use.

## 🙏 Credits

- Images: Unsplash (placeholder images - replace with your own)
- Fonts: Google Fonts (Inter, Cormorant Garamond)
- Icons: Lucide React

---

Built with ❤️ for the Branislav Family
