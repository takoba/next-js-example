module.exports = {
  root: true,
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
