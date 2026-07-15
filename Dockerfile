FROM node:22-alpine
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

EXPOSE 3000

# Serve the built app, don't build it again!
CMD ["npm", "start"]