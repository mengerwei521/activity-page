module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", 'prettier'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'quotes': 'off',
    "space-before-function-paren": "off",
    "semi": "off",
    "spaced-comment": "off",
    "no-unused-vars": "off",
    "prettier/prettier": "off",
    "no-empty": 'off'

  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
