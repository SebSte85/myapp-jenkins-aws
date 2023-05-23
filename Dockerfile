## Build a Dockerfile for this project
FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

WORKDIR /app/client

CMD ["npm", "start"]