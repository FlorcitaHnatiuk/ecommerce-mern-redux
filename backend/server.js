import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import dotenv from 'dotenv';
import path from 'path';
import cluster from 'node:cluster';
import { cpus } from 'node:os';
import process from 'node:process';
import logger from "./logger.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI).then(() => {
    logger.info('Connected to db')
}).catch(err => {
    logger.error('Cannot connect')
})

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/api/config/google', (req, res) => {
    res.send(process.env.GOOGLE_API_KEY || '');
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

const numOfCpus = cpus().length

if (cluster.isPrimary) {
    logger.info(`Number of cpus is ${numOfCpus}`)
    logger.info(`Primary ${process.pid} is running`)
    for (let i = 0; i < numOfCpus; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        logger.warn(`Worker ${worker.process.pid} died`, new Date().toLocaleString())
        cluster.fork()
    })
} else {
    const port = parseInt(process.argv[2]) || 5000;
    app.get('/', (req, res) => {
        res.send(`Worker on port ${port} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })
    app.listen(port, err => {
        if (!err) { logger.info(`Worker on port ${port} - PID worker ${process.pid}`) }
    })
}