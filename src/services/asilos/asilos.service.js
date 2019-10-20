// Initializes the `asilos` service on path `/asilos`
const { Asilos } = require('./asilos.class');
const createModel = require('../../models/asilos.model');
const hooks = require('./asilos.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/asilos', new Asilos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('asilos');

  service.hooks(hooks);
};
