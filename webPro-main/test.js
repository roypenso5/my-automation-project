name: הבדיקות שלי

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Node setup
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        # הוספנו פקודה שדילגת על הורדת כרום בזמן התקנת הספריות
        run: npm ci
        env:
          PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: 'true'

      - name: Run tests
        # עכשיו הוא פשוט יריץ את הבדיקה (הוא ישתמש בדפדפן המובנה של השרת)
        run: npm test