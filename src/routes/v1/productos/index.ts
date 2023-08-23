import express from "express"

// importamos los controladores
import {
    getAllProductos,
    getProductoById,
    createProducto,
    actualizarProducto,
    deleteProducto
} from '../../../controllers/v1/productos'

// importamos los middlewares


import { updateDateMiddleware } from '../../../middlewares/updateDate'

// definimos una constante para crear la ruta
const router = express.Router();

// endpoints
// usamos los verbos GET, PUT, POST, DELETE
// para añadir los middlewares pasamos despues de la ruta un arreglo
// el primer campo es el middleware y el segundo es el controlador
// ahora el middleware se inyecta en cada ruta
// router.get('/', getAllProductos)
router.get('/', [updateDateMiddleware, getAllProductos])
router.get('/:id', [updateDateMiddleware, getProductoById])
router.post('/', [updateDateMiddleware, createProducto])
router.put('/:id', [updateDateMiddleware, actualizarProducto])
router.delete('/:id', [updateDateMiddleware, deleteProducto])


// exportamos la ruta
// para asociarla a la ruta principal

export default router