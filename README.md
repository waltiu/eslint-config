# eslint-config-waltiu-react

[![npm](https://img.shields.io/npm/v/eslint-config-waltiu-react?color=a1b858&label=)](https://npmjs.com/package/eslint-config-waltiu-react)

- Auto fix for formatting (aimed to be used standalone without Prettier)
- Designed to work with TypeScript
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint eslint-config-waltiu-react
```

### Config `.eslintrc`

```json
{
  "extends": "eslint-config-waltiu-react"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
