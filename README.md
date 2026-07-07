# 🛒 E-Commerce Test Automation Suite

An E2E automated testing project validating critical e-commerce flows using Playwright, designed to showcase advanced POM architecture and maintainable test scripts.

## 🛠️ Built With
* **Playwright** & **JavaScript**
* **Page Object Model (POM)**
* **Network Interception** (Service-Oriented Data Mocking)

## 📂 Project Structure
```text
├── pages/                   # POM classes (selectors/actions)
├── services/                # Network interception & data mocking
└── tests/                   # Specification files
```

## 🚀 Getting Started
```bash
git clone https://github.com
cd ecommerce-test
npm install
npx playwright install
```

## 🧪 Running the Tests
* **Run:** `npm run test`
* **UI Mode:** `npx playwright test --ui`
* **Switch Environment:** `ENV=test npx playwright test`

## 🧠 Technical Highlights
* **Architecture:** POM + Service Layer (Strict decoupling).
* **Isolation:** Network interception via `PersonService` (No hardcoded URLs).
* **Data-Driven:** Dynamic payload generation.
* **Stability:** Use of `data-qa` attributes for selectors.
