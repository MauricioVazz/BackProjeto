import { Router } from 'express'
import UsuarioController from '../controllers/Usuario.Controller.js'

const routerUsuario = Router()

routerUsuario.get('/', UsuarioController.index)
routerUsuario.post('/', UsuarioController.store)
routerUsuario.get('/:email', UsuarioController.show)
routerUsuario.put('/:email', UsuarioController.update)
routerUsuario.delete('/id', UsuarioController.delete)

export default routerUsuario