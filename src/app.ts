import express from 'express';
import morgan from 'morgan';
import mainRouter from './routes/mainRouter';

const server = express();

server.use(express.json());
server.use(morgan('dev'))

server.use("/", mainRouter);

export default server;


