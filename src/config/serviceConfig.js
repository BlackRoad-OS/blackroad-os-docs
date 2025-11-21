const SERVICE_ID = 'docs';
const SERVICE_NAME = 'BlackRoad OS – Docs';
const SERVICE_BASE_URL = process.env.SERVICE_BASE_URL || 'https://docs.blackroad.systems';
const OS_ROOT = process.env.OS_ROOT || 'https://blackroad.systems';

const serviceConfig = {
  SERVICE_ID,
  SERVICE_NAME,
  SERVICE_BASE_URL,
  OS_ROOT,
};

module.exports = {
  SERVICE_ID,
  SERVICE_NAME,
  SERVICE_BASE_URL,
  OS_ROOT,
  serviceConfig,
  default: serviceConfig,
};
