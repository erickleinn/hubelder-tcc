// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { app } = context;
    const pessoa = context.params.pessoa;
    const asilo = await app.service("asilos").get(context.data.idAsilo);
    const dataAtual = new Date();
    const dataAgendamento = new Date(context.data.horaAgendamento);

    if(dataAgendamento.getTime() < dataAtual.getTime() ){
      throw new errors.BadRequest("Não é possivel fazer um agendamento no passado");
    }

    context.data.idPessoa = pessoa._id;

    if (context.data.doacoes && context.data.doacoes.length > 0) {
      context.data.doacoes = context.data.doacoes.filter(doacao => {
        return asilo.itensAceitos.indexOf(doacao) !== -1;
      });
    }
    return context;
  };
};
