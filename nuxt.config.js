const path = require('path');
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
        'window.Tether': 'tether',
      }),
    ],
    extend(config) {
      const aliases = Object.assign(config.resolve.alias, {
        '~helpers': path.resolve(__dirname, 'helpers'),
      });
      config.resolve.alias = aliases; // eslint-disable-line no-param-reassign
    },
  },
  css: [
    {src: '~assets/scss/style.scss', lang: 'scss'},
  ],
  dev: process.env.NODE_ENV !== 'production',
  plugins: [
    {src: '~plugins/bootstrap.js'},
  ],
};
