const bcrypt = require('bcrypt');

const usuariosController ={
    showEntrar: (req,res) => {
       let erroNoCadastro = (req.query.erroNoCadastro == 1)
       res.render('entrar.ejs',{erroNoCadastro})
    },
    add: (req,res) =>{
        let (email,senha, confirmacao,endereco) = req.body;
        if(senha != confirmacao){
            return res.redirect('/usuarios/entrar?erroNoCadastro=1');
        }

        let usuario = {
            email,
            senha: bcrypt.hashSync(senha, 10),
            enderecos: [endereco]
        };
        const fs = require('fs');
        const path = require('path');
         const usuarios = require('../database/usuarios.json');
         usuarios.push(usuario);
         fs.writeFileSync(
            path.join(_dirname,'../database/usuarios.json'),
            JSON.stringify(usuarios, null, 4)
         );b b
         delete usuario.senha;
         req.session.usuario = usuario; 

        res.send(usuario);
    }

}
module.exports = usuariosController