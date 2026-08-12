export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return res.status(204).end();

    const payload = {
      event: body.event || 'whatsapp_click',
      page: body.page || '/',
      source: body.source || null,
      medium: body.medium || null,
      campaign: body.campaign || null,
      content: body.content || null,
      user_agent: req.headers['user-agent'] || null
    };

    const r = await fetch(`${url}/rest/v1/landing_events`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(payload)
    });
    if (!r.ok) throw new Error(await r.text());
    return res.status(204).end();
  } catch (e) {
    console.error(e);
    return res.status(204).end();
  }
}
