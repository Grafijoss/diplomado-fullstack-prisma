import express from "express"

// importamos los controladores
import {
    getAllPedidos,
    getPedidoById,
    createPedido,
    actualizarPedido,
    deletePedido
} from '../../../controllers/v1/pedidos'

// importamos los middlewares


import { updateDateMiddleware } from '../../../middlewares/updateDate'
import { updateDatePedidosMiddleware } from '../../../middlewares/updateDatePedidos'

// definimos una constante para crear la ruta
const router = express.Router();

// endpoints
// usamos los verbos GET, PUT, POST, DELETE
// para añadir los middlewares pasamos despues de la ruta un arreglo
// el primer campo es el middleware y el segundo es el controlador
// ahora el middleware se inyecta en cada ruta
// router.get('/', getAllPedidos)
router.get('/', [updateDateMiddleware, getAllPedidos])
router.get('/:id', [updateDateMiddleware, getPedidoById])
router.post('/', [updateDateMiddleware, updateDatePedidosMiddleware, createPedido])
router.put('/:id', [updateDateMiddleware, updateDatePedidosMiddleware, actualizarPedido])
router.delete('/:id', [updateDateMiddleware, deletePedido])


// exportamos la ruta
// para asociarla a la ruta principal

export default router