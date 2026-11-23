const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:3000...");
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

  // 1. Screenshot Hero with tech icons
  await page.screenshot({
    path: 'C:/Users/nagaraj/.gemini/antigravity/brain/d31d2a53-0e87-4998-a1fc-8cf0d6fed73e/hero-tech-icons-1440.png',
    clip: { x: 0, y: 0, width: 1440, height: 860 }
  });
  console.log("Hero screenshot captured!");

  // 2. Scroll to Testimonials (VerseCards)
  const testimonials = await page.$('text=Technical Recognition');
  if (testimonials) {
    await testimonials.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({
      path: 'C:/Users/nagaraj/.gemini/antigravity/brain/d31d2a53-0e87-4998-a1fc-8cf0d6fed73e/verse-cards-view.png'
    });
    console.log("Verse cards screenshot captured!");

    // Click next button to test transition
    const nextBtn = await page.$('button[aria-label="Next card"]');
    if (nextBtn) {
      await nextBtn.click();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: 'C:/Users/nagaraj/.gemini/antigravity/brain/d31d2a53-0e87-4998-a1fc-8cf0d6fed73e/verse-cards-transitioned.png'
      });
      console.log("Verse cards transitioned screenshot captured!");
    }
  }

  // 3. Scroll to Contact section
  const contact = await page.$('#contact');
  if (contact) {
    await contact.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({
      path: 'C:/Users/nagaraj/.gemini/antigravity/brain/d31d2a53-0e87-4998-a1fc-8cf0d6fed73e/contact-fixed-view.png'
    });
    console.log("Contact fixed screenshot captured!");
  }

  await browser.close();
  console.log("Done!");
})();

