export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: 'docs',
    ts: new Date().toISOString(),
  });
}
