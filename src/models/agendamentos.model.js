// agendamentos-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const agendamentos = new Schema({
    idAsilo: { type: String, required: true },
    idPessoa: { type: String, required: true },
    doacoes: { type: [
      String
    ], required: false },
    horaAgendamento: { type: Date, required: true }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('agendamentos');
  } catch (e) {
    return mongooseClient.model('agendamentos', agendamentos);
  }
};
