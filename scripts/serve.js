#!/usr/bin/env node

const { spawn } = require('child_process');

const port = process.env.PORT || '3000';
const args = ['serve', '--dir', 'build', '--host', '0.0.0.0', '--port', port];

const child = spawn('docusaurus', args, {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code);
});
