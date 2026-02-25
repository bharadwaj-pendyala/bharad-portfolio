import { execSync } from 'node:child_process';

const SECRET_PATTERNS = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /AKIA[0-9A-Z]{16}/,
  /ghp_[A-Za-z0-9]{36}/,
  /github_pat_[A-Za-z0-9_]{82,}/,
  /xox[baprs]-[A-Za-z0-9-]{10,}/,
  /(?:api[_-]?key|secret|token|password)\s*[:=]\s*['"][^'"\n]{8,}['"]/i,
];

function getStagedDiff() {
  try {
    return execSync('git diff --cached --no-color --unified=0', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return '';
  }
}

function getAddedLines(diff) {
  const lines = diff.split('\n');
  const added = [];

  lines.forEach((line, index) => {
    const isAddedLine = line.startsWith('+') && !line.startsWith('+++');
    const isAllowlisted = line.includes('secret-scan:allow');

    if (isAddedLine && !isAllowlisted) {
      added.push({ line: line.slice(1), index: index + 1 });
    }
  });

  return added;
}

function findLeaks(lines) {
  const leaks = [];

  lines.forEach(({ line, index }) => {
    const hasLeak = SECRET_PATTERNS.some((pattern) => pattern.test(line));
    if (hasLeak) {
      leaks.push(`${index}: ${line.trim().slice(0, 160)}`);
    }
  });

  return leaks;
}

const diff = getStagedDiff();
if (!diff) {
  process.exit(0);
}

const addedLines = getAddedLines(diff);
const leaks = findLeaks(addedLines);

if (leaks.length > 0) {
  console.error('\nSecret scan failed: possible secrets in staged changes.');
  console.error('Review and remove these lines before commit:\n');
  leaks.forEach((leak) => console.error(`- ${leak}`));
  console.error(
    '\nIf this is a false positive, append `secret-scan:allow` to that line.'
  );
  process.exit(1);
}
