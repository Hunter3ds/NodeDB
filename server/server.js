import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'clientes'
})
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

let sql = 'CREATE DATABASE clientes2';
db.query(sql, function(err){
    if(err) throw err;
    console.log('Database Created');
})

// Middlewares
app.use(cors());
app.use(express.json()); // No ES6, não é necessário body-parser

// Rotas
app.get('/', (req, res) => {
    res.send('API funcionando com ES6!');
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${3000}`);
});