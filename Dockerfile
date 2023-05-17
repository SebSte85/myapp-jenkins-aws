## Build a basic Dockerfile for this project
FROM node:12.18.3-alpine3.12

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

WORKDIR /app/client

CMD ["npm", "start"]