const repository = require('../repository/funcionarioRepository');

function listarFuncionarios() {
    return repository.listar();
}

function inserirFuncionario(funcionario) {
    repository.inserir(funcionario);
}

function atualizarFuncionario(id, dados) {
    repository.atualizar(id, dados);
}

function excluirFuncionario(id) {
    repository.excluir(id);
}

module.exports ={ 
    listarFuncionarios,
    inserirFuncionario,
    atualizarFuncionario,
    excluirFuncionario
}