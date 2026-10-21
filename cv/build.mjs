// Renders cv/cv.html to public/static/cv_gangsar_aryo.pdf with headless Chrome/Edge.
// Needs Proxima Nova installed locally (the CV font). Override the browser with CHROME_PATH.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const browsers = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean);

const browser = browsers.find((path) => existsSync(path));
if (!browser) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

const input = pathToFileURL(resolve("cv/cv.html")).href;
const output = resolve("public/static/cv_gangsar_aryo.pdf");

// Throwaway profile so it doesn't clash with an open browser window.
const profile = mkdtempSync(join(tmpdir(), "cv-chrome-"));

try {
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      `--user-data-dir=${profile}`,
      "--no-pdf-header-footer",
      `--print-to-pdf=${output}`,
      input,
    ],
    { stdio: "ignore" }
  );
} finally {
  rmSync(profile, { recursive: true, force: true });
}

console.log(`CV written to ${output}`);
