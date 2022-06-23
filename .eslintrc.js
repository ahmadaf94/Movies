module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "vue/no-v-for-template-key": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
