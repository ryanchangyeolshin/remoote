module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/explicit-function-return-type" : "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "indent": ["error", 2],
    }
}
