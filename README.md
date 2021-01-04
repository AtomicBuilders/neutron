# neutron

Minimal JS project


### Debug

[How To Debug JavaScript with Google Chrome DevTools and Visual Studio Code](https://www.digitalocean.com/community/tutorials/how-to-debug-javascript-with-google-chrome-devtools-and-visual-studio-code)

[How To Debug JavaScript with Live Server](https://stackoverflow.com/questions/46945784/how-to-debug-javascript-in-visual-studio-code-with-live-server-running)


### Testing

Configuración mínima de JEST

### Scripts

```json
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "format": "prettier --write \"./**/*.{js,json}\"",
    "jest": "jest",
    "prerelease": "format && test && standard-version",
    "release": "git push --follow-tags origin master",
    "updates": "ncu -u"
  },
```