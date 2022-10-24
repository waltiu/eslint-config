module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "@waltiu/eslint-config-base",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        varsIgnorePattern: "[rR]eact",
      },
    ],
    "space-in-parens": [0, "never"],
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
      },
    ],
    "no-unreachable": 2,
    "no-multi-spaces": 2,
    "array-bracket-spacing": ["error", "never"],
    "react/jsx-uses-vars": "error",
    "new-cap": [
      2,
      {
        newIsCap: true,
        capIsNew: false,
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
    "no-console": "off",
    quotes: ["error", "double"],
    "operator-assignment": [0, "always"],
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-uses-react": "error",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 200,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "dot-location": [2, "property"],
    "max-lines": [
      "error",
      {
        max: 500,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    "comma-dangle": ["error", "never"],
    semi: "off",
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    "no-async-promise-executor": "error",
    "for-direction": "error",
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "linebreak-style": [0, "error", "windows"],
    "eol-last": 2,
    curly: [2, "multi-line"],
    "generator-star-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    "comma-style": [2, "last"],
    "quote-props": [
      "error",
      "as-needed",
      {
        keywords: true,
        unnecessary: false,
      },
    ],
    "constructor-super": 2,
    "keyword-spacing": [
      2,
      {
        before: true,
        after: true,
      },
    ],
    "block-spacing": [2, "always"],
    camelcase: [
      0,
      {
        properties: "always",
      },
    ],
    "no-redeclare": "error",
    "space-infix-ops": 2,
    "getter-return": "error",
    "no-useless-catch": "error",
    "brace-style": [
      2,
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
  },
};
