module.exports = {
  moduleFileExtensions: [
    "js",
    "riot",
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.riot$": "./lib/index.js"
  }
}
