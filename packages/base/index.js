module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        varsIgnorePattern: "[rR]eact",
      },
    ],

    "max-lines-per-function": [
      "error",
      {
        max: 300,
        skipComments: true,
        skipBlankLines: true,
      },
    ],

    "max-lines": [
      "error",
      {
        max: 500,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
  },
};
