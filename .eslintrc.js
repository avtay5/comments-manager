module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-boolean-value': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'react/forbid-prop-types': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
};
