#!/bin/bash

# Stop and remove any existing containers with the same name
docker stop jianshu-server-container
docker rm jianshu-server-container

# Build the Docker image with the latest code
docker build -t jianshu-server-container .

# Run the Docker container with the new image
docker run -p 3000:3000 --name jianshu-server -d jianshu-server-container pm2-runtime dist/index.js