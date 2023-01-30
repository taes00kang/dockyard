module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "unused-imports"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/no-cycle": 0,
    "react/button-has-type": 0,
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "@typescript-eslint/no-shadow": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/function-component-definition": [
      0,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": 0,
    "unused-imports/no-unused-imports-ts": 0,
    "no-nested-ternary": 0,
  },
};
