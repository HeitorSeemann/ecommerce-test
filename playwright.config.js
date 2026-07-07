const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

const currentEnv = process.env.ENV || 'dev';
const configPath = path.resolve(__dirname, 'config', `${currentEnv}.config.js`);
const configEnv = require(configPath);

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'html',
  
  use: {
    baseURL: configEnv.baseUrl || configEnv.baseURL || 'https://automationexercise.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  metadata: {
    apiUrl: configEnv.apiUrl || '**/api/v1/person'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
