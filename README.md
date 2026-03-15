# Web Automation & CI/CD Pipeline 🤖

## About The Project
This project demonstrates an automated End-to-End (E2E) testing framework. I built a bot that automatically navigates to a target website, verifies its content, and captures a screenshot. 

The main goal of this project was to implement a full **CI/CD pipeline** using GitHub Actions, ensuring that every time new code is pushed, the automated tests run seamlessly in the cloud without manual intervention.

## Built With
* **[Node.js](https://nodejs.org/)** - JavaScript runtime environment.
* **[Puppeteer](https://pptr.dev/)** - Headless Chrome Node.js API for browser automation.
* **[Jest](https://jestjs.io/)** - JavaScript Testing Framework.
* **[GitHub Actions](https://github.com/features/actions)** - For CI/CD and continuous testing.

## How It Works
1. **Trigger:** A push to the `main` branch triggers the GitHub Actions workflow.
2. **Setup:** The cloud runner sets up a Node.js environment and installs dependencies using `npm ci`.
3. **Execution:** Jest runs the `test.js` script.
4. **Automation:** Puppeteer launches a headless browser, navigates to the specified URL, waits for the network to idle, and takes a full viewport screenshot.
5. **Validation:** Jest asserts that the page title is correct.

## How to Run Locally
If you want to run this bot on your own machine:

1. Clone the repo:
   ```bash
   git clone [https://github.com/roypenso5/my-automation-project.git](https://github.com/roypenso5/my-automation-project.git)