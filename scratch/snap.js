const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({
      channel: 'chrome',
      headless: true
    });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 }
    });
    const page = await context.newPage();

    console.log("Navigating...");
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1000);

    // 1. Capture landing screen with aligned icons
    await page.screenshot({
      path: 'C:/Users/nagaraj/.gemini/antigravity/brain/d31d2a53-0e87-4998-a1fc-8cf0d6fed73e/landing-aligned-icons.png',
      clip: { x: 0, y: 0, width: 1440, height: 860 }
    });
    console.log("Captured landing-aligned-icons.png");

    // 2. Capture contact section
    const contact = await page.$('#contact');
    if (contact) {
      await contact.scrollIntoViewIfNeeded();
      await page.waitForTimeout(800);
      await page.screenshot({
        path: 'C:/Users/nagaraj/.gemini/antigravity/brain/d31d2a53-0e87-4998-a1fc-8cf0d6fed73e/contact-clean-bento.png'
      });
      console.log("Captured contact-clean-bento.png");
    }

    await browser.close();
    console.log("SUCCESS");
  } catch (err) {
    console.error("Error:", err);
  }
})();
