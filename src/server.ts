import express from 'express';
import "reflect-metadata";
import "./database"
import { router } from './routes';

const app = express();

app.use(express.json())
app.use(router);

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