FROM node:20-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npx playwright install --with-deps

COPY . .

CMD ["npm", "run", "test"]
