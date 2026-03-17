const js = require('@eslint/js');
const {FlatCompat} = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: ['legacy/**', 'dist/**', 'docs/**', '**/*.js'],
  },
  ...compat.extends('./node_modules/gts/'),
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      'no-empty': 0,
      'no-constant-condition': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      'prefer-const': ['error', {destructuring: 'all'}],
      'no-restricted-syntax': ['error', 'SequenceExpression'],
    },
  },
];
