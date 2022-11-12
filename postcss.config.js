module.exports = {
    plugins: [
      require('postcss-import-ext-glob'),
      require('postcss-import'),
      require('postcss-inline-svg'),
      require('postcss-simple-vars'),
      require('autoprefixer'),
      require('postcss-nested'),
      require('cssnano'),
    ]
  }