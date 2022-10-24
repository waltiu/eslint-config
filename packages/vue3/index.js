
modules.export={
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-waltiu-base"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    "ecmaFeatures": {
      "legacyDecorators": true,
      "jsx": true
    }
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
    "getter-return": "error",
    "for-direction": "error",
    "no-async-promise-executor": "error",
    "array-bracket-spacing": "error",
    "no-unreachable": "error",
    "no-redeclare": "error",
    "no-useless-catch": "error",
    "constructor-super": "error",
    "curly": [
      "error",
      "multi-line"
    ],
    "dot-location": [
      "error",
      "property"
    ]
  }
}