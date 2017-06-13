// Initializes the `posts` service on path `/posts`
const createService = require('feathers-nedb');
const createModel = require('../../models/posts.model');
const hooks = require('./posts.hooks');
const filters = require('./posts.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'posts',
    Model,
    paginate
  };

  const appService = createService(options);

  appService.docs = {
    description: 'A service to send and receive posts',
    definitions: {
      posts: {
        'type': 'object',
        'required': [
          'text'
        ],
        'properties': {
          'text': {
            'type': 'string',
            'description': 'The posts text'
          },
          'userId': {
            'type': 'string',
            'description': 'The id of the user that sent the message'
          }
        }
      }
    }
  };

  // Initialize our service with any options it requires
  app.use('/posts', appService);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('posts');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
