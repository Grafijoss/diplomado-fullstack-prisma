import express from "express"

// importamos los controladores
import {
    getAllClientes,
    getClienteById,
    createCliente,
    actualizarCliente,
    deleteCliente
} from '../../../controllers/v1/clientes'

// importamos los middlewares


import { updateDateMiddleware } from '../../../middlewares/updateDate'

// definimos una constante para crear la ruta
const router = express.Router();

// endpoints
// usamos los verbos GET, PUT, POST, DELETE
// para añadir los middlewares pasamos despues de la ruta un arreglo
// el primer campo es el middleware y el segundo es el controlador
// ahora el middleware se inyecta en cada ruta
// router.get('/', getAllClientes)
router.get('/', [updateDateMiddleware, getAllClientes])
router.get('/:id', [updateDateMiddleware, getClienteById])
router.post('/', [updateDateMiddleware, createCliente])
router.put('/:id', [updateDateMiddleware, actualizarCliente])
router.delete('/:id', [updateDateMiddleware, deleteCliente])


// exportamos la ruta
// para asociarla a la ruta principal

export default router