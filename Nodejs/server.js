const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');


const usersRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;
const ipAddress = '192.168.1.2'; 

const app = express();
const server = http.createServer(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');


app.set('port', port);

usersRoutes(app);


app.get('/', (req, res) => {
    res.send('Ruta raiz del Backend');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Error interno del servidor');
});

server.listen(port, ipAddress, () => {
    console.log(`Aplicación de NodeJS con PID ${process.pid} iniciada en el puerto ${port}`);
});
