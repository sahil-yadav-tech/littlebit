FROM node:22-alpine
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code and .env
COPY . .
COPY .env .env 
# Build with environment variables from .env
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]