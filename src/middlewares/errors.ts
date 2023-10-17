import { NextFunction, Request, Response } from 'express';
import AppError from '../helpers/AppError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  console.error('ERROR ::', err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
