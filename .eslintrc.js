module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "valid-jsdoc": "off",
    "new-cap": "off",
  },
}
