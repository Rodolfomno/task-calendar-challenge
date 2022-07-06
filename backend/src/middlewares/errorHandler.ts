import { Request, Response, NextFunction } from 'express';

class HttpExcpetion extends Error {
  status: number;

  message: string;

  details?: [err: { type: string, message: string } ];

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default function errorHandler(
  error: HttpExcpetion,
  _req: Request,
  res: Response,
  _next: NextFunction,
  ) {

  console.log(error);
  return res.status(500).json({ message: error.message });
}
