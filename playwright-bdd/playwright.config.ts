import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test folder
  testDir: './tests',

  // Global timeout
  timeout: 30 * 1000,

  // Assertion timeout
  expect: {
    timeout: 5000
  },

  // Execute tests in parallel
  fullyParallel: true,

  // Fail build if test.only exists
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Number of workers
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    // Application URL
    baseURL: 'http://localhost:8081',

    // Browser settings
    headless: false,

    // Browser window
    viewport: {
      width: 1920,
      height: 1080
    },

    // Capture evidence
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    // Ignore HTTPS issues
    ignoreHTTPSErrors: true,

    // Action timeout
    actionTimeout: 10000
  },

  // Cross browser execution
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }
  ]
});