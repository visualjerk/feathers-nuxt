const path = require('path');
const webpack = require('webpack');

module.exports = {
  build: {
    vendor: [
      // Bootstrap
      'jquery',
      'tether',
      'bootstrap',
      // Feathers
      'feathers/client',
      'feathers-socketio/client',
      'socket.io-client',
      'feathers-hooks',
      'feathers-authentication-client',
    ],
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
        '~helpers': path.resolve(__dirname, 'client/helpers'),
      });
      config.resolve.alias = aliases; // eslint-disable-line no-param-reassign
    },
  },
  css: [
    {src: '~assets/scss/style.scss', lang: 'scss'},
  ],
  dev: process.env.NODE_ENV !== 'production',
  env: {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3030,
  },
  plugins: [
    {src: '~plugins/bootstrap.js'},
    {src: '~plugins/feathers.js', injectAs: 'feathers'},
  ],
  router: {
    middleware: 'check-auth',
    linkActiveClass: 'active',
  },
  rootDir: path.resolve(__dirname),
  srcDir: path.resolve(__dirname, 'client'),
};
