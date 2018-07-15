const presets = [
    '@babel/react',
    [
        '@babel/env',
        {
            targets: {
                browsers: 'last 2 versions',
            },
            useBuiltIns: 'usage',
        },
    ],
];

const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = { presets, plugins };
