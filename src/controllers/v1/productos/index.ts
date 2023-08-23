// Importing Prisma Client
import { PrismaClient, Prisma } from '@prisma/client'

import { Request, Response } from 'express'

// Creamos una nueva instancia de prisma
const prisma = new PrismaClient()

const getAllProductos = async (req: Request, res: Response ) => {

    try {
        // sentencia
        const result = await prisma.productos.findMany({include: {categoria: true}});
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

const getProductoById = async (req: Request, res: Response ) => {
    const {id} = req.params;
    try {
        const result = await prisma.productos.findUnique({
            // pasamos la centencia
            // el id no puede ser de tipo string
            // lo pasamos a entero
            where: {id: parseInt(id)},
            // copiamos la sentencia
            include: {
                categoria: true,
                PedidosItems: true
            }
        });
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500)
    }
}

// POST
const createProducto = async (req: Request, res: Response ) => {

    try {
        const result = await prisma.productos.create({data: req.body});
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

// UPDATE
const actualizarProducto = async (req: Request, res: Response ) => {
    const {id} = req.params;
    const {body} = req;

    try {
        const result = await prisma.productos.update({
            // pasamos la centencia
            // el id no puede ser de tipo string
            // lo pasamos a entero
            // where es la condicion de busqueda
            where: {id: parseInt(id)},
            data: body
        });
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

// DELETE
const deleteProducto = async (req: Request, res: Response ) => {
    const {id} = req.params;
    try {
        const result = await prisma.productos.delete({
            // pasamos la centencia
            // el id no puede ser de tipo string
            // lo pasamos a entero
            where: {id: parseInt(id)}
        });
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

export {
    getAllProductos,
    getProductoById,
    createProducto,
    actualizarProducto,
    deleteProducto,
}