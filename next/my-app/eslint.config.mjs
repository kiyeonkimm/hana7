import { FlatCompat } from '@eslint/eslintrc';

//import eslintConfigPrettier from 'eslint-config-prettier';

//const __filename = fileURLToPath(import.meta.url);

const compat = new FlatCompat({
  //baseDirectory: __dirname,
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  // ...compat.extends('next/core-web-vitals', 'next/typescript','prettier'),
  // eslintConfigPrettier
  ...compat.config({
    extends: ['next', 'next/typescript', 'prettier'],
  }),
];

export default eslintConfig;
