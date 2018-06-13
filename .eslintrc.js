module.exports = {
  root: true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": 'babel-eslint',
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    // required to lint *.vue files
    'html'
  ],
  "rules": {
    // indent is 2
    "indent": ["error", 2],
    // string sing quotes
    "quotes": [ "error", "single" ],
    // allow semi or not
    "semi": [ "error", "never" ],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // do not allow console.logs etc...
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
  }
};