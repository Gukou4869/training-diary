const path = require('path');

module.exports = {
    stories: ['../src/components/**/stories.tsx'],
    addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
    staticDirs: ['../public'],
    webpackFinal: async config => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                },
            },
        };
    },
};
