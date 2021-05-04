const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports(' ', {
        libraryDirectory: 'es',
        style: 'css',
    }),
)