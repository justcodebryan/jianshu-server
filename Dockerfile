# Use a Node.js base image with a specific version
FROM node:16.17.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json pnpm-lock.yaml  ./

# Install pnpm globally inside the container
RUN npm install -g pnpm pm2 pm2-runtime

# Install the dependencies inside the container using pnpm
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code inside the container
RUN pnpm run build

# Expose the port that the Koa app listens on
EXPOSE 3000

# Start the Koa app when the container is run
CMD ["pm2-runtime", "dist/index.js"]
