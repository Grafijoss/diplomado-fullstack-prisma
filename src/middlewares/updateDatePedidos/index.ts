import { Request, Response, NextFunction} from 'express'

export const updateDatePedidosMiddleware = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {

    const currentDate = new Date()

    if (req.body.items?.create) {
        req.body.items.create = req.body.items.create.map((item: any) => {
          return {
            ...item,
            fecha_actualizacion: currentDate,
          };
        });
      }

    return next()
}