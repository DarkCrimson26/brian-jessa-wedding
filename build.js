#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🔨 Starting build process...');

try {
  // Change to the project directory
  const projectDir = __dirname;
  process.chdir(projectDir);
  
  console.log('📁 Project directory:', projectDir);
  
  // Run the build command
  console.log('🚀 Running Next.js build...');
  execSync('npx next build', { 
    stdio: 'inherit',
    cwd: projectDir
  });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
