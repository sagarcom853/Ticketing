import type { Request, Response, NextFunction} from "express";

interface CustomError extends Error {
  statusCode?: number;
  errors?: { message: string; field?: string }[];
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  // Set default status code and error format
  const statusCode = err.statusCode || 400;
  const errors = err.errors || [{ message: err.message || 'Something went wrong' }];

  res.status(statusCode).send({ errors });
};