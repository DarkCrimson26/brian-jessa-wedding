#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Deploying Wedding Website to GitHub Pages...\n');

try {
  // Step 1: Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');

  // Step 2: Check if out directory exists
  if (!fs.existsSync('out')) {
    throw new Error('Build output directory "out" not found!');
  }

  // Step 3: Create .nojekyll file for GitHub Pages
  console.log('📝 Creating .nojekyll file...');
  fs.writeFileSync(path.join('out', '.nojekyll'), '');
  console.log('✅ .nojekyll file created!\n');

  // Step 4: Instructions for manual deployment
  console.log('🎯 DEPLOYMENT INSTRUCTIONS:');
  console.log('=====================================');
  console.log('1. Push your code to GitHub:');
  console.log('   git add .');
  console.log('   git commit -m "Ready for deployment"');
  console.log('   git push origin main');
  console.log('');
  console.log('2. Enable GitHub Pages:');
  console.log('   - Go to your repository on GitHub');
  console.log('   - Click "Settings" → "Pages"');
  console.log('   - Source: "GitHub Actions"');
  console.log('   - Save');
  console.log('');
  console.log('3. Create GitHub Actions workflow:');
  console.log('   - Create .github/workflows/deploy.yml');
  console.log('   - Use the workflow template provided in DEPLOYMENT_GUIDE.md');
  console.log('');
  console.log('4. Your website will be live at:');
  console.log('   https://yourusername.github.io/repository-name');
  console.log('');
  console.log('🎉 Deployment ready! Follow the steps above to go live.');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
