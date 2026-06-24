import { json } from "./_fake-db.js";

export default function handler(request, response) {
  const payload = {
    ok: true,
    service: "ImmoScope",
    version: "1.2.0-vercel-demo-db",
    mode: "demo-db",
    generatedAt: new Date().toISOString(),
    message: "API Vercel active avec base de donnees fictive de presentation.",
  };
  if (response) return response.status(200).json(payload);
  return json(payload);
}
