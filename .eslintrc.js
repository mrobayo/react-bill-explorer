module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:storybook/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {}
};