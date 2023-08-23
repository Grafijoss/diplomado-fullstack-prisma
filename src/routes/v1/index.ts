import express from 'express'

// importamos todas las rutas de cada controlador
import categoriasRouter from './categories'
import clientesRouter from './clientes'
import pedidosRouter from './pedidos'
import productosRouter from './productos'
import usuariosRouter from './usuarios'


const router = express.Router();


// asociamos las rutas a los enpoints

// el path del endpoint /categorias
// apunta al router de categorias categoriasRouter
router.use('/categorias', categoriasRouter)     // api/v1/categorias
router.use('/clientes', clientesRouter)         // api/v1/clientes
router.use('/pedidos', pedidosRouter)           // api/v1/pedidos
router.use('/productos', productosRouter)       // api/v1/productos
router.use('/usuarios', usuariosRouter)         // api/v1/usuarios

export default router