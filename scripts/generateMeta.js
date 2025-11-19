const { execSync } = require('node:child_process');
const { writeFileSync, mkdirSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

function getCommitSha() {
  try {
    return execSync('git rev-parse HEAD').toString().trim();
  } catch (error) {
    return 'unknown';
  }
}

function getVersion() {
  try {
    const pkgRaw = readFileSync(join(process.cwd(), 'package.json'), 'utf-8');
    const pkg = JSON.parse(pkgRaw);
    return pkg.version || '0.0.0';
  } catch (error) {
    return '0.0.0';
  }
}

function buildMeta() {
  const timestamp = new Date().toISOString();
  const commit = getCommitSha();
  const version = getVersion();
  const payload = {
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    timestamp,
    commit,
    version
  };

  const staticDir = join(process.cwd(), 'static');
  mkdirSync(staticDir, { recursive: true });
  writeFileSync(join(staticDir, 'health.json'), JSON.stringify(payload, null, 2));
  writeFileSync(join(staticDir, 'version.json'), JSON.stringify(payload, null, 2));
  mkdirSync(join(staticDir, 'health'), { recursive: true });
  mkdirSync(join(staticDir, 'version'), { recursive: true });
  writeFileSync(join(staticDir, 'health', 'index.json'), JSON.stringify(payload, null, 2));
  writeFileSync(join(staticDir, 'version', 'index.json'), JSON.stringify(payload, null, 2));
}

buildMeta();
