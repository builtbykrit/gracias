module.exports = exports = {
    env: {
        "node": true,
        "es6": true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
      },
    rules: {
        'indent': ['error', 4],
    }
};