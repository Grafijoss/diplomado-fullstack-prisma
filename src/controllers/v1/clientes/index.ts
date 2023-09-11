// Importing Prisma Client
import { PrismaClient } from '@prisma/client'

import { Request, Response } from 'express'

// Creamos una nueva instancia de prisma
const prisma = new PrismaClient()

const checkCliente = async (req: Request, res: Response ) => {

    const { correo } = req.body;

    try {
        const result = await prisma.clientes.findUnique({
            where: { correo: correo }
        });

        if(result) {
            console.log('SI EXISTE')
            return res.status(400).json({ message: 'El cliente ya existe'})
        }
        console.log('NO EXISTE')
        return res.status(200).json({
            usuario: correo,
            message: 'El cliente no existe'
        })
    } catch (error) {
        console.log('Se presento un error', error)
        return res.status(500).json(error)
    }
}


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
        const resultCheck = await prisma.clientes.findUnique({
            where: { correo: req.body.correo }
        });

        if (resultCheck) {
            console.log('SI EXISTE')
            return res.status(400).json({ message: 'El cliente ya existe'})
        }

        const result = await prisma.clientes.create({data: req.body});
        return res.status(200).json({
            ...result,
            message: 'El cliente se creo correctamente'
        })

    } catch (error) {
        console.log('Se presento un error', error)
        return res.status(500).json(error)
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
    checkCliente
}