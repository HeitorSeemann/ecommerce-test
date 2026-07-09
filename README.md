# 🛒 E-Commerce Test Automation Suite

An E2E automated testing project validating critical e-commerce flows using Playwright.

## 🚀 Getting Started
```bash
git clone https://github.com
cd ecommerce-test
npm install
npx playwright install
```

## 🧪 Running the Tests
- **Run:** `npm run test`
- **UI Mode:** `npx playwright test --ui`

## 🐳 Running with Docker
This project includes a Docker configuration for containerized testing.

### 1. Build the Image
```bash
docker build -t ecommerce-test-app .
```

### 2. Run the Tests
```bash
docker run --init --ipc=host --rm ecommerce-test-app
```

## 🧠 Highlights
- POM Architecture
- Network Interception
- Data-Driven
