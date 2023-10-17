import express from 'express';
import { AppDataSource } from './database';
import router from './routes';
import cors from 'cors';

import './container';
import { errorHandler } from './middlewares/errors';

const app = express();
const port = process.env.PORT || 4000;
AppDataSource.initialize();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => 'Server running on port 4000');
