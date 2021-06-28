import express from 'express';

const app = express();

// yarn add typescript -D
// yarn tsc --init 
// yarn add express
// yarn add @types/express
// yarn add ts-node-dev -D
//http://localhost:3000

app.listen(3000, () => console.log('Server is running...'))


/*
GET => Buscar informações...
POST => Inserir uma informação...
PUT => Alterar informações...
DELETE => Deletar informações...
PATCH => Alterar informações especificas... ex: senha
*/
app.get('/home', (req, res) => {
    //req => entra
    //res => sai

    res.send('Olá nlw')
})

app.post('/home-post', (req, res) => {
    res.send('Olá nlw - POST')
})