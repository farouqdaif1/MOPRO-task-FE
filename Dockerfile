# Use an official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port Vite runs on
EXPOSE 5173

# Start the app in development mode
CMD ["npm", "run", "dev", "--", "--host"]
