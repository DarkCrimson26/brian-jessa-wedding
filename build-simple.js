#!/usr/bin/env node

console.log('🔨 Starting build process...');

try {
  // Import and run Next.js build
  const { build } = require('next/dist/cli/next-build');
  
  console.log('🚀 Running Next.js build...');
  
  // Run the build
  build({
    dir: process.cwd(),
    dev: false,
    debug: false,
    quiet: false
  });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
