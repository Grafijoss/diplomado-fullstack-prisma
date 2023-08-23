// Importing Prisma Client
import { PrismaClient } from '@prisma/client'

import { Request, Response } from 'express'

// Creamos una nueva instancia de prisma
const prisma = new PrismaClient()

const getAllClientes = async (req: Request, res: Response ) => {

    try {
        const result = await prisma.clientes.findMany();
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

const getClienteById = async (req: Request, res: Response ) => {
    const {id} = req.params;
    try {
        const result = await prisma.clientes.findUnique({
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
const createCliente = async (req: Request, res: Response ) => {

    try {
        const result = await prisma.clientes.create({data: req.body});
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

// UPDATE
const actualizarCliente = async (req: Request, res: Response ) => {
    const {id} = req.params;
    const {body} = req;

    try {
        const result = await prisma.clientes.update({
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
const deleteCliente = async (req: Request, res: Response ) => {
    const {id} = req.params;
    try {
        const result = await prisma.clientes.delete({
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
    getAllClientes,
    getClienteById,
    createCliente,
    actualizarCliente,
    deleteCliente,
}