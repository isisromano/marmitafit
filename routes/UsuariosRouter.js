const UsuariosRouter =  require('express').Router()
const UsuariosController = require('../controllers/UsuariosController')

UsuariosRouter.get('/entrar', UsuariosController.showEntrar);
UsuariosRouter.post('/add', UsuariosController.add)



module.exports = UsuariosRouter;