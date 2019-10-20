// Initializes the `pessoas` service on path `/pessoas`
const { Pessoas } = require('./pessoas.class');
const createModel = require('../../models/pessoas.model');
const hooks = require('./pessoas.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  app.use('/pessoas', new Pessoas(options, app));

  const service = app.service('pessoas');

  service.hooks(hooks);
};
