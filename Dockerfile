# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app files to the working directory
COPY . .

# Expose port 3000 for the web server
EXPOSE 3000

# Start the web server
CMD [ "npm", "start" ]