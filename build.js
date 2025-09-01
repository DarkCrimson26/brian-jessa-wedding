#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🔨 Starting build process...');

try {
  // Get the path to the Next.js binary
  const nextPath = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
  
  console.log('📁 Next.js path:', nextPath);
  console.log('🚀 Running Next.js build...');
  
  // Run the build command
  const buildProcess = spawn('node', [nextPath, 'build'], {
    stdio: 'inherit',
    cwd: __dirname
  });
  
  buildProcess.on('close', (code) => {
    if (code === 0) {
      console.log('✅ Build completed successfully!');
    } else {
      console.error('❌ Build failed with code:', code);
      process.exit(code);
    }
  });
  
  buildProcess.on('error', (error) => {
    console.error('❌ Build process error:', error);
    process.exit(1);
  });
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
