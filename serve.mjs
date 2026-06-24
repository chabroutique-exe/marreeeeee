import http from "node:http";
import worker from "../worker/index.js";

const port = Number(process.env.PORT || 4173);
const hostname = process.env.HOST || "127.0.0.1";

const server = http.createServer(async (req, res) => {
  try {
    const url = "http://" + hostname + ":" + port + req.url;
    const response = await worker.fetch(new Request(url), process.env, {});
    const body = Buffer.from(await response.arrayBuffer());
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(body);
  } catch (error) {
    res.writeHead(500, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: false, error: error.message }));
  }
});

server.listen(port, hostname, () => {
  console.log("ImmoScope running on http://" + hostname + ":" + port);
});
