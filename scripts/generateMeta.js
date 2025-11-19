const { execSync } = require('node:child_process');
const { writeFileSync, mkdirSync, readFileSync } = require('node:fs');
const { join } = require('node:path');
const docsConfig = require('../src/config/docsConfig');

const BUILD_TIME = process.env.RAILWAY_BUILD_TIME || process.env.BUILD_TIME || new Date().toISOString();

const SERVICE_NAME = docsConfig.serviceName;

function getCommitSha() {
  if (process.env.RAILWAY_GIT_COMMIT_SHA) {
    return process.env.RAILWAY_GIT_COMMIT_SHA;
  }
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

  const healthPayload = {
    status: 'ok',
    timestamp,
    environment: docsConfig.env,
  };

  const versionPayload = {
    service: SERVICE_NAME,
    appVersion: version,
    commit,
    buildTime: BUILD_TIME,
    environment: docsConfig.env,
    docsUrl: docsConfig.publicDocsUrl,
  };

  const staticDir = join(process.cwd(), 'static');
  mkdirSync(staticDir, { recursive: true });

  writeFileSync(join(staticDir, 'health.json'), JSON.stringify(healthPayload, null, 2));
  writeFileSync(join(staticDir, 'version.json'), JSON.stringify(versionPayload, null, 2));

  mkdirSync(join(staticDir, 'health'), { recursive: true });
  mkdirSync(join(staticDir, 'version'), { recursive: true });

  writeFileSync(join(staticDir, 'health', 'index.json'), JSON.stringify(healthPayload, null, 2));
  writeFileSync(join(staticDir, 'version', 'index.json'), JSON.stringify(versionPayload, null, 2));
}

buildMeta();
