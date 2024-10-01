# Use the official Node.js image as a base
FROM node:22-alpine3.19

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate the Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose the port on which the Next.js app will run
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
