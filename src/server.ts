import express, { NextFunction, Request, Response } from 'express';
import { AppDataSource } from './database';
import router from './routes';
import cors from 'cors';

import './container';
import AppError from './helpers/AppError';

const app = express();
AppDataSource.initialize();

app.use(cors());
app.use(express.json());
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
app.use(router);

app.listen(4000, () => 'Server running on port 4000');
