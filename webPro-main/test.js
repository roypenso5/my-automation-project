const puppeteer = require('puppeteer');

describe('הבדיקה הראשונה שלי', () => {
  it('פותח אתר ובודק את הכותרת שלו', async () => {
    // פותח דפדפן כסמוי
    const browser = await puppeteer.launch({
  headless: "new",
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
    const page = await browser.newPage();

    // גולש לאתר דוגמה
    await page.goto('https://example.com');

    // מושך את הכותרת של האתר
    const title = await page.title();

    // מוודא שהכותרת היא מה שציפינו
    expect(title).toBe('Example Domain'); 

    // סוגר את הדפדפן
    await browser.close();
  });
});