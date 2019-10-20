// pessoas-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const pessoas = new mongooseClient.Schema(
    {
      email: { type: String, unique: true, lowercase: true },
      senha: { type: String, required: true },
      dataNascimento: { type: Date, required: true },
      cpf: { type: String, required: true },
      cep: { type: String, required: true },
      endereco: { type: String, required: true },
      telefone: { type: String, required: true },
      // foto: { type: String, required: true },
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model('pessoas', pessoas);
};
