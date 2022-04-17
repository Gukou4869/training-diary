module.exports = {
    root: true,
    plugins: [
        "strict-dependencies", // 後述
        "unused-imports", // 後述
    ],
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals", // 後述
        "prettier", // 後述
    ],
    rules: {
        "import/extensions": 0,
        "react/function-component-definition": [
            0,
            {
                namedComponents: "function-declaration",
                unnamedComponents: "function-expression",
            },
        ],
        "react/jsx-props-no-spreading": 0,
        "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
        "no-shadow": "off",
        "default-param-last": 0,
    },
};
