import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import multer from 'multer';
import http from 'http';
import { ORIGIN } from './config.js';
import { sessionMiddleware } from './middlewares/session.js';
import authRoute from './routes/auth.js';
import homeRoute from './routes/home.js';
import './middlewares/passport.js';
// Initializations
const app = express();
const server = http.createServer(app);
const corsMiddleware = cors({
    origin: ORIGIN,
    methods: 'GET, POST, PUT, DELETE, HEAD, OPTIONS',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    credentials: true
});
// Middlewares
app.use(morgan('dev'));
app.use(corsMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer().none());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use('/api/auth', authRoute);
app.use('/api/home', homeRoute);
export default server;
