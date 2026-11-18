import { analyze } from "../lib/lexis.js";

export default function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).json({ error: "Use POST" });
  return analyze(req, res);
}
