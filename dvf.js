import { buildDvfPayload, json } from "./_fake-db.js";

export default function handler(request, response) {
  const url = new URL(request.url, "https://immoscope.local");
  const payload = buildDvfPayload(url.searchParams.get("code_commune") || url.searchParams.get("citycode") || "33063");
  if (response) return response.status(200).json(payload);
  return json(payload);
}
