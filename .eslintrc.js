module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": ["plugin:@typescript-eslint/recommended", "react-app", 'plugin:prettier/recommended'],
    "plugins": ["@typescript-eslint", "react"],
    "rules": {
        '@typescript-eslint/indent': ['error', 2],
        "@typescript-eslint/explicit-member-accessibility": 0,
        "prettier/prettier": ["error", { "singleQuote": true }]
    }
};
