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

module.exports = { presets };
