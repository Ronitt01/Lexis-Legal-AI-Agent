import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { analyze, samples, status } from "./lib/lexis.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));

app.post("/api/analyze", analyze);
app.get("/api/workspace/samples", samples);
app.get("/api/status", status);

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`LexisAI fullstack server successfully running on http://localhost:${PORT}`);
  });
}

startServer();
