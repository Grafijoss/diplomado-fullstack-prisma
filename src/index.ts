import express, { Request, Response } from 'express'
//import dotenv from 'dotenv';
import cors from 'cors'
import 'dotenv/config'

import allRoutesV1 from './routes/v1'


// facilita la lectura del archivo .env
// dotenv.config();

// inicializamos una instancia de express
const app = express();

// establecer de que origen se puede acceder a la API
const corsOtions = {
    origin: '*' // TODOS
}

app.use(cors(corsOtions));
app.use(express.json()); // recibe las peticiones en formato json

// Asociar endpoints al archivo maestro
app.use('/api/v1', allRoutesV1)

/* ya no es necesario
app.use('/', (req: Request, res: Response) => {
    res.send('hola mundo :p');
})
*/

export default app;




