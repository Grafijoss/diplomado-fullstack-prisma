import express from "express"

// importamos los controladores
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    actualizarCategory,
    deleteCategory
} from '../../../controllers/v1/categories'

// importamos los middlewares


import { updateDateMiddleware } from '../../../middlewares/updateDate'

// definimos una constante para crear la ruta
const router = express.Router();

// endpoints
// usamos los verbos GET, PUT, POST, DELETE
// para añadir los middlewares pasamos despues de la ruta un arreglo
// el primer campo es el middleware y el segundo es el controlador
// ahora el middleware se inyecta en cada ruta
// router.get('/', getAllCategories)
router.get('/', [updateDateMiddleware, getAllCategories])
router.get('/:id', [updateDateMiddleware, getCategoryById])
router.post('/', [updateDateMiddleware, createCategory])
router.put('/:id', [updateDateMiddleware, actualizarCategory])
router.delete('/:id', [updateDateMiddleware, deleteCategory])


// exportamos la ruta
// para asociarla a la ruta principal

export default router