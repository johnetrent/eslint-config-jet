const {ERROR, OFF} = require('../shared');

module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'arrow-body-style': [ERROR, 'as-needed'],
    'arrow-parens': OFF,
    'arrow-spacing': [ERROR, {before: true, after: true}],
    'constructor-super': OFF,
    'generator-star-spacing': OFF,
    'no-class-assign': ERROR,
    'no-confusing-arrow': ERROR,
    'no-const-assign': ERROR,
    'no-dupe-class-members': ERROR,
    'no-duplicate-imports': ERROR,
    'no-new-symbol': ERROR,
    'no-restricted-imports': ERROR,
    'no-this-before-super': OFF,
    'no-useless-computed-key': ERROR,
    'no-useless-constructor': ERROR,
    'no-useless-rename': OFF,
    'no-var': ERROR,
    'object-property-newline': [ERROR, {allowMultiplePropertiesPerLine: true}],
    'object-shorthand': ERROR,
    'prefer-arrow-callback': ERROR,
    'prefer-const': ERROR,
    'prefer-destructuring': [
      ERROR,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': ERROR,
    'prefer-rest-params': ERROR,
    'prefer-spread': ERROR,
    'prefer-template': ERROR,
    'require-yield': OFF,
    'rest-spread-spacing': [ERROR, 'never'],
    'symbol-description': ERROR,
    'template-curly-spacing': ERROR,
    'yield-star-spacing': [ERROR, 'before'],
  },
};
