// server.js

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/config.js';
import userRoutes from './server/routes/user.routes.js'; 
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const app = express();

app.use(cors());


app.use(bodyParser.json());

mongoose.connect(config.mongoUri)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error to connect to MongoDB', err));
app.set('views', path.join(__dirname, 'server', 'views'));
app.use('/api/users', userRoutes);

app.set('view engine', 'ejs');
  app.get("/", (req, res) => {
    res.render('index'); // Render the home page
  });
app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}`);
});