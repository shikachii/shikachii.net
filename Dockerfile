FROM node:10.16.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080
ENV HOST 0.0.0.0

CMD ["npm", "run", "serve"]
