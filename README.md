# neutron

Minimal JavaScript project.

> Based on [quark](https://github.com/AtomicBuilders/quark) project template

## Debug

[How To Debug JavaScript with Google Chrome DevTools and Visual Studio Code](https://www.digitalocean.com/community/tutorials/how-to-debug-javascript-with-google-chrome-devtools-and-visual-studio-code)

[How To Debug JavaScript with Live Server](https://stackoverflow.com/questions/46945784/how-to-debug-javascript-in-visual-studio-code-with-live-server-running)


## Testing

Minimal testing with Jest and Babel to use latest JavaScript features

### Jest

Run assertions

### Babel

Transform modules

## Build and deploy

### Rollup

Build, copy and minify

### GitHub Pages

Static deploy

### Scripts

```json
  "scripts": {
    "format": "prettier --write \"./**/*.{js,json}\"",
    "jest": "jest",
    "test": "jest --watch -o",
    "build": "rollup --config",
    "release": "git push --follow-tags origin master",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "updates": "ncu -u"
  },
```