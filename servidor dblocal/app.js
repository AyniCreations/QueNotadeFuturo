//import express from 'express';
//import morgan from 'morgan';
//import cors from 'cors';
//import path from 'path';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');



const app = express();

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/login';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a LocalDB') },
    /** handle initial connection error */
    err => { console.log(err) }
);
    
//MIDDELWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Para acceder al directorio actual
app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.use('/user', require('./routes/usuarios'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// ASIGNAR PUERTO DINAMICO
app.set('puerto', process.env.PORT || 8080);
app.listen(app.get('puerto'), function () {
 console.log('Contectado al puerto '+ app.get('puerto'));
});
