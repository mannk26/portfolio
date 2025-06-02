@echo off
echo.
echo ========================================
echo   MRITYUNJAY PORTFOLIO DEPLOYMENT
echo ========================================
echo.

echo [1/4] Building portfolio...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)
echo ✅ Build successful!
echo.

echo [2/4] Checking if git repository exists...
if not exist ".git" (
    echo Initializing git repository...
    git init
    git branch -M main
)
echo ✅ Git repository ready!
echo.

echo [3/4] Committing changes...
git add .
git commit -m "Deploy portfolio - %date% %time%"
echo ✅ Changes committed!
echo.

echo [4/4] Choose deployment option:
echo.
echo 1. Push to GitHub (for Vercel/Netlify)
echo 2. Deploy to GitHub Pages
echo 3. Just build (manual deployment)
echo.
set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo.
    echo Pushing to GitHub...
    echo Make sure you have set up your remote repository:
    echo git remote add origin https://github.com/mannk26/portfolio.git
    echo.
    pause
    git push -u origin main
    echo.
    echo ✅ Pushed to GitHub!
    echo 🌐 Now go to Vercel.com or Netlify.com to deploy
) else if "%choice%"=="2" (
    echo.
    echo Installing gh-pages...
    npm install --save-dev gh-pages
    echo.
    echo Deploying to GitHub Pages...
    npm run deploy
    echo.
    echo ✅ Deployed to GitHub Pages!
    echo 🌐 Your site will be live at: https://mannk26.github.io/portfolio
) else if "%choice%"=="3" (
    echo.
    echo ✅ Build complete! 
    echo 📁 Files are in the 'dist' folder
    echo 🌐 Upload the 'dist' folder to your hosting provider
) else (
    echo Invalid choice!
)

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
pause
