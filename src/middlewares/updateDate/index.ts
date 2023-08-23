import { Request, Response, NextFunction} from 'express'

export const updateDateMiddleware = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const methodsWithDate = ['POST', 'PUT']
    const isMethodWithDate = methodsWithDate.includes(req.method)
    
    if(isMethodWithDate) {
        console.log({
            body: req.body
        })
        const currentDate = new Date()
        //@ts-ignore
        // directiva en typescript que ignora el tipado especifico
        req.body.fecha_actualizacion = currentDate
        
        
    }
    return next()
}