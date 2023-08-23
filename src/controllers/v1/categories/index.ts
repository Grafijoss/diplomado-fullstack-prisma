// Importing Prisma Client
import { PrismaClient } from '@prisma/client'

import { Request, Response } from 'express'

// Creamos una nueva instancia de prisma
const prisma = new PrismaClient()

const getAllCategories = async (req: Request, res: Response ) => {

    try {
        const result = await prisma.categorias.findMany();
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

const getCategoryById = async (req: Request, res: Response ) => {
    const {id} = req.params;
    try {
        const result = await prisma.categorias.findUnique({
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
const createCategory = async (req: Request, res: Response ) => {

    try {
        const result = await prisma.categorias.create({data: req.body});
        res.status(200).json(result)
    } catch (error) {
        console.log('Se presento un error', error)
        res.status(500).json(error)
    }
}

// UPDATE
const actualizarCategory = async (req: Request, res: Response ) => {
    const {id} = req.params;
    const {body} = req;

    try {
        const result = await prisma.categorias.update({
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
const deleteCategory = async (req: Request, res: Response ) => {
    const {id} = req.params;
    try {
        const result = await prisma.categorias.delete({
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
    getAllCategories,
    getCategoryById,
    createCategory,
    actualizarCategory,
    deleteCategory,
}