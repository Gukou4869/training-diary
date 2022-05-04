module.exports = {
    root: true,
    plugins: ["strict-dependencies", "unused-imports"],
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals",
        "prettier",
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
