const { chromium } = require('playwright');
const sharp = require('sharp');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage({ viewport: { width: 2200, height: 4300 }, deviceScaleFactor: 1 });
  await page.goto(`file://${path.join(__dirname, 'index.html')}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  for (const [id, name] of [['dti286', 'dti286-all-chapters-infographic'], ['pb287', 'pb287-all-weeks-infographic']]) {
    const el = page.locator(`#${id}`);
    const png = path.join(__dirname, `${name}.png`);
    await el.screenshot({ path: png });
    await sharp(png).webp({ quality: 92, smartSubsample: true }).toFile(path.join(__dirname, `${name}.webp`));
  }
  await browser.close();
})();
