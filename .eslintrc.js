module.exports = {
    parser: 'babel-eslint',
    plugins: ['react', 'prettier', 'jest'],
    env: {
        browser: true,
    },
    extends: [
        'airbnb',
        'plugin:prettier/recommended',
        'prettier/react',
        'prettier/standard',
        'plugin:jest/recommended',
    ],
    rules: {
        indent: 0,

        'prettier/prettier': 'error',

        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-filename-extension': 0,
    },
};
