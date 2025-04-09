import express from 'express';
import { sayHello, ping } from './grpc-client.js';

const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 3000;

app.use(express.json());

app.get('/hello', async (req, res) => {
    const name = (req.query.name as string) || 'World';
    try {
        const response = await sayHello(name);
        res.json(response);
    } catch (error) {
        console.error('Error in /hello:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/ping', async (req, res) => {
    try {
        const response = await ping();
        res.json(response);
    } catch (error) {
        console.error('Error in /ping:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export function startHttpServer() {
    app.listen(HTTP_PORT, () => {
        console.log(`🌐 HTTP server listening on port ${HTTP_PORT}`);
    });
}
