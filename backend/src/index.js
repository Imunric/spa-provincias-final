const express = require('express');
const cors = require('cors'); // importar CORS
const app = express();
const sequelize = require('./config/database');
const provinciasRoutes = require('./routes/provincias.routes');

app.use(express.json());

// Habilitar CORS
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Ruta principal
app.get('/', (req, res) => {
    res.send('API de provincias de España');
});

// Rutas de provincias
app.use('/provincias', provinciasRoutes);

// Sincronización de base de datos y arranque del servidor
sequelize.sync()
.then(() => {
    console.log('Base de datos conectada y sincronizada');
    app.listen(3000, () => {
        console.log('Servidor escuchando en http://localhost:3000');
    });
})
.catch(err => console.error('Error de conexión a la base de datos:', err));