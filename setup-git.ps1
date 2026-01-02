# Automated Git Setup Script for Branovis Family Website
# Run this script AFTER installing Git from https://git-scm.com/download/win

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Git Setup for Branovis Family Website" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git first:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://git-scm.com/download/win" -ForegroundColor White
    Write-Host "2. Run the installer with default settings" -ForegroundColor White
    Write-Host "3. Restart your terminal and run this script again" -ForegroundColor White
    exit 1
}

Write-Host ""

# Check if already a git repository
if (Test-Path .git) {
    Write-Host "Git repository already initialized." -ForegroundColor Yellow
    $continue = Read-Host "Do you want to continue? (y/n)"
    if ($continue -ne "y") {
        exit 0
    }
} else {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✓ Repository initialized" -ForegroundColor Green
}

Write-Host ""

# Check Git config
Write-Host "Checking Git configuration..." -ForegroundColor Yellow
$userName = git config --global user.name
$userEmail = git config --global user.email

if (-not $userName -or -not $userEmail) {
    Write-Host "Git user configuration not set." -ForegroundColor Yellow
    Write-Host "Please enter your Git credentials:" -ForegroundColor Yellow
    $name = Read-Host "Your Name"
    $email = Read-Host "Your Email"
    
    git config --global user.name "$name"
    git config --global user.email "$email"
    Write-Host "✓ Git configured" -ForegroundColor Green
} else {
    Write-Host "✓ Git configured: $userName <$userEmail>" -ForegroundColor Green
}

Write-Host ""

# Stage all files
Write-Host "Staging all files..." -ForegroundColor Yellow
git add .
Write-Host "✓ Files staged" -ForegroundColor Green

Write-Host ""

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "Creating initial commit..." -ForegroundColor Yellow
    git commit -m "Initial commit: Branovis Family website"
    Write-Host "✓ Initial commit created" -ForegroundColor Green
} else {
    Write-Host "No changes to commit." -ForegroundColor Yellow
}

Write-Host ""

# Check if remote exists
$remote = git remote get-url origin 2>$null
if ($remote) {
    Write-Host "Remote repository already configured: $remote" -ForegroundColor Yellow
} else {
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to https://github.com and create a new repository" -ForegroundColor White
    Write-Host "2. Name it: branovis-family-website (or any name you prefer)" -ForegroundColor White
    Write-Host "3. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
    Write-Host "4. Copy the repository URL (e.g., https://github.com/USERNAME/branovis-family-website.git)" -ForegroundColor White
    Write-Host ""
    $repoUrl = Read-Host "Enter your GitHub repository URL (or press Enter to skip)"
    
    if ($repoUrl) {
        git remote add origin $repoUrl
        git branch -M main
        Write-Host ""
        Write-Host "Repository connected! Now pushing to GitHub..." -ForegroundColor Yellow
        Write-Host "Note: You may be asked for credentials." -ForegroundColor Yellow
        Write-Host "Use a Personal Access Token as password if prompted." -ForegroundColor Yellow
        Write-Host ""
        git push -u origin main
        Write-Host "✓ Code pushed to GitHub!" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next: Deploy to Netlify" -ForegroundColor Yellow
Write-Host "1. Go to https://app.netlify.com" -ForegroundColor White
Write-Host "2. Click 'Add new site' → 'Import an existing project'" -ForegroundColor White
Write-Host "3. Choose 'GitHub' and select your repository" -ForegroundColor White
Write-Host "4. Netlify will auto-detect Next.js settings" -ForegroundColor White
Write-Host "5. Click 'Deploy site'" -ForegroundColor White
Write-Host ""

