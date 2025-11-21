import { serviceConfig } from '../../config/serviceConfig';

export default function handler(req, res) {
  res.status(200).json({
    name: serviceConfig.SERVICE_NAME,
    id: serviceConfig.SERVICE_ID,
    baseUrl: serviceConfig.SERVICE_BASE_URL,
    osRoot: serviceConfig.OS_ROOT,
    ts: new Date().toISOString(),
  });
}
