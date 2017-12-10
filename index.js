module.exports = {
  extends: [
    './rules/best-practices',
    './rules/ecma-features',
    './rules/legacy',
    './rules/node',
    './rules/possible-errors',
    './rules/strict',
    './rules/style',
    './rules/variables',
    './rules/plugins/babel',
    './rules/plugins/prettier',
    'eslint-config-prettier',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {},
};
