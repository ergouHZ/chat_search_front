FROM node:18-alpine

# built by AI
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]
