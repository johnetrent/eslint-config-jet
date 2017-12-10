const {ERROR} = require('../../shared');

module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      ERROR,
      {
        trailingComma: 'all',
        singleQuote: true,
        bracketSpacing: false,
        parser: 'babylon',
      },
    ],
  },
};
