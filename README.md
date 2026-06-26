# 🛒 E-Commerce Test Automation Suite

This repository contains an End-to-End (E2E) automated testing project built to validate critical user flows and functionalities on e-commerce platforms (such as user registration and authentication workflows).

The primary objective is to implement high-quality test architecture practices, ensuring stable, clean, and highly maintainable automation scripts.

## 🛠️ Built With

* **[Playwright](https://playwright.dev)** - Modern, fast, and reliable browser automation framework.
* **JavaScript** - Core programming language.
* **Page Object Model (POM)** - Design pattern applied to decouple page structure from test logic, maximizing code reusability.
* **GitHub Actions** - CI/CD pipeline setup for continuous, automated test execution on code changes.

## 📂 Project Structure

```text
├── .github/workflows/   # CI/CD integration configurations (GitHub Actions)
├── pages/               # Page Object Model classes (selectors and actions)
│   └── SignupPage.js    # Example: User registration workflows
├── tests/               # Test specification files (.spec.js)
├── playwright.config.js # Global Playwright setups (timeouts, browsers, etc.)
├── package.json         # Project manifests, scripts, and dependencies
└── README.md            # Project documentation
```

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed on your local machine:
* [Node.js](https://nodejs.org) (LTS version recommended)
* [Git](https://git-scm.com)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate into the project directory:**
   ```bash
   cd ecommerce-test
   ```

3. **Install the node dependencies:**
   ```bash
   npm install
   ```

4. **Install the required Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 🧪 Running the Tests

Execute your test suites using the following automated command scripts:

* **Run all tests in Headless mode (background execution):**
  ```bash
  npx playwright test
  ```

* **Run tests using the Playwright Interactive UI Mode:**
  ```bash
  npx playwright test --ui
  ```

* **Run a single specific test file:**
  ```bash
  npx playwright test tests/filename.spec.js
  ```

* **Generate and view the HTML execution report:**
  ```bash
  npx playwright show-report
  ```

## 🧠 Best Practices Applied
* **Stable Web Selectors:** Native usage of testing attributes (`data-qa` and explicit `IDs`) to minimize flaky tests.
* **Smart Timeouts Management:** Handles asynchronous state transitions smoothly across multi-step registration screens.
* **Dynamic Test Data:** Implements randomized data generation (e.g., dynamic emails) to prevent duplicate database constraints on repeated runs.
