# Connect Local Repository to GitHub
# Run this AFTER creating a repository on GitHub

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Connect to GitHub Repository" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Create a GitHub repository" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com (sign in or create account)" -ForegroundColor White
Write-Host "2. Click '+' → 'New repository'" -ForegroundColor White
Write-Host "3. Name: branovis-family-website (or any name)" -ForegroundColor White
Write-Host "4. DO NOT check any boxes (no README, .gitignore, license)" -ForegroundColor White
Write-Host "5. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$repoUrl = Read-Host "Step 2: Paste your GitHub repository URL (e.g., https://github.com/USERNAME/branovis-family-website.git)"

if ($repoUrl) {
    Write-Host ""
    Write-Host "Connecting to GitHub..." -ForegroundColor Yellow
    
    # Remove existing remote if any
    git remote remove origin 2>$null
    
    # Add new remote
    git remote add origin $repoUrl
    git branch -M main
    
    Write-Host "✓ Repository connected!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Yellow
    Write-Host "Note: You'll need to authenticate." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Authentication Options:" -ForegroundColor Cyan
    Write-Host "1. Personal Access Token (Recommended)" -ForegroundColor White
    Write-Host "   - Get one: GitHub → Settings → Developer settings → Personal access tokens" -ForegroundColor White
    Write-Host "   - Generate with 'repo' permissions" -ForegroundColor White
    Write-Host "   - Use token as password when prompted" -ForegroundColor White
    Write-Host ""
    Write-Host "2. GitHub Desktop (Easier GUI option)" -ForegroundColor White
    Write-Host ""
    
    $push = Read-Host "Push to GitHub now? (y/n)"
    if ($push -eq "y") {
        git push -u origin main
        Write-Host ""
        Write-Host "✓ Code pushed to GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next: Deploy to Netlify" -ForegroundColor Cyan
        Write-Host "1. Go to https://app.netlify.com" -ForegroundColor White
        Write-Host "2. 'Add new site' → 'Import an existing project'" -ForegroundColor White
        Write-Host "3. Choose 'GitHub' and select your repository" -ForegroundColor White
        Write-Host "4. Click 'Deploy site'" -ForegroundColor White
    } else {
        Write-Host ""
        Write-Host "To push later, run:" -ForegroundColor Yellow
        Write-Host "  git push -u origin main" -ForegroundColor White
    }
} else {
    Write-Host "No URL provided. Exiting." -ForegroundColor Red
}

Write-Host ""

