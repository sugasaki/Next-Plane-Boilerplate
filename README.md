# Next-Plane-Boilerplate




# Create Project



```
yarn create next-app --typescript
```



ESLint

```
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

```

.eslintrc.json

```
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "settings": {
    "react": {
      "version": "latest"
    }
  },
  "plugins": ["prettier"],
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": [2, { "singleQuote": true, "semi": false }],
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "no-console": [
      2,
      {
        "allow": ["warn", "error"]
      }
    ]
  }
}
```



```
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/eslint
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
yarn add -D lint-staged
```


## Prettier導入



```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
yarn -D add @types/prettier @types/eslint-plugin-prettier
```

.prettierrc

```
{
  "semi": false,
  "singleQuote": true,
  "bracketSpacing": true,
  "tabWidth": 2,
  "printWidth": 100
}
```



## VSCode


add `.vscode/settings.json`

```
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```



