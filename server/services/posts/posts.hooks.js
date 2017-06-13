const { authenticate } = require('feathers-authentication').hooks;
const {
  queryWithCurrentUser,
  associateCurrentUser,
  restrictToOwner
} = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [],
    find: [
      authenticate('jwt'),
      queryWithCurrentUser()
    ],
    get: [
      authenticate('jwt'),
      restrictToOwner()
    ],
    create: [
      associateCurrentUser()
    ],
    update: [
      authenticate('jwt'),
      restrictToOwner()
    ],
    patch: [
      authenticate('jwt'),
      restrictToOwner()
    ],
    remove: [
      authenticate('jwt'),
      restrictToOwner()
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
