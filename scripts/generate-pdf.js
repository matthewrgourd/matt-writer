#!/usr/bin/env node
/**
 * Generates Matthew-Gourd.pdf from the CV HTML using Puppeteer.
 * Waits for Vue to finish rendering before printing.
 *
 * Usage: node scripts/generate-pdf.js
 */

import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cvHtml = resolve(__dirname, '../public/cv/index.html');
const outputPdf = resolve(__dirname, '../public/Matthew-Gourd.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// Must be wider than 992px to avoid the mobile CSS breakpoint
await page.setViewport({ width: 1440, height: 900 });

await page.goto(`file://${cvHtml}`, { waitUntil: 'networkidle0' });

// Wait for Vue to render and remove the d-none class from body
await page.waitForFunction(
  () => !document.body.classList.contains('d-none'),
  { timeout: 10000 }
);

await page.pdf({
  path: outputPdf,
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`PDF written to ${outputPdf}`);
