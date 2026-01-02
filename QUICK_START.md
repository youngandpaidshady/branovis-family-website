# Quick Start - Git Deployment

## Step 1: Install Git (One-Time Setup)

1. **Download Git**: https://git-scm.com/download/win
2. **Install**: Run the installer with default settings
3. **Restart**: Close and reopen your terminal/VS Code

## Step 2: Run Automated Setup

Once Git is installed, simply run:

```powershell
.\setup-git.ps1
```

This script will:
- ✓ Check Git installation
- ✓ Initialize repository
- ✓ Configure Git (if needed)
- ✓ Stage all files
- ✓ Create initial commit
- ✓ Help you connect to GitHub

## Step 3: Create GitHub Repository

1. Go to https://github.com (sign in or create account)
2. Click **"+"** → **"New repository"**
3. Name: `branovis-family-website`
4. **DO NOT** check any boxes (no README, .gitignore, or license)
5. Click **"Create repository"**

## Step 4: Connect to GitHub

When you run the script, it will ask for your GitHub repository URL.
Paste the URL from Step 3 (e.g., `https://github.com/YOUR_USERNAME/branovis-family-website.git`)

**Authentication:**
- You'll need a **Personal Access Token** (not your password)
- Get one: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate with `repo` permissions
- Use it as your password when pushing

## Step 5: Deploy to Netlify

1. Go to https://app.netlify.com
2. **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"** and authorize
4. Select your repository
5. Netlify auto-detects:
   - Build: `npm run build`
   - Publish: `.next`
6. Click **"Deploy site"**

Done! 🎉

---

## Manual Commands (If Script Doesn't Work)

```powershell
# Initialize
git init

# Configure (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Stage and commit
git add .
git commit -m "Initial commit: Branovis Family website"

# Connect to GitHub (replace URL)
git remote add origin https://github.com/YOUR_USERNAME/branovis-family-website.git
git branch -M main
git push -u origin main
```

