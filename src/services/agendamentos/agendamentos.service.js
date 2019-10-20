// Initializes the `agendamentos` service on path `/agendamentos`
const { Agendamentos } = require('./agendamentos.class');
const createModel = require('../../models/agendamentos.model');
const hooks = require('./agendamentos.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/agendamentos', new Agendamentos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('agendamentos');

  service.hooks(hooks);
};
