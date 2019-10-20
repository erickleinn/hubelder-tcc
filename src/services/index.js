const pessoas = require('./pessoas/pessoas.service.js');
const asilos = require('./asilos/asilos.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pessoas);
  app.configure(asilos);
};
