#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Set the working directory to the project root
const projectRoot = path.resolve(__dirname, '..');
process.chdir(projectRoot);

try {
  // Run Next.js build using the locally installed version
  const nextBin = path.join(projectRoot, 'node_modules', '.bin', 'next');
  execSync(`node "${path.join(projectRoot, 'node_modules', 'next', 'dist', 'bin', 'next')}" build`, {
    stdio: 'inherit',
    cwd: projectRoot
  });
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}