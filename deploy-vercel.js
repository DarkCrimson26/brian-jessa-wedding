#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing for Vercel deployment...');

try {
  // Create vercel.json if it doesn't exist
  const vercelConfig = {
    "buildCommand": "npm run build",
    "outputDirectory": ".next",
    "framework": "nextjs",
    "installCommand": "npm install"
  };

  if (!fs.existsSync('vercel.json')) {
    fs.writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2));
    console.log('✅ Created vercel.json');
  }

  // Build the project
  console.log('🔨 Building project...');
  execSync('node "node_modules/next/dist/bin/next" build', { 
    stdio: 'inherit',
    cwd: __dirname 
  });

  console.log('✅ Build completed successfully!');
  console.log('🌐 Ready for Vercel deployment!');
  console.log('');
  console.log('📋 Next steps:');
  console.log('1. Push your code to GitHub');
  console.log('2. Go to https://vercel.com');
  console.log('3. Import your GitHub repository');
  console.log('4. Deploy!');

} catch (error) {
  console.error('❌ Deployment preparation failed:', error.message);
  process.exit(1);
}
