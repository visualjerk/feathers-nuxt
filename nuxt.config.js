const webpack = require('webpack');

module.exports = {
  build: {
    vendor: ['jquery', 'tether', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Tether: 'tether',
        'window.jQuery': 'jquery',
        'window.Tether': 'tether'
      })
    ]
  },
  css: [
    {src: '~assets/scss/style.scss', lang: 'scss'},
  ],
  dev: process.env.NODE_ENV !== 'production',
  plugins: [
    {src: '~plugins/bootstrap.js'}
  ]
};
