const {ERROR, OFF} = require('../../shared');

module.exports = {
  plugins: ['babel'],
  rules: {
    'babel/array-bracket-spacing': [ERROR, 'never'],
    'babel/arrow-parens': [ERROR, 'as-needed'],
    'babel/flow-object-type': [ERROR, 'comma'],
    'babel/func-params-comma-dangle': [ERROR, 'always-multiline'],
    'babel/generator-star-spacing': [ERROR, {before: true, after: false}],
    'babel/new-cap': OFF,
    'babel/no-await-in-loop': ERROR,
    'babel/no-invalid-this': ERROR,
    'babel/object-curly-spacing': [ERROR, 'never'],
    'babel/object-shorthand': OFF,
    'babel/semi': ERROR,
  },
};
