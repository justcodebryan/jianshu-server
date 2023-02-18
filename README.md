# FAQ

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
