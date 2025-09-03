#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting deployment process...');

try {
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  try {
    execSync('rmdir /s /q .next', { stdio: 'ignore' });
  } catch (e) {
    // Ignore if directory doesn't exist
  }

  // Build the project
  console.log('🔨 Building project...');
  execSync('node "node_modules/next/dist/bin/next" build', { 
    stdio: 'inherit',
    cwd: __dirname 
  });

  console.log('✅ Build completed successfully!');
  console.log('📁 Build output is in the .next directory');
  console.log('🌐 Ready for deployment!');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
