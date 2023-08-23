"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//nimport dotenv from 'dotenv';
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
// facilita la lectura del archivo .env
// dotenv.config();
// inicializamos una instancia de express
const app = (0, express_1.default)();
// establecer de que origen se puede acceder a la API
const corsOtions = {
    origin: '*' // TODOS
};
app.use((0, cors_1.default)(corsOtions));
app.use(express_1.default.json()); // recibe las peticiones en formato json
app.use('/', (req, res) => {
    res.send('hola mundo :D');
});
exports.default = app;
