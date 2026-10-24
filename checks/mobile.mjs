// Loads every page of site/ at phone widths and fails if any of them scrolls
// sideways, listing the elements that stick out past the right edge.
// Full-page screenshots of each width go to checks/out/ for a visual check.
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = fileURLToPath(new URL("../site/", import.meta.url));
const out = fileURLToPath(new URL("./out/", import.meta.url));
const pages = ["/", "/404.html"];
const widths = [320, 360, 390, 414];
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml",
  ".png": "image/png", ".ico": "image/x-icon", ".woff2": "font/woff2", ".mp4": "video/mp4" };

// minimal static server for site/, as Netlify serves it
const server = createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (p.endsWith("/")) p += "index.html";
  try {
    const body = await readFile(join(root, p));
    res.writeHead(200, { "content-type": types[extname(p)] || "application/octet-stream" }).end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

await mkdir(out, { recursive: true });
const browser = await chromium.launch();
let failures = 0;
for (const path of pages) {
  for (const width of widths) {
    const ctx = await browser.newContext({ viewport: { width, height: 800 }, deviceScaleFactor: 2, isMobile: true,
      hasTouch: true, reducedMotion: "reduce" });
    const page = await ctx.newPage();
    await page.goto(base + path, { waitUntil: "load" });
    // elements whose right edge passes the viewport, skipping those inside a
    // container that clips or scrolls them on purpose
    const wide = await page.evaluate(() => {
      const w = document.documentElement.clientWidth;
      if (document.documentElement.scrollWidth <= w) return [];
      const clipped = (el) => {
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          if (getComputedStyle(p).overflowX !== "visible") return true;
        }
        return false;
      };
      return [...document.body.querySelectorAll("*")]
        .filter((el) => el.getBoundingClientRect().right > w + 1 && !clipped(el))
        .filter((el, _, all) => !all.some((o) => o !== el && el.contains(o)))
        .slice(0, 10)
        .map((el) => `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}${el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).join(".") : ""} (right edge ${Math.round(el.getBoundingClientRect().right)}px)`);
    });
    const name = `${path === "/" ? "index" : path.slice(1).replace(/\.html$/, "")}-${width}.png`;
    await page.screenshot({ path: join(out, name), fullPage: true });
    if (wide.length) {
      failures++;
      console.log(`FAIL ${path} at ${width}px scrolls sideways:\n  ${wide.join("\n  ")}`);
    } else {
      console.log(`ok   ${path} at ${width}px`);
    }
    await ctx.close();
  }
}
await browser.close();
server.close();
process.exit(failures ? 1 : 0);
