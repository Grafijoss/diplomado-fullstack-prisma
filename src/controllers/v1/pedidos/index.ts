// Importing Prisma Client
import { PrismaClient } from '@prisma/client'

import { Request, Response } from 'express'

// Creamos una nueva instancia de prisma
const prisma = new PrismaClient()

const getAllPedidos = async (req: Request, res: Response ) => {

    try {
        const result = await prisma.pedidos.findMany({
            include: {
                items: {
                    include: {
                        producto: true,
                    }
                },
                cliente: true
            }
        });
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

const getPedidoById = async (req: Request, res: Response ) => {
    const {id} = req.params;
    try {
        const result = await prisma.pedidos.findUnique({
            // pasamos la centencia
            // el id no puede ser de tipo string
            // lo pasamos a entero
            where: {id: parseInt(id)}
        });
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500)
    }
}

// POST
const createPedido = async (req: Request, res: Response ) => {

    try {
        const result = await prisma.pedidos.create({data: req.body});
        
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

 
// UPDATE
const actualizarPedido = async (req: Request, res: Response ) => {
    const {id} = req.params;
    const {body} = req;

    try {
        const result = await prisma.pedidos.update({
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
const deletePedido = async (req: Request, res: Response ) => {
    const {id} = req.params;
    try {
        const result = await prisma.pedidos.delete({
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
    getAllPedidos,
    getPedidoById,
    createPedido,
    actualizarPedido,
    deletePedido,
}