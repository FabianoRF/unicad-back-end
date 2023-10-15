import express from 'express';
import { AppDataSource } from './database';
import router from './routes';
import cors from 'cors';

import './container';

const app = express();
AppDataSource.initialize();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => 'Server running on port 4000');
