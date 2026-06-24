import { buildMarketPayload, json } from "./_fake-db.js";

export default function handler(request, response) {
  const url = new URL(request.url, "https://immoscope.local");
  const payload = buildMarketPayload({
    sector: url.searchParams.get("sector") || "Bordeaux",
    assetClass: url.searchParams.get("assetClass") || "all",
    budget: url.searchParams.get("budget") || "0",
    yieldTarget: url.searchParams.get("yieldTarget") || "0",
  });
  if (response) return response.status(200).json(payload);
  return json(payload);
}
