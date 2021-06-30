import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";
import "reflect-metadata";
import "./database"
import { router } from './routes';

const app = express();

app.use(express.json())
app.use(router);

/// middleware de error, 4 parâmetros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})
app.listen(3000, () => console.log('Server is running...'))



// yarn add typescript -D
// yarn tsc --init 
// yarn add express
// yarn add @types/express
// yarn add ts-node-dev -D
// yarn add typeorm reflect-metadata sqlite3
//http://localhost:3000

/*
GET => Buscar informações...
POST => Inserir uma informação...
PUT => Alterar informações...
DELETE => Deletar informações...
PATCH => Alterar informações especificas... ex: senha

==============

Tipos de parâmetros

Routes Params => http://lh3000/produtos/:id

Query Params => http://lh3000/produtos?name=teclado&description=tecladobom

Body Params => {
    POST, PUT, PATCH = {
        "name": "teclado",
        "description": "teclado bom"
    }
}
*/