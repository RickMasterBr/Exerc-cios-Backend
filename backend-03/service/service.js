let bd = require("..repository/bd.json")

class Services{

    getUsuarios() {
        return bd
    }

    getUsuarioById(id) {
        const objetoUsuario = bd.find(item => item.id == id)

        if(!objetoUsuario) {
            throw new Error(`Usuario com o id ${id} não encontrado`)
        }

        return objetoUsuario
    }

    addUsuario(obj) {
        const {nome, email} = obj

    }

    editarUsuario(id,obj){
        let 
    }

}