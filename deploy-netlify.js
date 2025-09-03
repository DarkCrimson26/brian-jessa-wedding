#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Deploying Wedding Website to Netlify...\n');

try {
  // Step 1: Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');

  // Step 2: Check if out directory exists
  if (!fs.existsSync('out')) {
    throw new Error('Build output directory "out" not found!');
  }

  // Step 3: Create _redirects file for SPA routing
  console.log('📝 Creating _redirects file...');
  fs.writeFileSync(path.join('out', '_redirects'), '/*    /index.html   200');
  console.log('✅ _redirects file created!\n');

  // Step 4: Instructions for Netlify deployment
  console.log('🎯 NETLIFY DEPLOYMENT INSTRUCTIONS:');
  console.log('=====================================');
  console.log('1. Go to https://netlify.com and sign up/login');
  console.log('2. Click "Add new site" → "Deploy manually"');
  console.log('3. Drag and drop the "out" folder to the deploy area');
  console.log('4. Your website will be live instantly!');
  console.log('');
  console.log('OR use the GitHub integration:');
  console.log('1. Click "Add new site" → "Import an existing project"');
  console.log('2. Connect to GitHub and select your repository');
  console.log('3. Build command: npm run build');
  console.log('4. Publish directory: out');
  console.log('5. Click "Deploy site"');
  console.log('');
  console.log('🎉 Your website will be live at: https://random-name.netlify.app');
  console.log('💡 You can customize the URL in Netlify settings!');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
