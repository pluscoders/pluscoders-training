module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'nonblock-statement-body-position': 'off',
    curly: 'off',
    'comma-dangle': 'off',
    semi: 'off'
  }
}
