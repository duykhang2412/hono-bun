import express from 'express';
import { getUser, createUser, updateUser } from '../../hono-core/src/controller/user-controller.js';

const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 3000;
app.use(express.json());

app.get('/user/:id', async (req, res) => {
    try {
        const resp = await getUser(req.params.id);
        res.json(resp);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal error' });
    }
});

app.post('/user', async (req, res) => {
    try {
        const { userId, userName } = req.body;
        const resp = await createUser({ userId, userName });
        res.json(resp);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal error' });
    }
});


app.put('/user', async (req, res) => {
    try {
        const { userId, userName } = req.body;
        const ok = await updateUser({ userId, userName });
        res.json({ ok });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal error' });
    }
});


export function startHttpServer() {
    app.listen(HTTP_PORT, () => {
        console.log(` HTTP server listening on port ${HTTP_PORT}`);
    });
}
