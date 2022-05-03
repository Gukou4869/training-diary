const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
        "@storybook/testing-library",
    ],
    framework: "@storybook/react",
    core: {
        builder: "webpack5",
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: "[local]___[hash:base64:2]",
                        },
                    },
                },
                "sass-loader",
            ],
        });
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    "@/components": path.resolve(__dirname, "../src/components"),
                    "@/lib": path.resolve(__dirname, "../src/lib"),
                    "@/models": path.resolve(__dirname, "../src/models"),
                    "@/pages": path.resolve(__dirname, "../src/pages"),
                    "@/styles": path.resolve(__dirname, "../src/styles"),
                    "@/assets": path.resolve(__dirname, "../src/assets"),
                },
            },
        };
    },
};
