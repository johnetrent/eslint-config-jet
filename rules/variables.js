const {ERROR, OFF} = require('../shared');

module.exports = {
  rules: {
    'init-declarations': OFF,
    'no-catch-shadow': ERROR,
    'no-delete-var': ERROR,
    'no-label-var': ERROR,
    'no-restricted-globals': ERROR,
    'no-shadow': ERROR,
    'no-shadow-restricted-names': ERROR,
    'no-undef': ERROR,
    'no-undef-init': ERROR,
    'no-undefined': OFF,
    'no-unused-vars': [ERROR, {vars: 'all', args: 'after-used'}],
    'no-use-before-define': OFF,
  },
};
