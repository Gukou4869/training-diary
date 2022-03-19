module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', '@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
  // extends: [
  //   'eslint-config-prettier',
  //   'airbnb',
  //   'airbnb-typescript',
  //   'airbnb/hooks',
  //   'eslint:recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:@typescript-eslint/recommended-requiring-type-checking',
  //   'plugin:react/recommended',
  //   'plugin:react/jsx-runtime',
  //   'next',
  //   'next/core-web-vitals',
  //   'prettier',
  // ],
  rules: {
    curly: ['error', 'all'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'react/require-default-props': 'off',
    'arrow-body-style': ['error', 'always'],
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
  },
};
