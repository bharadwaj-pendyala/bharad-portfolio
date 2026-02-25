import { spawnSync } from 'node:child_process';

const files = process.argv.slice(2).filter((file) => {
  return /\.(js|jsx|ts|tsx)$/.test(file);
});

if (files.length === 0) {
  process.exit(0);
}

const args = ['lint', '--fix'];

files.forEach((file) => {
  args.push('--file', file);
});

const result = spawnSync('npm', ['run', args[0], '--', ...args.slice(1)], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
