
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app will run on (make sure it matches what's in your app, e.g., 4000)
EXPOSE 4000

# Define the command to start your application
CMD ["node", "index.js"]