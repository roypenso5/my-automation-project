const puppeteer = require('puppeteer');

describe('הבדיקה הראשונה שלי', () => {
  it('פותח אתר, לוכד צילום מסך ובודק את הכותרת שלו', async () => {
    // הגדרות מיוחדות לריצה בתוך GitHub Actions
    const browser = await puppeteer.launch({
      headless: true, // ריצה במצב 'headless' (ללא מסך גלוי) חיונית לשרת
      executablePath: '/usr/bin/google-chrome', // הנתיב לדפדפן בשרת של GitHub
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // הגדרות אבטחה חיוניות לריצה בשרת
    });
    
    const page = await browser.newPage();

    // גלישה לאתר הבדיקה
    await page.goto('https://example.com');

    // **המשימה החדשה:** לכידת צילום מסך ושמירתו כקובץ 'screenshot.png'
    await page.screenshot({ path: 'screenshot.png' });

    // משיכת הכותרת
    const title = await page.title();

    // בדיקה שהכותרת נכונה
    expect(title).toBe('Example Domain'); 

    // סגירת הדפדפן
    await browser.close();
  });
});