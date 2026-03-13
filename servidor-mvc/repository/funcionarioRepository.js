let funcionarios = [
    {id: 1, funcao: "gerente", cpf:"16005618700"},
    {id: 2, funcao: "programador", cpf:"09492022744"}
];

function listar(){
    return funcionarios;
}

function inserir(funcionario){
    funcionarios.push(funcionario);
}

function atualizar(id, dados){
    const index = funcionarios.findIndex(f => f.id == id);

    if(index !== -1){
        funcionarios[index] = {...funcionarios[index], ...dados};
    }
}

function excluir(id){
    funcionarios = funcionarios.filter(f => f.id != id);
}

module.exports = {
    listar,
    inserir,
    atualizar,
    excluir
}