# Riot-v6-jest-transformer

## Usage

Install via NPM with `babel-jest`, which this module depends.

```sh
npm i -D babel-jest riot-v6-jest-transformer
```

Edit jest.config.js or something like this.

```javascript
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
```

### Note

This module requires babel environment.

You need to prepare for your own.

Install modules.

```sh
npm i -D @babel/core @babel/preset-env
```

Edit .babelrc.

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current",
        },
      },
    ],
  ]
}
```

Remember to set "@babel/preset-typescript" with `allowExtension` if you use TypeScript in your tags.

```json:.babelrc
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current",
        },
      },
    ],
    [
      "@babel/preset-typescript",
      {
        "allExtensions": true,
      }
    ]
  ]
}
```
