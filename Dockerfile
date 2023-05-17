FROM node:12.18.3-alpine3.12

WORKDIR /app

# Copy the main application files
COPY package.json .
COPY package-lock.json .
COPY server.js .

# Install the main application dependencies
RUN npm ci --production

# Change directory to the client folder
WORKDIR /app/client

# Copy the client-specific package.json and package-lock.json files
COPY client/package.json .
COPY client/package-lock.json .

# Install the client dependencies
RUN npm ci --production

# Go back to the root directory
WORKDIR /app

# Copy the remaining client files
COPY client .

# Change directory to the client folder
WORKDIR /app/client

# Start the application from client folder
CMD ["npm", "start"]