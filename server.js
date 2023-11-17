// server.js

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/config.js';
import userRoutes from './server/routes/user.routes.js'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());


app.use(bodyParser.json());


mongoose.connect(config.mongoUri)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error to connect to MongoDB', err));

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
  });

app.listen(config.port, () => {
  console.log(`Server running at port ${config.port}`);
});