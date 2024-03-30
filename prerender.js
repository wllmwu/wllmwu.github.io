// based on https://github.com/vitejs/vite-plugin-react/blob/main/playground/ssr-react/prerender.js

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = await import("./dist/static-render.js");

const routesToPrerender = fs
  .readdirSync(toAbsolute("src/pages"), { recursive: true })
  .filter((file) => !file.endsWith(".DS_Store") && !file.startsWith("404"))
  .map((file) => file.replace(/\.mdx$/, ""));

(async () => {
  for (const route of routesToPrerender) {
    const url = route.replace(/\/?index$/, "");
    const appHtml = await render(url);
    const html = template.replace("<!--app-html-->", appHtml);
    const filePath = `dist/static/${route}.html`;
    const dirPath = filePath.slice(0, filePath.lastIndexOf("/"));
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(toAbsolute(filePath), html);
  }
})();
