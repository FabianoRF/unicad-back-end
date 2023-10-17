import express from 'express';
import { AppDataSource } from './database';
import router from './routes';
import cors from 'cors';

import './container';
import { errorHandler } from './middlewares/errors';

const app = express();
AppDataSource.initialize();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(4000, () => 'Server running on port 4000');
