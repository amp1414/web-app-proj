// server.js

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/config.js'; // Asegúrate de que la ruta sea correcta
import userRoutes from './server/routes/user.routes.js'; // Ajusta la ruta según sea necesario
import dotenv from 'dotenv';

dotenv.config();

// Crear la aplicación Express
const app = express();

// Configuración de CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Configuración para aceptar datos JSON
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect(config.mongoUri)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error to connect to MongoDB', err));

// Utilizar las rutas para la aplicación
app.use('/api/users', userRoutes);

// Configurar el puerto y arrancar el servidor
app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}`);
});