# FAQ

## How to use dockerfile?

To build the Docker image with the updated Dockerfile, use the following command:

```bash
docker build -t jianshu-server .
```

This command builds the Docker image and tags it with the name jianshu-server.

To run the Docker container with the updated image, use the following command:

```bash
docker run -p 3000:3000 --name jianshu-server-container jianshu-server
```

This command maps port 3000 on the host machine to port 3000 in the container, names the container jianshu-server-container, and runs the jianshu-server Docker image. You should now be able to access the Koa app in your web browser at http://localhost:3000.

## macOS MongoDB install via Homebrew

source: https://stackoverflow.com/questions/57856809/installing-mongodb-with-homebrew

1. Install the Xcode command-line tools and the Homebrew from https://brew.sh/#install

```bash
xcode-select --install
```

2. Tap the MongoDB Homebrew Tap:

```bash
brew tap mongodb/brew
```

3. Verify installation prerequisites in the macOS Terminal:

```bash
brew tap | grep mongodb
```

4. install MongoDB

```bash
brew install mongodb-community@4.4
```

Note: The installation includes:

- The mongod server,
- The mongos sharded cluster query router,
- The mongo shell

Note: Start mongoDB via `brew services`

```bash
brew services start mongodb-community
brew services stop mongodb-community
brew services restart mongodb-community
```
