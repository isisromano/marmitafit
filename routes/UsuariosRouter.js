const UsuariosRouter =  require('express').Router()
const usuariosController = require('../controllers/UsuariosController')

UsuariosRouter.get('/entrar', UsuariosController.showEntrar);
UsuariosRouter.post('/add', UsuariosController.add)



module.exports = UsuariosRouter;