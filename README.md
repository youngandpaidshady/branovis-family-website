# Luxury Family Website

A private, high-end family website built with Next.js 14+, TypeScript, Tailwind CSS, and Supabase. Designed for affluent families to preserve their legacy, share family history, and maintain a private digital chronicle.

## Features

- **Luxury Design System**: Elegant, timeless aesthetics with ivory, charcoal, and gold accents
- **Interactive Family Tree**: Built with React Flow for visualizing family relationships
- **Role-Based Access Control**: Admin, Family Member, and Guest roles with Supabase RLS
- **SEO Optimized**: 2025 best practices with JSON-LD structured data, metadata API, sitemap, and robots.txt
- **Private Content Management**: News/journal system for family announcements and updates
- **Gallery**: High-resolution photo gallery with lightbox and filtering
- **Family Business**: Showcase family enterprises and ventures
- **Member Profiles**: Individual profile pages with biographies and relationships
- **Authentication**: Secure Supabase authentication with private access requests

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom luxury theme
- **Animations**: Framer Motion
- **Family Tree**: React Flow
- **Backend**: Supabase (Auth, Database, Storage, RLS)
- **SEO**: Next.js Metadata API + JSON-LD structured data

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd famtree
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Legacy Family
```

4. Set up Supabase database:
   - Create a new Supabase project
   - Run the SQL schema from `supabase/schema.sql` in your Supabase SQL editor
   - This will create all necessary tables, RLS policies, and functions

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── family/            # Family/Legacy page
│   ├── tree/              # Family tree page
│   ├── members/           # Member profile pages
│   ├── business/          # Business page
│   ├── gallery/           # Gallery page
│   ├── news/              # News/journal (private)
│   ├── contact/           # Contact/access request
│   ├── login/             # Authentication
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts           # SEO robots.txt
├── components/            # React components
│   ├── layout/           # Navigation, Footer
│   ├── home/             # Homepage components
│   ├── family/           # Family page components
│   ├── tree/             # Family tree components
│   ├── members/         # Member profile components
│   ├── business/         # Business components
│   ├── gallery/          # Gallery components
│   ├── news/             # News components
│   ├── contact/          # Contact components
│   └── providers/        # Context providers
├── lib/                  # Utilities and helpers
│   ├── supabase/         # Supabase client setup
│   └── seo.ts            # SEO utilities
├── supabase/            # Supabase configuration
│   └── schema.sql       # Database schema and RLS
└── public/              # Static assets
```
## Database Schema

The Supabase schema includes:

- **users**: Extended user profiles with roles
- **family_members**: Family member profiles with bios and portraits
- **relationships**: Family tree relationships (parent, child, spouse, sibling)
- **content**: News/journal articles
- **businesses**: Family business information
- **gallery_images**: Gallery photos with metadata

All tables have Row Level Security (RLS) policies enforcing role-based access.

## Authentication & Roles

- **Admin**: Full access to all content and admin panel
- **Family Member**: Access to private content (news, private members, etc.)
- **Guest**: Public content only

Users can request private access through the contact page. Admins can approve requests and assign roles.

## SEO Features

- Next.js Metadata API for all pages
- JSON-LD structured data (Organization, Person, Article, Breadcrumbs)
- Semantic HTML5
- Optimized sitemap and robots.txt
- Core Web Vitals optimization
- Private routes blocked from search engines

## Customization

### Colors
Edit `tailwind.config.ts` to customize the luxury color palette.

### Content
- Update family information in Supabase database
- Modify sample content in components
- Customize copywriting throughout the site

### Styling
The luxury design system uses:
- Ivory backgrounds (#fefdfb)
- Charcoal text (#262626)
- Gold accents (#f0b90f)
- Large spacing and calm rhythm
- Soft shadows and thin borders

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## Security

- All private routes are protected by middleware
- Supabase RLS policies enforce data access
- Environment variables are protected
- Private content is excluded from search engines
- Secure authentication with Supabase Auth

## License

Private use only. All rights reserved.

## Support

For questions or issues, please contact the development team.

