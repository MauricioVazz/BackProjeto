import { Router } from 'express'
import UsuarioController from '../controllers/Usuario.Controller.js'

const routerUsuario = Router()

routerUsuario.get('/', UsuarioController.index)
routerUsuario.post('/', UsuarioController.store)

export default routerUsuario