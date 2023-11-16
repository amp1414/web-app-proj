import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'
import userRoutes from './server/routes/user.routes.js'
import compress from 'compression'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
export default app;
