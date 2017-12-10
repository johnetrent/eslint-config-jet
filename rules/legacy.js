const {OFF} = require('../shared');

module.exports = {
  rules: {
    'max-depth': [OFF, 4],
    'max-len': [OFF, 80, 4],
    'max-params': [OFF, 3],
    'max-statements': [OFF, 10],
    'no-bitwise': OFF,
    'no-plusplus': OFF,
  },
};
