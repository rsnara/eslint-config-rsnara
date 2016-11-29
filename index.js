module.exports = {
  'parser': 'babel-eslint',          // https://github.com/babel/babel-eslint
  'plugins': [
    'react',                          // https://github.com/yannickcr/eslint-plugin-react
    'immutable'
  ],
  'env': {                           // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    'browser': true,                 // browser global variables
    'node': true,                     // Node.js global variables and Node.js-specific rules
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 6
  },
  'rules': {
    'immutable/no-mutation': 2,
    'immutable/no-let': 2,
    'immutable/no-this': 2,
    'no-undef': 2,
    'no-useless-constructor': 'error',
    'arrow-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'never'],
    'no-unneeded-ternary': 'error',
    'constructor-super': 'error',
    'yield-star-spacing': ['error', 'after'],
    'no-confusing-arrow': ['error'],
/**
 * Strict mode
 */
    'strict': [2, 'safe'],          // http://eslint.org/docs/rules/strict

/**
 * ES6
 */
    'no-var': 2,                     // http://eslint.org/docs/rules/no-var
    'prefer-const': 2,               // http://eslint.org/docs/rules/prefer-const

/**
 * Variables
 */
    'no-shadow': 2,                  // http://eslint.org/docs/rules/no-shadow
    'no-shadow-restricted-names': 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-unused-vars': [2, {          // http://eslint.org/docs/rules/no-unused-vars
      'vars': 'local',
      'args': 'after-used'
    }],
    'no-use-before-define': 0,       // http://eslint.org/docs/rules/no-use-before-define

/**
 * Possible errors
 */
    'comma-dangle': [2, 'always-multiline'],    // http://eslint.org/docs/rules/comma-dangle
    'no-cond-assign': [2, 'always'], // http://eslint.org/docs/rules/no-cond-assign
    'no-console': 1,                 // http://eslint.org/docs/rules/no-console
    'no-debugger': 1,                // http://eslint.org/docs/rules/no-debugger
    'no-alert': 1,                   // http://eslint.org/docs/rules/no-alert
    'no-constant-condition': 1,      // http://eslint.org/docs/rules/no-constant-condition
    'no-dupe-keys': 2,               // http://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 2,          // http://eslint.org/docs/rules/no-duplicate-case
    'no-empty': 2,                   // http://eslint.org/docs/rules/no-empty
    'no-ex-assign': 2,               // http://eslint.org/docs/rules/no-ex-assign
    'no-extra-boolean-cast': 0,      // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-semi': 2,              // http://eslint.org/docs/rules/no-extra-semi
    'no-func-assign': 2,             // http://eslint.org/docs/rules/no-func-assign
    'no-inner-declarations': 2,      // http://eslint.org/docs/rules/no-inner-declarations
    'no-invalid-regexp': 2,          // http://eslint.org/docs/rules/no-invalid-regexp
    'no-irregular-whitespace': 2,    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-obj-calls': 2,               // http://eslint.org/docs/rules/no-obj-calls
    'no-sparse-arrays': 2,           // http://eslint.org/docs/rules/no-sparse-arrays
    'no-unreachable': 2,             // http://eslint.org/docs/rules/no-unreachable
    'use-isnan': 2,                  // http://eslint.org/docs/rules/use-isnan
    'block-scoped-var': 0,           // http://eslint.org/docs/rules/block-scoped-var

/**
 * Best practices
 */
    'consistent-return': 2,          // http://eslint.org/docs/rules/consistent-return
    'curly': [2, 'multi-line'],      // http://eslint.org/docs/rules/curly
    'default-case': 2,               // http://eslint.org/docs/rules/default-case
    'dot-notation': [2, {            // http://eslint.org/docs/rules/dot-notation
      'allowKeywords': true
    }],
    'eqeqeq': 2,                     // http://eslint.org/docs/rules/eqeqeq
    'guard-for-in': 0,               // http://eslint.org/docs/rules/guard-for-in
    'no-caller': 2,                  // http://eslint.org/docs/rules/no-caller
    'no-else-return': 2,             // http://eslint.org/docs/rules/no-else-return
    'no-eq-null': 2,                 // http://eslint.org/docs/rules/no-eq-null
    'no-eval': 2,                    // http://eslint.org/docs/rules/no-eval
    'no-extend-native': 2,           // http://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 2,              // http://eslint.org/docs/rules/no-extra-bind
    'no-fallthrough': 2,             // http://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 2,        // http://eslint.org/docs/rules/no-floating-decimal
    'no-implied-eval': 2,            // http://eslint.org/docs/rules/no-implied-eval
    'no-lone-blocks': 2,             // http://eslint.org/docs/rules/no-lone-blocks
    'no-loop-func': 2,               // http://eslint.org/docs/rules/no-loop-func
    'no-multi-str': 2,               // http://eslint.org/docs/rules/no-multi-str
    'no-native-reassign': 2,         // http://eslint.org/docs/rules/no-native-reassign
    'no-new': 2,                     // http://eslint.org/docs/rules/no-new
    'no-new-func': 2,                // http://eslint.org/docs/rules/no-new-func
    'no-new-wrappers': 2,            // http://eslint.org/docs/rules/no-new-wrappers
    'no-octal': 2,                   // http://eslint.org/docs/rules/no-octal
    'no-octal-escape': 2,            // http://eslint.org/docs/rules/no-octal-escape
    'no-param-reassign': 2,          // http://eslint.org/docs/rules/no-param-reassign
    'no-proto': 2,                   // http://eslint.org/docs/rules/no-proto
    'no-redeclare': 2,               // http://eslint.org/docs/rules/no-redeclare
    'no-return-assign': 2,           // http://eslint.org/docs/rules/no-return-assign
    'no-script-url': 2,              // http://eslint.org/docs/rules/no-script-url
    'no-self-compare': 2,            // http://eslint.org/docs/rules/no-self-compare
    'no-sequences': 2,               // http://eslint.org/docs/rules/no-sequences
    'no-throw-literal': 2,           // http://eslint.org/docs/rules/no-throw-literal
    'no-with': 2,                    // http://eslint.org/docs/rules/no-with
    'radix': 2,                      // http://eslint.org/docs/rules/radix
    'vars-on-top': 2,                // http://eslint.org/docs/rules/vars-on-top
    'wrap-iife': [2, 'any'],         // http://eslint.org/docs/rules/wrap-iife
    'yoda': 2,                       // http://eslint.org/docs/rules/yoda

/**
 * Style
 */
    'indent': ['error', 2, {
      'SwitchCase': 1                // http://eslint.org/docs/rules/indent
    }],
    'brace-style': [2,               // http://eslint.org/docs/rules/brace-style
      '1tbs', {
      'allowSingleLine': true
    }],
    'object-shorthand': ['error', 'always'],
    'max-len': ['error', 100],
    'prefer-arrow-callback': ['error', { 'allowNamedFunctions': true }],
    'quotes': [
      2, 'single', 'avoid-escape'    // http://eslint.org/docs/rules/quotes
    ],
    'camelcase': [2, {               // http://eslint.org/docs/rules/camelcase
      'properties': 'never'
    }],
    'comma-spacing': [2, {           // http://eslint.org/docs/rules/comma-spacing
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],      // http://eslint.org/docs/rules/comma-style
    'eol-last': 2,                   // http://eslint.org/docs/rules/eol-last
    'func-names': 1,                 // http://eslint.org/docs/rules/func-names
    'key-spacing': [2, {             // http://eslint.org/docs/rules/key-spacing
        'beforeColon': false,
        'afterColon': true
    }],
    'new-cap': [2, {                 // http://eslint.org/docs/rules/new-cap
      'newIsCap': true,
      'capIsNew': false
    }],
    'no-multiple-empty-lines': [2, { // http://eslint.org/docs/rules/no-multiple-empty-lines
      'max': 2
    }],
    'no-nested-ternary': 2,          // http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 2,              // http://eslint.org/docs/rules/no-new-object
    'no-spaced-func': 2,             // http://eslint.org/docs/rules/no-spaced-func
    'no-trailing-spaces': 2,         // http://eslint.org/docs/rules/no-trailing-spaces
    'no-extra-parens': [2, 'functions'], // http://eslint.org/docs/rules/no-extra-parens
    'no-underscore-dangle': 0,       // http://eslint.org/docs/rules/no-underscore-dangle
    'one-var': [2, 'never'],         // http://eslint.org/docs/rules/one-var
    'padded-blocks': [2, 'never'],   // http://eslint.org/docs/rules/padded-blocks
    'semi': [2, 'always'],           // http://eslint.org/docs/rules/semi
    'semi-spacing': [2, {            // http://eslint.org/docs/rules/semi-spacing
      'before': false,
      'after': true
    }],
    'keyword-spacing': 2,            // http://eslint.org/docs/rules/keyword-spacing
    'space-before-blocks': 2,        // http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2, 'never'], // http://eslint.org/docs/rules/space-before-function-paren
    'space-infix-ops': 2,            // http://eslint.org/docs/rules/space-infix-ops
    'spaced-comment': 2,             // http://eslint.org/docs/rules/spaced-comment

/**
 * JSX style
 */
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-key': ['error'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-space-before-closing': ['error', 'never'],
    'react/display-name': 0,         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/jsx-boolean-value': 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'jsx-quotes': [2, 'prefer-double'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-quotes.md
    'react/jsx-no-undef': 2,         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-sort-props': 0,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-prop-types': 0,  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
    'react/jsx-uses-react': 2,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-vars': 2,        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/no-did-mount-set-state': [2, 'disallow-in-func'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-update-set-state': 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-multi-comp': 2,        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-unknown-property': 2,  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/prop-types': 2,           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/react-in-jsx-scope': 2,   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/self-closing-comp': 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/jsx-wrap-multilines': 2,      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
    'react/sort-comp': [2, {         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      'order': [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
         '/^_(?!(on|get|render))/',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'state',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        '/^_?on.+$/',
        '/^_?get.+$/',
        '/^_?render.+$/',
        'render'
      ]
    }]
  }
}
