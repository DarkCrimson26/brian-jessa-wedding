#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying project structure...');
console.log('============================');

// Check current directory
console.log('\n📁 Current Directory:', process.cwd());

// Check if app directory exists
const appDir = path.join(process.cwd(), 'app');
if (fs.existsSync(appDir)) {
  console.log('✅ app directory found');
  
  // List contents of app directory
  const appContents = fs.readdirSync(appDir);
  console.log('📱 App directory contents:', appContents);
  
  // Check for key files
  const hasPages = appContents.some(item => item === 'page.tsx' || item.includes('page'));
  const hasApi = appContents.some(item => item === 'api');
  
  console.log('📄 Has page files:', hasPages);
  console.log('🔌 Has API routes:', hasApi);
} else {
  console.log('❌ app directory NOT found');
}

// Check if pages directory exists (alternative)
const pagesDir = path.join(process.cwd(), 'pages');
if (fs.existsSync(pagesDir)) {
  console.log('✅ pages directory found');
} else {
  console.log('❌ pages directory NOT found');
}

// Check package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('✅ package.json found');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('📦 Package name:', packageJson.name);
  console.log('📦 Package version:', packageJson.version);
} else {
  console.log('❌ package.json NOT found');
}

// Check next.config
const nextConfigPath = path.join(process.cwd(), 'next.config.mjs');
if (fs.existsSync(nextConfigPath)) {
  console.log('✅ next.config.mjs found');
} else {
  console.log('❌ next.config.mjs NOT found');
}

console.log('\n✅ Verification complete');
