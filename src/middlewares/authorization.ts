import { NextFunction, Response, Request } from 'express';
import { User } from '../models/User';

const isAppAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.user;

  const user = await User.findById(_id);

  if (user?.role.includes('App Admin')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not app admin',
    });
  }
};

const isOwner = async (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.user;

  if (role.includes('Owner')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not owner authorize to access this api',
    });
  }
};

const isInventoryManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { role } = req.user;

  if (role.includes('Inventory Manager') || role.includes('Owner')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not authorize to access this page',
    });
  }
};

export { isOwner, isInventoryManager, isAppAdmin };
