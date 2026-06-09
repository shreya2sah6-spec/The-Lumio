/**
 * scripts/optimize-images.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Batch converts PNG/JPG assets in src/imports/ to WebP using Sharp.
 * Run with:  node scripts/optimize-images.js
 *
 * Prerequisites:
 *   npm install --save-dev sharp glob
 *
 * What it does:
 *   1. Recursively finds all *.png and *.jpg files under src/imports/
 *   2. Converts each to .webp at quality 82 (good balance for photos/avatars)
 *   3. Writes the .webp sibling alongside the original (non-destructive)
 *   4. Prints a summary showing saved KB per file
 *
 * After running:
 *   - Update Vite asset imports to use .webp variants where supported
 *   - Use <source type="image/webp"> in <picture> elements for max browser support
 *
 * Config:
 *   QUALITY       — WebP quality (1–100). 82 is a good default for avatars/photos.
 *   LOGO_QUALITY  — Higher quality for logos/text images (fewer artefacts).
 *   SKIP_EXISTING — Skip files that already have a .webp sibling.
 */

import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, "..");
const SRC_DIR   = path.join(ROOT, "src", "imports");

const QUALITY      = 82;
const LOGO_QUALITY = 90;  // Higher for logos — they have sharp edges/text
const SKIP_EXISTING = true;

// Folders whose images should use the higher logo quality
const LOGO_DIRS = ["logo"];

// ─── Recursive file walker ────────────────────────────────────────────────────

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      yield full;
    }
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  // Dynamic import so the script fails gracefully if Sharp isn't installed
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error(
      "\n❌  Sharp is not installed. Run:\n" +
      "     npm install --save-dev sharp\n" +
      "   then re-run this script.\n"
    );
    process.exit(1);
  }

  console.log(`\n🔍  Scanning: ${SRC_DIR}\n`);

  let processed = 0;
  let skipped   = 0;
  let totalSaved = 0;

  for await (const filePath of walk(SRC_DIR)) {
    const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");
    const folderName = path.basename(path.dirname(filePath));
    const quality = LOGO_DIRS.includes(folderName) ? LOGO_QUALITY : QUALITY;

    // Skip if .webp already exists and SKIP_EXISTING is true
    if (SKIP_EXISTING) {
      try {
        await stat(webpPath);
        skipped++;
        continue;
      } catch {
        // .webp doesn't exist — proceed
      }
    }

    try {
      const inputStat  = await stat(filePath);
      const outputBuf  = await sharp(filePath)
        .webp({ quality, effort: 4 })
        .toBuffer();

      await writeFile(webpPath, outputBuf);

      const savedKb = ((inputStat.size - outputBuf.byteLength) / 1024).toFixed(1);
      const pct     = ((1 - outputBuf.byteLength / inputStat.size) * 100).toFixed(0);
      totalSaved   += inputStat.size - outputBuf.byteLength;
      processed++;

      const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");
      console.log(`  ✅  ${rel}  →  -${savedKb} KB (${pct}% smaller)`);
    } catch (err) {
      console.warn(`  ⚠️   ${filePath}: ${err.message}`);
    }
  }

  const totalKb = (totalSaved / 1024).toFixed(0);
  console.log(
    `\n─────────────────────────────────────────────────────\n` +
    `  Processed : ${processed} files\n` +
    `  Skipped   : ${skipped} files (already have .webp)\n` +
    `  Total saved: ~${totalKb} KB\n`
  );
}

main();
