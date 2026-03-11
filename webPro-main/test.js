const puppeteer = require('puppeteer');

describe('הבדיקה הראשונה שלי', () => {
  it('פותח אתר ובודק את הכותרת שלו', async () => {
    // פותח דפדפן עם הגדרות שמתאימות ל-GitHub Actions
    const browser = await puppeteer.launch({
      headless: true, // שינינו ל-true לביצועים טובים יותר בשרת
      executablePath: '/usr/bin/google-chrome', // שימוש בדפדפן הקיים בשרת
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();

    // גולש לאתר דוגמה
    await page.goto('https://example.com');

    // מושך את הכותרת של האתר
    const title = await page.title();

    // מוודא שהכותרת היא מה שציפינו
    expect(title).toBe('Example Domain'); 

    // חשוב מאוד לסגור את הדפדפן בסיום
    await browser.close();
  });
});