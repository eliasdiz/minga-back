import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import indexRouter from './routes/index.js'
import cors from 'cors'
import { __dirname } from './utlis.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.use('/', indexRouter);


export default app
