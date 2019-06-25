const { join } = require('path')

module.exports = {
  plugins: [
    require('postcss-import'),
    require("tailwindcss")("./tailwind.config.js"),
    require('autoprefixer')(),
    // require('@fullhuman/postcss-purgecss')({
    //   content: [
    //     join(__dirname, './src/**/*.vue'),
    //     join(__dirname, './src/**/*.js')
    //   ],
    //   defaultExtractor(content) {
    //     const contentWithoutStyleBlocks = content.replace(
    //       /<style[^]+?<\/style>/gi,
    //       ''
    //     )
    //     return (
    //       contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
    //       []
    //     )
    //   },
    //   whitelist: ['blockquote'],
    //   whitelistPatterns: [
    //     /-(leave|enter|appear)(|-(to|from|active))$/,
    //     /^(?!(|.*?:)cursor-move).+-move$/,
    //     /^router-link(|-exact)-active$/
    //   ]
    // })
  ]
}
