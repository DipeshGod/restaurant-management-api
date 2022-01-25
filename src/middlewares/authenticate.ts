import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

//middleware to authenticate token
const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
      res.sendStatus(401);
      return;
    }

    const isVerfied = jwt.verify(token, process.env.TOKEN_SECRET!);

    if (isVerfied) {
      req.user = isVerfied;
      next();
    }
  } catch (err) {
    console.log('error in authentication middleware', err);
  }
};

export { authentication };
