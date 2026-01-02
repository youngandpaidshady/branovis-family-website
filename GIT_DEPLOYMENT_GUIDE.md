# Git Deployment Guide for Netlify

## Step 1: Install Git

1. Download Git for Windows from: https://git-scm.com/download/win
2. Run the installer with default settings
3. After installation, restart your terminal/VS Code

## Step 2: Verify Git Installation

Open a new terminal and run:
```bash
git --version
```

## Step 3: Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 4: Initialize Git Repository

```bash
cd C:\Users\novak\Desktop\famtree
git init
```

## Step 5: Create .gitignore File

Make sure you have a `.gitignore` file that excludes:
- `node_modules/`
- `.next/`
- `.env.local`
- `.netlify/`

## Step 6: Stage All Files

```bash
git add .
```

## Step 7: Create Initial Commit

```bash
git commit -m "Initial commit: Branovis Family website"
```

## Step 8: Create GitHub Repository

1. Go to https://github.com and sign in (or create account)
2. Click the "+" icon → "New repository"
3. Name it: `branovis-family-website` (or any name you prefer)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 9: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/branovis-family-website.git
git branch -M main
git push -u origin main
```

**Note:** You'll need to authenticate. Options:
- **Option A (Recommended):** Use GitHub Personal Access Token
  - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token with `repo` permissions
  - Use token as password when pushing

- **Option B:** Use GitHub Desktop (easier GUI option)

## Step 10: Deploy to Netlify

1. Go to https://app.netlify.com and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your `branovis-family-website` repository
5. Netlify will auto-detect Next.js settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Step 11: Configure Environment Variables (if needed)

If you have any environment variables, add them in:
Netlify Dashboard → Site settings → Environment variables

## Step 12: Custom Domain (Optional)

1. In Netlify Dashboard → Domain settings
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Quick Commands Reference

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

---

## Troubleshooting

### If Git push asks for credentials:
- Use Personal Access Token instead of password
- Or set up SSH keys for easier authentication

### If build fails on Netlify:
- Check build logs in Netlify dashboard
- Ensure `netlify.toml` is configured correctly
- Verify Node version matches `.nvmrc` file

