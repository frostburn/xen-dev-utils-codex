import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

export default [
  ...require('gts'),
  {
    ignores: [
      'legacy/**',
      'dist/**',
      'docs/**',
      'src/__tests__/**',
      'src/__benchmarks__/**',
      '**/*.js',
    ],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    rules: {
      'prefer-const': ['error', {destructuring: 'all'}],
      'no-restricted-syntax': ['error', 'SequenceExpression'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
    },
  },
];
