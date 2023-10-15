import express from 'express';
import { AppDataSource } from './database';
import router from './routes';

const app = express();
AppDataSource.initialize();

app.use(express.json());
app.use(router);

app.listen(4000, () => 'server running on port 4000');
