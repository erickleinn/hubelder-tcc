// asilos-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const asilos = new Schema(
    {
      nome: { type: String, required: true },
      endereco: { type: String, required: true },
      cep: { type: String, required: true },
      cnpj: { type: String, required: true },
      telefone: { type: String, required: true },
      descricao: { type: String, required: true },
      // foto: { type: String, required: true },
      aceitaDoacao: { type: Boolean, required: true },
      diasDisponiveis: {
        type: {
          segundaFeira: Boolean,
          tercaFeira: Boolean,
          quartaFeira: Boolean,
          quintaFeira: Boolean,
          sextaFeira: Boolean,
          sabado: Boolean,
          domingo: Boolean
        },
        required: true
      },
      pessoaResponsavel: { type: String, required: true },
      itensAceitos: { type: [String], required: false }
    },
    {
      timestamps: true
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model("asilos");
  } catch (e) {
    return mongooseClient.model("asilos", asilos);
  }
};
