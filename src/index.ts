import express, { Router, Request, Response } from 'express';

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world' });
});

app.use(route);

app.listen(4000, () => 'server running on port 4000');
