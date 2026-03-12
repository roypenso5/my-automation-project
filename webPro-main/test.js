const puppeteer = require('puppeteer');

describe('Automation Test', () => {
  it('Should verify page title and take screenshot', async () => {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/google-chrome',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.goto('https://example.com');
    
    // לקיחת צילום מסך עבור המשימה השנייה
    await page.screenshot({ path: 'screenshot.png' });
    
    const title = await page.title();
    expect(title).toBe('Example Domain'); 
    
    await browser.close();
  });
});