const path = require('path');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const swagger = require('feathers-swagger');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

const authentication = require('./authentication');

const app = feathers();

// Load app configuration
app.configure(configuration(path.join(__dirname, '..')));
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up Plugins and providers
app.configure(hooks());
app.configure(rest());
app.configure(socketio());

app.configure(authentication);

// Set up automatic swagger docs
app.configure(swagger({
  docsPath: '/docs',
  uiIndex: path.join(__dirname, 'docs/docs.html'),
  info: {
    title: 'Human Connection API',
    description: 'API documentation for humanconnection.org'
  }
}))

// Set up our services (see `services/index.js`)
app.configure(services);
// Configure middleware (see `middleware/index.js`) - always has to be last
app.configure(middleware);
app.hooks(appHooks);

module.exports = app;
