const {ERROR, OFF} = require('../shared');

module.exports = {
  env: {
    node: true,
  },
  rules: {
    'callback-return': ERROR,
    'global-require': ERROR,
    'handle-callback-err': OFF,
    'no-buffer-constructor': ERROR,
    'no-mixed-requires': OFF,
    'no-new-require': OFF,
    'no-path-concat': OFF,
    'no-process-exit': ERROR,
    'no-restricted-modules': OFF,
    'no-sync': OFF,
  },
};
