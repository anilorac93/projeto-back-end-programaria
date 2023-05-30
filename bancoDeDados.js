const mongoose = require('mongoose');

async function conectaBancooDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou');

    await mongoose.connect('mongodb+srv://mariottocarolina:igoLGUNqb9rlk10a@clustermulheres.rvm2ewj.mongodb.net/?retryWrites=true&w=majority');

    console.log('Conexão com o banco de dados feita com sucesso!');
    } catch(erro) {
        console.log(erro);
    }
};

module.exports = conectaBancooDeDados;