module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script'
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-redeclare': 'warn'
    }
  }
];
